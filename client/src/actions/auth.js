import * as api from '../api';
import { setCurrentUser } from './currentUser';
export const Signup = (authData, navigate) => async (dispatch) => {
    try {
        const {data} = await api.SIGNUP(authData)
        dispatch({ type: "AUTH", data })
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
        navigate('/')        
    } catch (error) {
        console.log(error)
    }
}
export const Login = (authData, navigate) => async (dispatch) => {
    try {
        const { data }=await api.LOGIN(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
        navigate('/')
    } catch (error) {
        console.log(error)
    }

}