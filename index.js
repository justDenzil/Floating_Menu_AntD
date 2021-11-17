import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Modal, Button, Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, MenuOutlined } from '@ant-design/icons';
import Logo from './logo'


const { SubMenu } = Menu

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" className="hamburger-btn" onClick={showModal} icon={<MenuOutlined />}>
      </Button>
      <Modal visible={isModalVisible} onCancel={handleCancel} width={230}  style={{ top: 65, left: 25, margin: 0 }} >
        <Logo />
        <div className="menu-container">
        <Menu
        onClick={this.handleClick}
        style={{ width: 210 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<SettingOutlined />} title="Manage">
          <Menu.Item key="1" icon={<SettingOutlined />}>Organization</Menu.Item>
          <Menu.Item key="2" icon={<SettingOutlined />}>Contact</Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>Project</Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>Resources</Menu.Item>
          <Menu.Item key="5" icon={<SettingOutlined />}>Timesheets</Menu.Item>
          <Menu.Item key="6" icon={<SettingOutlined />}>Privileges</Menu.Item>
          <Menu.Item key="7" icon={<SettingOutlined />}>Catalog</Menu.Item>
        </SubMenu>
      </Menu>
      </div>
      </Modal>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));