import React from 'react';

import ReactDOM from 'react-dom';

var DispalayDomElemnts=(employee)=>
{
  return <div>
 
    <h1>Employee Details...</h1>
    <p>
      <label>Employee ID :<b>{employee.Id}</b></label>
      </p>
      <p>
      <label>Employee Name :<b>{employee.Name}</b></label>
      </p>
      <p>
      <label>Employee Location :<b>{employee.Location}</b></label>
      </p>
      <p>
      <label>Employee Salary :<b>{employee.Salary}</b></label>
      </p>
      <Deparment DeptName={employee.DeptName} HeadName={employee.HeadName}></Deparment>
  </div>
}

const  Deparment=(Department)=>
{
  return <div>
    <p>
      <label>Department Name :<b>{Department.DeptName}</b></label>
      </p>
      <p>
      <label>Head Name :<b>{Department.HeadName}</b></label>
      </p>
      
  </div>
}

class Employee extends React.Component{
  render(){
    return <div>
 
    <h1>Employee Details...</h1>
    <p>
      <label>Employee ID :<b>{this.props.Id}</b></label>
      </p>
      <p>
      <label>Employee Name :<b>{this.props.Name}</b></label>
      </p>
      <p>
      <label>Employee Location :<b>{this.props.Location}</b></label>
      </p>
      <p>
      <label>Employee Salary :<b>{this.props.Salary}</b></label>
      </p>
      <Deparment DeptName={this.props.DeptName} HeadName={this.props.HeadName}></Deparment>
  </div>
  }
}

const element=<Employee Id="1" Name="Harsha" Location="Hyderabad" Salary="200000" DeptName="Delivery" HeadName="WinWire"></Employee>

ReactDOM.render(element,document.getElementById("root"));
