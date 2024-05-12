import React, { useState } from 'react';
import { Tabs, Button } from 'antd';
import OperationComponent from '../../components/Common/DispatcherSetting/OperationComp.js/OperationComponent';
import PreferenceComponent from '../../components/Common/DispatcherSetting/PreferenceComponent/PreferenceComponent';
import DriversComponent from '../../components/Common/DispatcherSetting/Drivers/DriversComponent';
import BreaksComponent from '../../components/Common/DispatcherSetting/Breaks/BreaksComponent';
import { useDispatch, useSelector } from 'react-redux';
import { updateBreaks, updateDrivers, updateOperation, updatePreference } from '../../redux/slice/dispatcherSettingsSlice';

const { TabPane } = Tabs;

const DispatcherSetting = () => {
  const dispatch = useDispatch();
  const getData = useSelector(state => state);
  console.log(getData, 'getAllData')
  const [operationData, setOperationData] = useState({});
  const [preferenceData, setPreferenceData] = useState({});
  const [driversData, setDriversData] = useState({});
  const [breaksData, setBreaksData] = useState({});

  const handleSave = () => {
    dispatch(updateOperation(operationData))
    dispatch(updatePreference(preferenceData))
    dispatch(updateDrivers(driversData))
    dispatch(updateBreaks(breaksData))
  }

  function callback(key) {
    console.log(key);
  }

  return (
    <div style={{ padding: '0 20px' }}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Operation" key="1" style={{ padding: '20px' }}>
          <OperationComponent onSave={setOperationData}/>
        </TabPane>
        <TabPane tab="Preference" key="2" style={{ padding: '20px' }}>
          <PreferenceComponent onSave={setPreferenceData}/>
        </TabPane>
        <TabPane tab="Driver" key="3" style={{ padding: '20px' }}>
          <DriversComponent onSave={setDriversData}/>
        </TabPane>
        <TabPane tab="Breaks" key="4" style={{ padding: '20px' }}>
          <BreaksComponent onSave={setBreaksData}/>
        </TabPane>
      </Tabs>
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <Button type="primary" style={{ marginRight: '10px' }} onClick={handleSave}>Save</Button>
        <Button>Close</Button>
      </div>
    </div>
  );
};

export default DispatcherSetting;
