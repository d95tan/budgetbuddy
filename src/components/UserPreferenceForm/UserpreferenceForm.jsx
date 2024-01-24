import React, { useEffect, useState } from 'react';
import { Avatar, List , Modal } from 'antd';

export default function UserPreferenceForm() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data = [
    {
      title: 'Update frequency', description: 'How often would you like to input financial information?',
    },
    {
      title: 'Current income', description: 'How much do you earn monthly? Note: This is strictly used for your computation purposes.'
    },
    {
      title: 'Birthday', description: 'This will be used for your self-declared financial goal planning.'
    },
  ];

  // i want to render it upon coming in 

  // i want to implement modal window
  // i want to update the account details


  return (<>
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item onClick={ showModal }>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          // title={<a href="https://ant.design">{item.title}</a>}
          title={item.title}

          description={item.description} 
        />
       
        
        <div>Content</div>
      </List.Item>
      )}
    />
    
   <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        </Modal>
  </>);
  
}
  

//* OLD CODE
{/* <form>
        <h2>User Preference</h2>

        <label>
          How often would you like to update your financial information?
        </label>
        <input required />
        <br />

        <label>Birthdate</label>
        <input required />
        <br />

        <label>Income</label>
        <input required />
        <br />
      </form> */}