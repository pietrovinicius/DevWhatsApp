import firebase from '../FirebaseConnection';

//minha action 
export const checkLogin = () => {
    return (dispatch) => {
        let user = firebase.auth().currentUser;

        if (user) {
            //usuário está logado
            dispatch({
                type: 'changeStatus',
                payload: {
                    status: 1
                }
            });
        } else {
            //usuário não está logado
            dispatch({
                type: 'changeStatus',
                payload: {
                    status: 2
                }
            });
        }
    }
};

export const changeEmail = (email) => {
    return {
        type: 'changeEmail',
        payload: {
            email: email
        }
    };
};

export const changePassword = (password) => {
    return {
        type: 'changePassword',
        payload: {
            password: password
        }
    };
};

export const changeName = (name) => {
    return {
        type: 'changeName',
        payload: {
            name: name
        }
    };
};

export const SignUpAction = (name, email, password) => {
    //processo para cadastrar o usuário
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                //pegar usuário que foi criado
                let uid = firebase.auth().currentUser.uid;

                firebase.database().ref('users').child(uid).set({
                    name:name
                });
                //salvando no redurcer
                dispatch({
                    type:'changeUid',
                    payload:{
                        uid:uid
                    }
                });

            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        alert("E-mail já utilizado!");
                        break;
                    case 'auth/invalid-email':
                        alert("E-mail inválido");
                        break;
                    case 'auth/operation-not-allowed':
                        alert("Tente novamente mais tarde!");
                        break;
                    case 'auth/weak-password':
                        alert("Senha fraca, por favor digite novamente!");
                        break;
                }
            });
    };
};