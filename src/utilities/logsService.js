import { numToCurrency } from "./helper";
import * as logsAPI from "./logsAPI";

export async function getLogs() {
  const data = await logsAPI.getLogs();
  // console.log(data);
  const logs = [...data];

  return logs;
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

  const width = 90/(savingsAccNames.length + investmentAccNames.length + liabilityAccNames.length) + "%"
  
  const allAccNames = [
    { Title: "Date", dataIndex: "date", width: "10%" },
    ...savingsAccNames.map((name) => {
      return { title: name, dataIndex: ["savings",name, "amount"], editable: true, width};
    }),
    ...investmentAccNames.map((name) => {
      return {
        title: name,
        dataIndex: ["investments", name],
        editable: true,
        width,
      };
    }),
    ...liabilityAccNames.map((name) => {
      return {
        title: name,
        dataIndex: ["liabilities",name],
        editable: true,
        width,
      };
    }),
  ];

  return allAccNames;
}

export function flattenLogs(logs) {
  const flattened = [];
  logs.forEach((log) => {
    const data = { savings: {} };
    data.key = log.date;
    data.date = log.date;
    for (let account of log.savings) {
      data.savings[account.name] = numToCurrency(account.amount);
    }
    for (let account of log.investments) {
      data[account.name] = numToCurrency(account.amount);
    }
    for (let account of log.liabilities) {
      data[account.name] = numToCurrency(account.amount);
    }
    flattened.push(data);
  });
  console.log(flattened)
  return flattened;
}
