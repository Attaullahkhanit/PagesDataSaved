import React, { useState } from 'react';
import { Form, Checkbox } from 'antd';

const PreferenceComponent = ({ onSave }) => {
const [wantPreference, setWantPreference] = useState(false);
const [topPreference, setTopPreference] = useState(false);

const handleWantPreferenceChange = (checked) => {
  setWantPreference(checked);
  onSave({ wantPreference: checked, topPreference });
};

const handleTopPreferenceChange = (checked) => {
  setTopPreference(checked);
  onSave({ wantPreference, topPreference: checked });
};

  return (
    <Form layout="vertical">
      <Form.Item label="Do you want preference of business?">
        <Checkbox checked={wantPreference} onChange={(e) => handleWantPreferenceChange(e.target.checked)}>Yes, I want preference of business</Checkbox>
      </Form.Item>
      <Form.Item label="Top preference of business">
        <Checkbox checked={topPreference} onChange={(e) => handleTopPreferenceChange(e.target.checked)}>Yes, this is my top preference</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PreferenceComponent;
