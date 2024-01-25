import React, { useState, useEffect } from 'react';
import { Card, Space, Modal, Input, Button } from 'antd';
import { getGoals, updateGoals } from '../../../utilities/goalsService';
import OurDatePicker from '../../components/UserPreferenceForm/DatePicker';
import dayjs from 'dayjs';

export default function GoalsPage() {
  const [visible, setVisible] = useState(false);
  const [goals, setGoals] = useState([]); 
  const [cardData, setCardData] = useState({
    _id: null,
    name: '',
    description: '',
    endDate: '',
    targetAmount: 0,
    currentAmount: 0
  });

  // useEffect(() => {
  //   const fetchGoals = async () => {
  //     try {
  //       const data = await getGoals();
  //       setGoals(data); 
  //     } catch (error) {
  //       console.error('Failed to fetch goals:', error);
  //     }
  //   };

  //   fetchGoals();
  // }, []);

    useEffect(() => {
    populateSampleData();
  }, []);

  const populateSampleData = () => {
    const sampleGoals = [
      {
        _id: '1',
        name: 'Emergency Fund',
        description: 'Save for unexpected expenses',
        endDate: new Date(2023, 11, 31).toISOString(),
        targetAmount: 1000,
        currentAmount: 200
      },
      {
        _id: '2',
        name: 'Vacation',
        description: 'Trip to Hawaii',
        endDate: new Date(2024, 5, 15).toISOString(),
        targetAmount: 5000,
        currentAmount: 1000
      },
      {
        _id: '3',
        name: 'Retirement',
        description: 'Retirement savings account',
        endDate: new Date(2040, 0, 1).toISOString(),
        targetAmount: 500000,
        currentAmount: 75000
      },
      
    ];
    setGoals(sampleGoals);
  };

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
      const updatedGoal = await updateGoals(cardData); 
      if (cardData._id) {
        setGoals(goals.map((goal) => goal._id === cardData._id ? updatedGoal : goal));
      } else {
        setGoals([...goals, updatedGoal]);
      }
      setVisible(false);
    } catch (error) {
      console.error('Error updating goal:', error);
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
        {goals.map((goal) => {
          const progressPercent = goal.targetAmount > 0 ? (goal.currentAmount / goal.targetAmount) * 100 : 0;
          return (
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
              <Progress percent={progressPercent} size="small" />
            </Card>
          );
        })}
        <Card
          onClick={handleAddNew}
          style={{ width: 300, cursor: 'pointer' }}
        >
          <p>Add New Goal</p>
        </Card>
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
          value={cardData.name} 
          onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
          placeholder="Name"
        />
        <Input 
          value={cardData.description} 
          onChange={(e) => setCardData({ ...cardData, description: e.target.value })}
          placeholder="Description"
        />
        <OurDatePicker 
          value={dayjs(cardData.endDate)} 
          onChange={(date, dateString) => setCardData({ ...cardData, endDate: dateString })}
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
