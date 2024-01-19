import { useContext, createContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import { useOutletContext } from "react-router-dom";
import "./EditPage.css"

const EditableContext = createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

export default function EditPage() {
  const [logs, setLogs] = useOutletContext();
  console.log(logs);
  const data = [];
  let i = 0;
  for (let log of logs) {
    const info = {
      key: i,
      date: log.date,
      "DBS Savings": log.savings?.[0].amount,
      "Standard Chartered": log.savings?.[1].amount,
      "AIA Investment": log.investments?.[0].amount,
      IBKR: log.investments?.[1].amount,
      "Citibank CC": log.liabilities?.[0].amount,
    };
    data.push(info);
    i++;
  }

  console.log(data);
  const columnHeaders = [
    {
      title: "Date",
      dataIndex: "date"
    },
    {
      title: "DBS Savings",
      dataIndex: "DBS Savings",
      editable: true,
    },
    {
      title: "Standard Chartered",
      dataIndex: "Standard Chartered",
      editable: true,
    },
    {
      title: "IBKR",
      dataIndex: "IBKR",
      editable: true,
    },
    {
      title: "AIA Investment",
      dataIndex: "AIA Investment",
      editable: true,
    },
    {
      title: "Citibank CC",
      dataIndex: "Citibank CC",
      editable: true,
    },
  ];

  const columns = columnHeaders.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  const handleAdd = () => {
    const newData = {
      key: 123,
      name: `Edward King `,
      age: "32",
      address: `London, Park Lane no.`,
    };
    setLogs([...logs, newData]);
  };
  const handleSave = (row) => {
    const newData = [...logs];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setLogs(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  return (
    <>
      <h1>Edit Page</h1>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={data}
        columns={columns}
      />
    </>
  );
}
