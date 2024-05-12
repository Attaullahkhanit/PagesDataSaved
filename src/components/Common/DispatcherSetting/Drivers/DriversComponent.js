import React, { useState } from 'react';
import { Form, Input } from 'antd';

const DriversComponent = ({ onSave }) => {
  const [driverName, setDriverName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleDriverNameChange = (value) => {
    setDriverName(value);
    onSave({ driverName: value, emailAddress });
  };

  const handleEmailAddressChange = (value) => {
    setEmailAddress(value);
    onSave({ driverName, emailAddress: value });
  };

  return (
    <Form layout="vertical">
      <Form.Item label="Driver Name">
        <Input placeholder="Enter driver name" onChange={(e) => handleDriverNameChange(e.target.value)} />
      </Form.Item>
      <Form.Item label="Email Address">
        <Input placeholder="Enter email address" onChange={(e) => handleEmailAddressChange(e.target.value)} />
      </Form.Item>
    </Form>
  );
};

export default DriversComponent;
