import React, { useState } from 'react';
import { BookOutlined,PrinterOutlined,SaveOutlined, ManOutlined, SettingOutlined ,MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('دانشجویان', 'sub1', <ManOutlined />, [
    getItem('ایجاد دانشجوی جدید', '1'),
    getItem('لیست دانشجویان', '2'),
  ]),

  getItem('دروس', 'sub2', <BookOutlined />, [
    getItem('ایجاد درس جدید', '5'),
    getItem('لیست دروس', '6'),
  ]),

 
  getItem('ارائه', 'sub3',<SettingOutlined />, [
    
   
  ]),
    getItem('ثبت نمره نهایی', '13',<SaveOutlined />),
    getItem(' صدور کارنامه نهایی', '14',<PrinterOutlined />),
   
  
];

const Dashbord: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');
  const [collapsed, setCollapsed] = useState(false);
  

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div >
        <Button className='MenuBar' type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 ,width:256}}>
    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
  </Button>
  <Switch className='dark '
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <Menu className='Menu'
      
      theme={theme}
      onClick={onClick}
      style={{ width: 256 }}
      defaultOpenKeys={['sub1','sub2','sub3']}
      selectedKeys={[current]}
      inlineCollapsed={collapsed}
      mode="inline"
      items={items}
    /></div>
  
  );
};

export default Dashbord;
