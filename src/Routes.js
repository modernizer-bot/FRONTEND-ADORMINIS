import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './components/Others/NotFound';
import adminRegister from './components/RegisterLogin/adminRegister';
import residentRegister from './components/RegisterLogin/residentRegister';
import SelectRole from './components/RegisterLogin/SelectRole';
import Login from './components/RegisterLogin/Login';
import Utility from './components/Utility/Utility';
import UtilitySummary from './components/Utility/UtilitySummary';
import DormitoryRegister from './components/Dorm/DormitoryRegister';
import BuildingList from './components/RoomStatus/BuildingList';
import Room from './components/RoomStatus/Room';
import Profile from './components/Profile/Profile';
import Billing from './components/Resident/InvoiceDetail';
import Invoices from './components/Resident/Invoices';
import UpdateResInfo from './components/RoomStatus/UpdateResInfo';
import AddResident from './components/RoomStatus/AddResident';
import CheckExistAccount from './components/RegisterLogin/CheckExistAccount';
import AdminHome from './components/Home/AdminHome';
import ResidentHome from './components/Home/ResidentHome';
import DynamicForm from './components/Setting/DynamicForm';
import Setting from './components/Dorm/Setting';
import Complain from './components/Resident/Complain';
const Routes = (props) => {
  return (
    <>
      <Switch>
        {/* Public routes */}

        <Route path="/login">
          <Login setRoleId={props.setRoleId} />
        </Route>
        <Route path="/role-selection" component={SelectRole} />
        <Route path="/admin/register" exact component={adminRegister} />
        <Route
          path="/resident/check-account"
          exact
          component={CheckExistAccount}
        />
        <Route path="/form" exact component={DynamicForm} />
        <Route
          path="/resident/register/:userid"
          exact
          component={residentRegister}
        />
        {/* Admin routes */}
        <Route path="/admin/home">
          <AdminHome roleId={props.roleId} />
        </Route>
        <Route path="/all-building">
          <BuildingList dormId={props.dormId} />
        </Route>
        {/* <Route path="/all-building/:dormid" component={BuildingList} /> */}
        <Route path="/all-room/:buildingid" component={Room} />
        <Route path="/profile/:personalCode" component={Profile} />
        <Route path="/resinfo/edit" component={UpdateResInfo} />
        <Route
          path="/addresident/:buildingid/:roomid"
          component={AddResident}
        />
        <Route path="/utility" component={Utility} />
        <Route path="/utilsummary" component={UtilitySummary} />
        <Route path="/dorm-registration" component={DormitoryRegister} />
        <Route path="/dorm-setting" component={Setting} />

        {/* Resident routes */}
        <Route path="/resident/home">
          <ResidentHome roleId={props.roleId} />
        </Route>
        <Route path="/resident/invoice-detail">
          <Billing roleId={props.roleId} />
        </Route>
        <Route path="/resident/invoices">
          <Invoices roleId={props.roleId} />
        </Route>
        <Route path="/resident/complain-request">
          <Complain roleId={props.roleId} />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
