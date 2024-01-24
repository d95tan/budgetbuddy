import React, { useEffect, useState } from 'react';
import { Avatar, List, Modal } from 'antd';
import { HistoryOutlined , StockOutlined , CalendarOutlined} from "@ant-design/icons";
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
    setIsModalOpen(false);
    setCurrentModalContent(false);
  };
  const handleCancel = () => {
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
        </div>
      ),
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
          <input />

        </div>
      ),
    },
    {
      title: "Birthday",
      description:
        "This will be used for your self-declared financial goal planning.",
      icon: <CalendarOutlined style={{ fontSize: "200%" }} />,
      modalContent: (
        <div>
          <h2>Update frequency</h2>
          <p>Custom content for Update frequency</p>
          <OurDatePicker />
        </div>
      ),
    },
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
          <List.Item onClick={() => showModal(item.modalContent)}>

            <List.Item.Meta
              avatar={item.icon}
              title={item.title}
              description={item.description}
            />

            {/* // this part to render value */}
            <div>Content</div>        
          </List.Item>
        )}
      />

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