import React, { useState } from 'react';
import { Form, Input, Checkbox } from 'antd';

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
    <Form layout="vertical">
      <Form.Item label="How many weight in kg">
      <Input
          value={weight}
          placeholder="Enter weight"
          addonAfter="kg"
          onChange={(e) => handleWeightChange(e.target.value)}
        />
      </Form.Item>
      <Form.Item label="Do you have breaks?">
        <Checkbox checked={hasBreaks} onChange={(e) => handleHasBreaksChange(e.target.checked)}>Yes, I have breaks</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default BreaksComponent;
