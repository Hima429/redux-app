import http from "./http";

import React, { Component } from 'react'

class UserDetailsAPI{
    GetAll(){
        return http.GetAll("/users");
    }
    GetById(Id){
        return http.get('/users/${Id}')
    }
}
