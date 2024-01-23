import { currencyToNum, numToCurrency } from "./helper";
import * as logsAPI from "./logsAPI";

export async function getLogs() {
  const data = await logsAPI.getLogs();
  // console.log(data);
  const logs = [...data];

  return logs;
}

export async function updateLogs(logs) {
  const body = []
  for (const log of logs) {
    body.push({
      id: log.id,
      userId: log.userId,
      date: log.date,
      savings: [...log.savings],
      investments: [...log.investments],
      liabilities: [...log.liabilities],
    })
  }
  console.log(body)
  const response = await logsAPI.updateLogs(body);
  return response;
}

export function getColumnHeaders(logs) {
  const savingsAccNames = [];
  const investmentAccNames = [];
  const liabilityAccNames = [];

  for (let log of logs) {
    for (let { name } of log.savings) {
      if (!savingsAccNames.includes(name)) {
        savingsAccNames.push(name);
      }
    }
    for (let { name } of log.investments) {
      if (!investmentAccNames.includes(name)) {
        investmentAccNames.push(name);
      }
    }
    for (let { name } of log.liabilities) {
      if (!liabilityAccNames.includes(name)) {
        liabilityAccNames.push(name);
      }
    }
  }

  const width =
    90 /
      (savingsAccNames.length +
        investmentAccNames.length +
        liabilityAccNames.length) +
    "%";

  const allAccNames = [
    { Title: "Date", dataIndex: "date", width: "10%" },
    ...savingsAccNames.map((name) => {
      return {
        title: name,
        dataIndex: "s-"+ name,
        editable: true,
        width,
        className: "savings"
      };
    }),
    ...investmentAccNames.map((name) => {
      return {
        title: name,
        dataIndex: "i-"+ name,
        editable: true,
        width,
        className: "investments"
      };
    }),
    ...liabilityAccNames.map((name) => {
      return {
        title: name,
        dataIndex: "l-"+ name,
        editable: true,
        width,
        className: "liabilities"
      };
    }),
  ];
  return allAccNames;
}

export function flattenLogs(logs) {
  const flattened = [];
  logs.forEach((log) => {
    const data = {};
    data.key = log.date;
    data.date = log.date;
    data.id = log.id
    for (let account of log.savings) {
      data["s-"+account.name] = numToCurrency(account.amount);
    }
    for (let account of log.investments) {
      data["i-"+account.name] = numToCurrency(account.amount);
    }
    for (let account of log.liabilities) {
      data["l-"+account.name] = numToCurrency(account.amount);
    }
    flattened.push(data);
  });
  console.log(flattened)
  return flattened;
}

export function packageLogs(logs, data, ids) {
  const packaged = [];
  for (const row of data) {
    if (ids.includes(row.id)) {
      const [log] = structuredClone(logs.filter(i => i.id === row.id))
      log.totalSavings = 0;
      log.totalInvestments = 0;
      log.totalLiabilities = 0;
      for (let acc of log.savings) {
        acc.amount = currencyToNum(row["s-" + acc.name])
        log.totalSavings += acc.amount;
      }
      for (let acc of log.investments) {
        acc.amount = currencyToNum(row["i-" + acc.name])
        log.totalInvestments += acc.amount;
      }
      for (let acc of log.liabilities) {
        acc.amount = currencyToNum(row["l-" + acc.name])
        log.totalLiabilities += acc.amount;
      }
      log.total = log.totalSavings + log.totalInvestments - log.totalLiabilities;
      packaged.push(log)
    }
  }
  // console.log(packaged)
  return packaged
}

export function logArrToObj(logs) {
  const copy = structuredClone(logs);
  
  copy.forEach((log, i) => {

    copy[i].key = log.date

    const savingAccountsArr = [...log.savings];
    const savingAccountsObj = {};
    for (const account of savingAccountsArr) {
      savingAccountsObj[account.name] = account;
    }
    copy[i].savings = savingAccountsObj;

    const investmentAccountsArr = [...log.investments];
    const investmentAccountsObj = {};
    for (const account of investmentAccountsArr) {
      investmentAccountsObj[account.name] = account;
    }
    copy[i].investments = investmentAccountsObj;

    const liabilitiesAccountsArr = [...log.liabilities];
    const liabilitiesAccountsObj = {};
    for (const account of liabilitiesAccountsArr) {
      liabilitiesAccountsObj[account.name] = account;
    }
    copy[i].liabilities = liabilitiesAccountsObj;
  })
  // console.log(copy)
  return copy;
}