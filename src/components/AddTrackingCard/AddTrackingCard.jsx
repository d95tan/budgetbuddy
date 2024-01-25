import { Card, InputNumber, Input, Checkbox, Select, Button } from "antd";
import { useState } from "react";
const { Option } = Select;

export default function AddTrackingCard({ type, addAccount }) {
  const newAccount = {
    savings: { name: null, amount: null, isShared: false },
    investments: { name: null, amount: null, deposit: null, dw: "add" },
    liabilities: { name: null, amount: null },
  };

  const [account, setAccount] = useState({...newAccount[type]});

  const [checked, setChecked] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();

    if (!account.name) {
      window.alert("Name required")
      return;
    }

    if (type === "investments") {
      account.deposit = Math.abs(account.deposit);
      if (account.dw === "minus") {
        addAccount({
          name: account.name,
          amount: account.amount,
          deposit: -account.deposit,
        });
      } else {
        addAccount({
          name: account.name,
          amount: account.amount,
          deposit: account.deposit,
        });
      }
    } else {
      addAccount(account, type);
    }
    setAccount(newAccount[type])
  };

  const handleNameChange = (e) => {
    setAccount({ ...account, name: e.target.value });
    // console.log(account)
  };

  const handleAmountChange = (value) => {
    // console.log(value);
    setAccount({ ...account, amount: value });
    // console.log(account)
  };

  const handleIsSharedChange = (e) => {
    console.log("checked = ", e.target.checked);
    // setChecked(e.target.checked);
    setAccount({ ...account, isShared: e.target.checked });
    // console.log(account)
  };

  const handleDepositAmountChange = (value) => {
    setAccount({ ...account, deposit: value });
    // console.log(account)
  };

  const handleDWChange = (value) => {
    setAccount({ ...account, dw: value });
    // console.log(account)
  };

  const selectBefore = (
    <Select defaultValue="add" style={{ width: 60 }} onChange={handleDWChange}>
      <Option value="add">D</Option>
      <Option value="minus">W</Option>
    </Select>
  );

  return (
    <>
      <Card
        title={
          <Input
            placeholder={
              "New " + type.charAt(0).toUpperCase() + type.slice(1) + " Account"
            }
            onChange={handleNameChange}
          />
        }
        style={{ width: "20rem" }}
        extra={
          <Button type={"primary"} onClick={handleAdd}>
            Add
          </Button>
        }
        bodyStyle={{ display: "inline-block" }}
      >
        Amount:{" "}
        <InputNumber
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={handleAmountChange}
          min={0}
        />
        <br />
        {type === "savings" ? (
          <>
            <br />
            Shared Account:{" "}
            <Checkbox checked={checked} onChange={handleIsSharedChange} />{" "}
          </>
        ) : type === "investments" ? (
          <>
            <br />
            Deposit/Withdrawal:{" "}
            <InputNumber
              addonBefore={type === "investments" ? selectBefore : null}
              defaultValue={0}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              onChange={handleDepositAmountChange}
              min={0}
              style={{
                width: "8rem",
              }}
            />
          </>
        ) : null}
      </Card>
    </>
  );
}
