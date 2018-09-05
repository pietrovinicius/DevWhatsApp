import firebase from '../FirebaseConnection';

export const getContactList = () => {
    return (dispatch) => {

        firebase.database().ref('users').once('value').then((snapshot)=>{

            let users = [];
            snapshot.forEach((childItem)=>{
                users.push({
                    key: childItem.key,
                    name: childItem.val().name
                });
            });
            
            dispatch({
                type:'setContactList',
                payload:{
                    users:users
                }
            });

        });
    };
};

/*
export const changeName = (name) => {
    return {
        type: 'changeName',
        payload: {
            name: name
        }
    };
};
*/

/*
export const SignInAction = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                //pegar usuário que foi criado
                let uid = firebase.auth().currentUser.uid;

                //salvando no redurcer
                dispatch({
                    type: 'changeUid',
                    payload: {
                        uid: uid
                    }
                });

            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert("E-mail já utilizado!");
                        break;
                    case 'auth/user-disabled':
                        alert("Usuário desativado!");
                        break;
                    case 'auth/user-not-found':
                        alert("Usuário não existe!");
                        break;
                    case 'auth/wrong-password':
                        alert("E-mail e/ou senha inválidos!");
                        break;
                }
            });
    };
};
*/