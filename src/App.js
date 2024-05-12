import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./page/NotFound";
import DispatcherSetting from "./page/HomePage/DispatcherSetting";
import OperationComponent from "./components/Common/DispatcherSetting/OperationComp.js/OperationComponent";
import PreferenceComponent from "./components/Common/DispatcherSetting/PreferenceComponent/PreferenceComponent";
import DriversComponent from "./components/Common/DispatcherSetting/Drivers/DriversComponent";
import BreaksComponent from "./components/Common/DispatcherSetting/Breaks/BreaksComponent";
// import Home from "./page/HomePage/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DispatcherSetting />} />
          <Route path="/operationcomponent" element={<OperationComponent />} />
          <Route path="/preferencecomponent" element={<PreferenceComponent/>} />
          <Route path="/driverscomponent" element={<DriversComponent/>} />
          <Route path="/breakscomponent" element={<BreaksComponent/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
