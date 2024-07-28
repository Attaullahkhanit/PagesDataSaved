import React, { useState } from 'react';
import { Form, Select, Checkbox } from 'antd';

const { Option } = Select;

const BreaksComponent = ({ onSave }) => {
  const [weight, setWeight] = useState('');
  const [hasBreaks, setHasBreaks] = useState(false);

  const handleWeightChange = (value) => {
    setWeight(value);
    onSave({ weight: value, hasBreaks });
  };

  const handleHasBreaksChange = (checked) => {
    setHasBreaks(checked);
    onSave({ weight, hasBreaks: checked });
  };

  return (
    <Form layout="vertical" style={{height: '220px'}}>
      <Form.Item label="How many weight in kg">
        <Select
          value={weight}
          placeholder="Select weight"
          onChange={handleWeightChange}
        >
          {[...Array(10).keys()].map(num => (
            <Option key={num + 1} value={String(num + 1)}>
              {num + 1} kg
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Do you have breaks?">
        <Checkbox checked={hasBreaks} onChange={(e) => handleHasBreaksChange(e.target.checked)}>
          Yes, I have breaks
        </Checkbox>
      </Form.Item>
    </Form>
  );
};

export default BreaksComponent;
