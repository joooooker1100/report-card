import React, { useState } from 'react';
import { BookOutlined,PrinterOutlined,SaveOutlined, ManOutlined, SettingOutlined ,MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import ListStudents from './ListStudents';
import CreateNewStudent from './CreateNewStudent';
import CreateNewLesson from './CreateNewLesson';
import ListLessons from './ListLessons';
import { Link } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  onClick?:()=>void
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    onClick
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('دانشجویان', 'sub1', <ManOutlined />, [
    getItem('ایجاد دانشجوی جدید', '1',<Link to='CreateNewStudent'></Link>),
    getItem('لیست دانشجویان', '2',<Link to='ListStudents'></Link>),
  ]),

  getItem('دروس', 'sub2', <BookOutlined />, [
    getItem('ایجاد درس جدید', '3',<Link to='CreateNewLesson'></Link>),
    getItem('لیست دروس', '4',<Link to='ListLessons'></Link>),
  ]),

 
  getItem('ارائه', 'sub3',<SettingOutlined />, [
  ]),
    getItem('ثبت نمره نهایی', '5',<SaveOutlined />),
    getItem(' صدور کارنامه نهایی', '6',<PrinterOutlined />),
   
  
];

const Dashbord: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');
  const [collapsed, setCollapsed] = useState(false);
  const [showListStudents, setShowListStudents] = useState(false);
  const [showCreateNewStudent , setCreateNewStudent] = useState(false);
  const [showCreateNewLesson , setShowCreateNewLesson] = useState(false);
  const [showListLessons,setShowListLessons] = useState(false);
  

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  
    switch (e.key) {
      case '1':
        setCreateNewStudent(prevValue => !prevValue);
        setShowListStudents(false);
        setShowCreateNewLesson(false);
        setShowListLessons(false);
        break;
      case '2':
        setShowListStudents(prevValue => !prevValue);
        setCreateNewStudent(false);
        setShowCreateNewLesson(false);
        setShowListLessons(false);
        break;
      case '3':
        setShowCreateNewLesson(prevValue => !prevValue);
        setCreateNewStudent(false);
        setShowListStudents(false);
        setShowListLessons(false);
        break;
      case '4':
        setShowListLessons(prevValue => !prevValue);
        setCreateNewStudent(false);
        setShowListStudents(false);
        setShowCreateNewLesson(false);
        break;
      case '5':
        // اجرای کد مرتبط با ثبت نمره نهایی
        console.log('Entering final grade...');
        break;
      case '6':
        // اجرای کد مرتبط با صدور کارنامه نهایی
        console.log('Issuing final report card...');
        break;
      default:
        break;
    }
  };
 
  return (
    <div >
        <Button className='MenuBar' type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 ,width:256}}>
    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
  </Button>
  {showListStudents && <ListStudents />}
  {showCreateNewStudent && <CreateNewStudent />}
  {showCreateNewLesson && <CreateNewLesson />}
  {showListLessons && <ListLessons />}
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
