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