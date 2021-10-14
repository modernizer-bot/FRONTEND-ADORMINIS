import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './components/Others/NotFound';
import adminRegister from './components/RegisterLogin/adminRegister';
import residentRegister from './components/RegisterLogin/residentRegister';
import SelectRole from './components/RegisterLogin/SelectRole';
import Login from './components/RegisterLogin/Login';
import Utility from './components/Utility/Utility';
import UtilitySummary from './components/Utility/UtilitySummary';
// import DormSetting from './components/Dorm/DormSetting';
import DormitorySetting from './components/Dorm/DormitorySetting';
import BuildingList from './components/RoomStatus/BuildingList';
import Room from './components/RoomStatus/Room';
import Profile from './components/Profile/Profile';
import Billing from './components/Resident/Invoice';
import PaymentStatus from './components/Resident/PaymentStatus';
import UpdateResInfo from './components/RoomStatus/UpdateResInfo';
import AddResident from './components/RoomStatus/AddResident';
// import CheckAccount from './components/RegisterLogin/CheckAccount';
import CheckExistAccount from './components/RegisterLogin/CheckExistAccount';
import UtilitySetting from './components/Dorm/UtilitySetting';
import BuildingSetting from './components/Dorm/BuildingSetting';
import RoomType from './components/Dorm/RoomType';
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/role-selection" component={SelectRole} />
        <Route path="/admin/register" exact component={adminRegister} />
        <Route
          path="/resident/check-account"
          exact
          component={CheckExistAccount}
        />
        <Route path="/resident/register" exact component={residentRegister} />
        <Route path="/all-building/:dormid" component={BuildingList} />
        <Route path="/all-room/:buildingid" component={Room} />
        <Route path="/profile/:personalCode" component={Profile} />
        <Route path="/resinfo/edit" component={UpdateResInfo} />
        <Route
          path="/addresident/:buildingid/:roomid"
          component={AddResident}
        />
        <Route path="/utility" component={Utility} />
        <Route path="/utilsummary" component={UtilitySummary} />
        <Route path="/dormsetting" component={DormitorySetting} />
        <Route path="/utilitysetting" component={UtilitySetting} />
        <Route path="/buildingsetting" component={BuildingSetting} />
        <Route path="/roomtype" component={RoomType} />
        <Route path="/resident/invoice" component={Billing} />
        <Route path="/resident/payment/status" component={PaymentStatus} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
