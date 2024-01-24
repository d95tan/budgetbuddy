import { React , useState } from 'react';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import {  Dropdown, message, Space } from 'antd';


const items = [
  {
    label: 'Quarterly',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: 'Monthly',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: 'Half-monthly',
    key: '3',
    icon: <UserOutlined />,
  },
  {
    label: 'Annually',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    // disabled: true,
  },
];


export default function DropdownUpdateFreq() {

 const [frequency, setFrequency] = useState('Frequency');

  
 const handleButtonClick = (e) => {
  // message.info('Click on left button.');
  // console.log('click left button', e);
  };
  
const handleMenuClick = (event) => {
  // message.info('Click on menu item.');
  // console.log('click', e);
  
  setFrequency(event.target.value);

  };
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
    };
  
  return (
    <>
      <Space wrap>
        <Dropdown.Button
          menu={menuProps}
          placement="bottom"
          icon={<CalendarOutlined />}
          onClick={handleButtonClick}
        >
          {frequency}
        </Dropdown.Button>
      </Space>
    </>
  );
}