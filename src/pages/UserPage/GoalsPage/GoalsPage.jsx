import React, { useState, useEffect } from 'react';
import { Card, Space, Modal, Input, Button } from 'antd';
// import { getLogs, updateLogs } from '../../utilities/logsAPI';

export default function GoalsPage() {
  const [visible, setVisible] = useState(false);
  const [logs, setLogs] = useState([]);
  const [cardData, setCardData] = useState({
    _id: null,
    name: '',
    description: '',
    endDate: '',
    targetAmount: 0,
    currentAmount: 0
  });

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await getLogs();
        setLogs(data);
      } catch (error) {
        console.error('Failed to fetch logs:', error);
      }
    };

    fetchLogs();
  }, []);

  const handleClickOpen = (log, event) => {
    event.preventDefault();
    setCardData(log);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleSave = async () => {
    try {
      const updatedLog = await updateLogs(cardData);
      if (cardData._id) {
        setLogs(logs.map((log) => log._id === cardData._id ? updatedLog : log));
      } else {
        setLogs([...logs, updatedLog]);
      }
      setVisible(false);
    } catch (error) {
      console.error('Error updating log:', error);
    }
  };

  const handleAddNew = () => {
    setCardData({
      _id: null,
      name: '',
      description: '',
      endDate: '',
      targetAmount: 0,
      currentAmount: 0
    });
    setVisible(true);
  };

  return (
    <>
      <h1>Goals Page</h1>
      <Space direction="vertical" size={16}>
        {logs.map((log) => (
          <Card
            key={log._id}
            title={log.name}
            extra={<a href="#" onClick={(event) => handleClickOpen(log, event)}>Edit</a>}
            style={{ width: 300 }}
          >
            <p>Description: {log.description}</p>
            <p>End Date: {new Date(log.endDate).toLocaleDateString()}</p>
            <p>Target Amount: ${log.targetAmount.toFixed(2)}</p>
            <p>Current Amount: ${log.currentAmount.toFixed(2)}</p>
          </Card>
        ))}
        <Card
          onClick={handleAddNew}
          style={{ width: 300, cursor: 'pointer' }}
        >
          <p>Add New Goal</p>
        </Card>
      </Space>
      <Modal
        title="Edit Goal"
        visible={visible}
        onOk={handleSave}
        onCancel={handleClose}
        footer={[
          <Button key="back" onClick={handleClose}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Input 
          value={cardData.name} 
          onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
          placeholder="Name"
        />
        <Input 
          value={cardData.description} 
          onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
          placeholder="Description"
        />
        <Input 
          value={cardData.endDate} 
          onChange={(e) => setCardData({ ...cardData, endDate: e.target.value })}
          placeholder="End Date"
        />
        <Input 
          value={cardData.targetAmount} 
          onChange={(e) => setCardData({ ...cardData, targetAmount: e.target.value })}
          placeholder="Target Amount"
        />
        <Input 
          value={cardData.currentAmount} 
          onChange={(e) => setCardData({ ...cardData, currentAmount: e.target.value })}
          placeholder="Current Amount"
        />
      </Modal>
    </>
  );
}