import GellAll_UsersList from '../actions/type';


const initialState = [];

function userreducer(users= initialState, action){
    const {type, payload} = action;
    switch(type){
        case GellAll_UsersList: return [users, payload];
    
    default:
        return users;
    }
};
export default userreducer;