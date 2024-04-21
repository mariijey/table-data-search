import React, { useState } from "react";
import { Table } from "reactstrap";
import {users as data } from '../constant/MokData'

const TableInfo = ({users}) => {
  
    
  return (
    <Table bordered striped hover responsive size="">
      <thead>
        <tr className="table-primary">
          <th>#</th>
          <th>First Name</th>
          <th>Nickname</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Country</th>
          <th>City</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
{        users.map(user =>
               <tr key={user.id} className="table-secondary">
               <th scope="row">{user.id}</th>
               <td>{user.name}</td>
               <td>{user.nickName}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
               <td>{user.country}</td>
               <td>{user.city}</td>
               <td>{user.address}</td>
             </tr>

        )
}
     
       
      </tbody>
    </Table>
  );
};

export default TableInfo;
