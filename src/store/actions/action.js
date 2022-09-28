import GetAll_UserList from "./type";
import UserDetailsAPI from '../../service/service';
import { useDispatch } from "react-redux";

export const UserListDisplay = () => async () => {
    try {
        const result = await UserDetailsAPI.GetAll();

        return({
            type: GetAll_UserList,
            payload: result.data
        });
       
    }
    catch (err) {
        return err;
    }
}

export default UserListDisplay;