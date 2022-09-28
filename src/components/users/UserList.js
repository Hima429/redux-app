import React, {useState, useEffect } from 'react'
import axios from 'axios';
import { Grid, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';


function UserList() {
    const [Posts, SetPosts] = useState([]);
    // useEffect(() => {
    //     axios.get(`https://dummyjson.com/users`)
    //         .then(response => {
    //             console.log(response);
    //             console.log("users data",response.data.users);
    //             SetPosts(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [])
  return (
    <div>
      <Grid>
<TableContainer>
  <Table>
    <TableHead>
      <TableRow>

      </TableRow>
    </TableHead>
    <TableBody>
      
    </TableBody>
  </Table>
</TableContainer>
      </Grid>
    </div>
  )
}

export default UserList