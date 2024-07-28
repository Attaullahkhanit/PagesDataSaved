import React, { useState } from 'react';
import { Form, Checkbox, Radio } from 'antd';

const OperationComponent = ({onSave}) => {
  const [labelDesired, setLabelDesired] = useState(false);
  const [operateBusiness, setOperateBusiness] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleLabelDesiredChange = (value) => {
    setLabelDesired(value);
    onSave({ labelDesired: value, operateBusiness, selectedOption });
  };

  const handleOperateBusinessChange = (value) => {
    setOperateBusiness(value);
    onSave({ labelDesired, operateBusiness: value, selectedOption });
  };

  const handleSelectedOptionChange = (value) => {
    setSelectedOption(value);
    onSave({ labelDesired, operateBusiness, selectedOption: value });
  };
  return (
    <Form layout="vertical" style={{height: '220px'}}>
      <Form.Item label="Label Desired">
        <Checkbox checked={labelDesired} onChange={e => handleLabelDesiredChange(e.target.checked)}>Yes, I Desired</Checkbox>
      </Form.Item>
      <Form.Item label="Do you have Operate your business?">
        <Checkbox checked={operateBusiness} onChange={e => handleOperateBusinessChange(e.target.checked)}>Yes, I operate my business</Checkbox>
      </Form.Item>
      <Form.Item label="Please select one">
        <Radio.Group onChange={e => handleSelectedOptionChange(e.target.value)}>
          <Radio value={1}>Option 1</Radio>
          <Radio value={2}>Option 2</Radio>
          <Radio value={3}>Option 3</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};

export default OperationComponent;
