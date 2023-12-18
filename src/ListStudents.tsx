import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: React.Key;
  name: string;
  code: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'نام و نام خانوادگی',
        dataIndex: 'name',
      },
      {
        title: 'کد دانشجویی',
        dataIndex: 'code',
      }
];

const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      code: 32,
      
    },
    {
      key: '2',
      name: 'Jim Green',
      code: 42,
      
    },
    {
      key: '3',
      name: 'Joe Black',
      code: 32,
      
    },
    {
      key: '4',
      name: 'Disabled User',
      code: 99,
      
    },
    {
      key: '5',
      name: 'hgj',
      code: 55555555555555555,
      
    }, {
      key: '6',
      name: 'hgj',
      code: 55555555555555555,
      
    }, {
      key: '7',
      name: 'hgj',
      code: 55555555555555555,
      
    }, {
      key: '8',
      name: 'hgj',
      code: 55555555555555555,
      
    }, {
      key: '9',
      name: 'hgj',
      code: 55555555555555555,
      
    }, {
      key: '10',
      name: 'hgj',
      code: 55555555555555555,
      
    }, {
      key: '11',
      name: 'hgj',
      code: 55555555555555555,
      
    }, {
      key: '12',
      name: 'hgj',
      code: 55555555555555555,
      
    }, {
      key: '13',
      name: 'hgj',
      code: 55555555555555555,
      
    }, {
      key: '14',
      name: 'hgj',
      code: 55555555555555555,
      
    },
  ];

const ListStudents: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);
  

  const start = () => {
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
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table 
       rowSelection={rowSelection} 
       columns={columns} 
       dataSource={data} 
       scroll={{ y: 400 }}/>
    </div>
  );
};

export default ListStudents;
