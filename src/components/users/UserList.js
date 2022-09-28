import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Grid, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';

import UserListDisplay from '../../store/actions/action';
function UserList() {
  // const [UserList, SetUserList] = useState([]);
  // useEffect(() => {
  //     axios.get(`https://dummyjson.com/users`)
  //         .then(response => {
  //             console.log(response);
  //             console.log("users data",response.data.users);
  //             SetUserList(response.data);
  //         })
  //         .catch(error => {
  //             console.log(error);
  //         })
  // }, [])
  return (
    <div>
      <p>hellow</p>
      <Grid>
      {UserListDisplay.map((item, index) => {
        <Table>
            <TableHead>
              <TableRow>{item.id}</TableRow>
            </TableHead>
          <TableBody>{item.id}</TableBody>
        
        </Table>
      })}
        {/* <TableContainer>
          <Table>
            <TableHead>
              <TableRow>

              </TableRow>
            </TableHead>
            <TableBody>

            </TableBody>
          </Table>
        </TableContainer> */}
      </Grid>
    </div>
  )
}

export default UserList