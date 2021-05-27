import userTypes from './user.types';
import { auth } from './../../firebase/utils';

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});

export const signInUser = ({ email, password }) => async disptach => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        disptach({ type: userTypes.SIGN_IN_SUCCESS,
                    payload: true 
        });

    } catch(err) {
        // console.log(err);
    }
};