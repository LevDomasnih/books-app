import {authAPI} from "../API/api";


const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {

}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
}

export default bookReducer;

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export const isAuth = () => (dispatch) => {
    authAPI.isAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}