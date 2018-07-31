import firebase from '../FirebaseConnection';

//minha action 
export const checkLogin = () => {
    return(dispatch) => {
        let user = firebase.auth().currentUser;

        if(user){
            //usuário está logado
            dispatch({
                type:'changeStatus',
                payload:{
                    status:1
                }
            });
        }else{
            //usuário não está logado
            dispatch({
                type:'changeStatus',
                payload:{
                    status:2
                }
            });
        }
    }
};

export const changeEmail = (email) => {
    return{
        type:'changeEmail',
        payload:{
            email:email
        }
    };
};

export const changePassword = (password) => {
    return{
        type:'changePassword',
        payload:{
            password:password
        }
    };
};

export const changeName = (name) => {
    return{
        type:'changeName',
        payload:{
            name:name
        }
    };
};