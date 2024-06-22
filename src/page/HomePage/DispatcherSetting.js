import React, { useState } from 'react';
import { Tabs, Button, Divider, message } from 'antd';
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
    const updateOperationsPromise = dispatch(updateOperation(operationData));
    const updatePreferencePromise = dispatch(updatePreference(preferenceData));
    const updateDriversPromise = dispatch(updateDrivers(driversData));
    const updateBreaksPromise = dispatch(updateBreaks(breaksData));

    Promise.all([
        updateOperationsPromise,
        updatePreferencePromise,
        updateDriversPromise,
        updateBreaksPromise,
    ]).then(() => {
        message.success('Data successfully saved');
    }).catch((error) => {
        message.error('Failed to save data');
        console.error('Error saving data:', error);
    });
};

  function callback(key) {
    console.log(key);
  }

  return (
    <div style={{ padding: '0 0px', borderRadius: '5px', border: '1px solid #ccc', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', width: '70%' }}>
      <Tabs defaultActiveKey="1" onChange={callback} style={{marginLeft: '20px', marginRight: '20px'}}>
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
      <Divider />
      <div style={{ textAlign: 'right', margin: '20px' }}>
        <Button type="primary" style={{ marginRight: '10px' }} onClick={handleSave}>Save</Button>
        <Button>Close</Button>
      </div>
    </div>
  );
};

export default DispatcherSetting;
