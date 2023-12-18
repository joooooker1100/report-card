import React, { useState } from 'react';
import { BookOutlined,PrinterOutlined,SaveOutlined, ManOutlined, SettingOutlined ,MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import ListStudents from './ListStudents';
import CreateNewStudent from './CreateNewStudent';
import CreateNewLesson from './CreateNewLesson';
import ListLessons from './ListLessons';

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
    getItem('ایجاد دانشجوی جدید', '1'),
    getItem('لیست دانشجویان', '2'),
  ]),

  getItem('دروس', 'sub2', <BookOutlined />, [
    getItem('ایجاد درس جدید', '3'),
    getItem('لیست دروس', '4'),
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
    if (e.key === '1') {
      setCreateNewStudent(true);
    }
    else setCreateNewStudent(false)
    if (e.key === '2') {
      setShowListStudents(true);
    }
    else setShowListStudents(false)
    if (e.key === '3') {
      setShowCreateNewLesson(true)
    }
    else setShowCreateNewLesson(false)
    if (e.key === '4') {
      setShowListLessons(true)
    }
    else setShowListLessons(false)
    if (e.key === '5') {
      // اجرای کد مرتبط با ایجاد درس جدید
      // مثلاً یک تابع یا رویداد دیگر را اجرا کنید
      console.log('Creating a new course...');
    }
    if (e.key === '6') {
      // اجرای کد مرتبط با ایجاد درس جدید
      // مثلاً یک تابع یا رویداد دیگر را اجرا کنید
      console.log('Creating a new course...');
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
