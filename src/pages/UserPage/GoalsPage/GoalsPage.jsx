import React, { useState, useEffect } from 'react';
import { Card, Space, Modal, Input, Button } from 'antd';

export default function GoalsPage() {
  const [visible, setVisible] = useState(false);
  const [cardData, setCardData] = useState({
    _id: null,
    name: '',
    description: '',
    endDate: '',
    targetAmount: 0,
    currentAmount: 0
  });

// Placeholder data for goals
const placeholderGoals = [
  {
    _id: '1',
    name: 'Emergency Fund',
    description: 'Save up for unexpected expenses',
    endDate: '2023-12-31',
    targetAmount: 1000,
    currentAmount: 200
  },
  {
    _id: '2',
    name: 'Vacation',
    description: 'Trip to Hawaii',
    endDate: '2024-06-30',
    targetAmount: 5000,
    currentAmount: 1000
  },
];
const [goals, setGoals] = useState(placeholderGoals);

  // useEffect(() => {
  //   const fetchGoals = async () => {
  //     try {
  //       const response = await fetch('/api/goals');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setGoals(data);
  //     } catch (error) {
  //       console.error('Error fetching goals:', error);
  //     }
  //   };

  //   fetchGoals();
  // }, []);

  const handleClickOpen = (goal, event) => {
    event.preventDefault();
    setCardData(goal);
    setVisible(true);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/goals/${cardData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}or! status: ${response.status}`);
      }

      const updatedGoal = await response.json();
      setGoals(goals.map((goal) => goal._id === cardData._id ? updatedGoal : goal));
      setVisible(false);
    } catch (error) {
      console.error('Error updating goal:', error);
    }
  };

  return (
    <>
      <h1>Goals Page</h1>
      <Space direction="vertical" size={16}>
        {goals.map((goal) => (
          <Card
            key={goal._id}
            title={goal.name}
            extra={<a href="#" onClick={(event) => handleClickOpen(goal, event)}>Edit</a>}
            style={{ width: 300 }}
          >
            <p>Description: {goal.description}</p>
            <p>End Date: {new Date(goal.endDate).toLocaleDateString()}</p>
            <p>Target Amount: ${goal.targetAmount.toFixed(2)}</p>
            <p>Current Amount: ${goal.currentAmount.toFixed(2)}</p>
          </Card>
        ))}
      </Space>
      <Modal
        title="Edit Goal"
        open={visible}
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
          placeholder="Name"
          value={cardData.name}
          onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
        />
        <Input.TextArea
          placeholder="Description"
          value={cardData.description}
          onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
        />
        <Input
          placeholder="End Date"
          type="date"
          value={cardData.endDate.slice(0, 10)} 
          onChange={(e) => setCardData({ ...cardData, endDate: e.target.value })}
        />
        <Input
          placeholder="Target Amount"
          type="number"
          value={cardData.targetAmount}
          onChange={(e) => setCardData({ ...cardData, targetAmount: parseFloat(e.target.value) })}
        />
        <Input
          placeholder="Current Amount"
          type="number"
          value={cardData.currentAmount}
          onChange={(e) => setCardData({ ...cardData, currentAmount: parseFloat(e.target.value) })}
        />
      </Modal>
    </>
  );
}