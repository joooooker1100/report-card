import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  ostad: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'نام درس',
        dataIndex: 'name',
      },
      {
        title: 'نام استاد ',
        dataIndex: 'ostad',
      }
];

const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      ostad:"kargar"
      
    },
    {
      key: '2',
      name: 'Jim Green',
      ostad:"kargar"
      
    },
    {
      key: '3',
      name: 'Joe Black',
      ostad:"kargar"
      
    },
    {
      key: '4',
      name: 'Disabled User',
      ostad:"kargar"
      
    },
    {
      key: '5',
      name: 'hgj',
      ostad:"kargar"
    }
  ];
const ListLessons: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  const [dataSource , setDataSource] = useState(data);
  const Delete = () => {
    const updatedDataSource = dataSource.filter(item => !selectedRowKeys.includes(item.key));
    setDataSource(updatedDataSource);
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div className='TableListStusents'>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={Delete} disabled={!hasSelected} loading={loading}>
          حذف
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table 
       rowSelection={rowSelection} 
       columns={columns} 
       dataSource={dataSource} 
       scroll={{ y: 400 }}/>
    </div>
  );
};

export default ListLessons;
