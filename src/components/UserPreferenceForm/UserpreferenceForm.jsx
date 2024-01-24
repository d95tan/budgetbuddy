import './UserpreferenceForm.css';
import React, { useEffect, useState } from 'react';
import { Avatar, List, Modal } from 'antd';
import { HistoryOutlined , StockOutlined , CalendarOutlined , LockOutlined } from "@ant-design/icons";
import OurDatePicker from './DatePicker';
  
export default function UserPreferenceForm() {   //? originally from AntD

  //? improved for our use
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalContent, setCurrentModalContent] = useState(false);

  const showModal = (modalContent) => {
    setIsModalOpen(true);
    setCurrentModalContent(modalContent);
  };
  const handleOk = () => {
    //? probably need to handle submit code from forms here
    setIsModalOpen(false);
    setCurrentModalContent(false);
  };
  const handleCancel = () => {
    // do not need to handle anything
    setIsModalOpen(false);
    setCurrentModalContent(false);
  };

  //? originally from AntD
  // const [isModalOpen, setIsModalOpen] = useState(false);
  //
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  //
  // return (
  //   <>
  //     <Button onClick={showModal}>  Open Modal   </Button>
  //     <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
  //       <p>Some contents...</p>     </Modal>
  //   </>   );

  //* ok lets start working on the backend for User preferences
  // const [ birthdate, setBirthdate ] = useState( getUserPreference() );
  // const [ income, setIncome ] = useState(10);
  // const [income, setIncome] = useState( getUserPreference() );
  // const [ updatefreq, setUpdatefreq ] = useState(getUserPreference());


  const preferlist = [
    {
      title: "Update frequency",
      description: "How often would you like to input financial information?",
      icon: <HistoryOutlined style={{ fontSize: "200%" }} />,
      modalContent: (
        <div>
          <h2>Update frequency</h2>
          <p>Custom content for Update frequency</p>
          <label>freq</label>
          <input />
          {/* lets do an AJAX GET in here first */}
        </div>
      ),
      content: 'Contant', //to do AJAX GET from a db
    },
    {
      title: "Current income",
      description:
        "How much do you earn monthly? Note: This is strictly used for your computation purposes.",
      icon: <StockOutlined style={{ fontSize: "200%" }} />,
      modalContent: (
        <div>
          <h2>Current income</h2>
          <p>Custom content for Current income</p>
          <label>income</label>
          <input  />
          {/* lets do an AJAX GET in here first */}
        </div>
      ),
      content: 'Content', //to do AJAX GET from a db
    },
    {
      title: "Birthday",
      description:
        "This will be used for your self-declared financial goal planning.",
      icon: <CalendarOutlined style={{ fontSize: "200%" }} />,
      modalContent: (
        <div>
          <h2>Birthdate</h2>
          <p>Custom content for updating your birthdate</p>
          {/* lets do an AJAX GET in here first */}
          <OurDatePicker />
        </div>
      ),
      content: 'Contint', //to do AJAX GET from a db
    },
    {
      title: "Password",
      description:
        "Change your password",
      icon: <LockOutlined style={{ fontSize: "200%" }} />,
      modalContent: (
        <div>
          <h2>Change password</h2>
          <p>Custom content for password change</p>
          {/* lets do an AJAX GET in here first */}
          <label>Your current password</label>
          <input />
          <br />
          <label>Your new password</label>
          <input />
        </div>
      ),
      content: 'Contont', //to do AJAX GET from a db
    },
    // {
    //   title: '',
    //   description: '',
    //   modalContent: null,
    //   content: '',
    // },
  ];

  // i want to render it upon coming in
  // i want to implement modal window
  // i want to update the account details

  return (
    <>
      <List 
        itemLayout="horizontal"
        dataSource={preferlist}
        renderItem={(item, index) => (
          // <List.Item onClick={showModal(item.modalContent)}>
          <List.Item className='preferlistitem' onClick={() => showModal(item.modalContent)}>

            <List.Item.Meta
              avatar={item.icon}
              title={item.title}
              description={item.description}
            />

            {/* // this part to render value */}
            <div>{item.content}</div>        
          </List.Item>
        )}
        
      />
      <br />


      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {currentModalContent}
      </Modal>

    </>
  );
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