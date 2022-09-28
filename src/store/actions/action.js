import GetAll_UserList from "./type";
import UserDetailsAPI from '../../service/service';
import { useDispatch } from "react-redux";

export const UserListDisplay = () => async () => {
    try {
        const result = await UserDetailsAPI.GetAll();

        useDispatch({
            type: GetAll_UserList,
            payload: result.data
        });
        return Promise.resolve(result.data)
    }
    catch (err) {
        return Promise.reject(err);
    }
}

export default UserListDisplay;