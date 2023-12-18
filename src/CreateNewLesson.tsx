import React, { useState } from 'react';
import { Form, Input, Modal } from 'antd';

interface Values {
  name: string;
  code: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="ایجاد درس جدید"
      okText="ذخیره"
      cancelText="انصراف"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' }}
      >
        <Form.Item
          name="نام درس"
          label="نام درس"
          rules={[{ required: true, message: 'لطفاً نام درس را وارد کنید' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name=" نام استاد"
         label="نام استاد "
         rules={[{ required: true, message: 'لطفاً نام استاد را وارد کنید' }]}>
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
        </Form.Item>
      </Form>
    </Modal>
  );
};

const CreateNewLesson: React.FC = () => {
  const [open, setOpen] = useState(true);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    alert("ذخیره شد")
    setOpen(false);
  };

  return (
    <div>
      
      <CollectionCreateForm
       
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
    
      />
    </div>
  );
};

export default CreateNewLesson;