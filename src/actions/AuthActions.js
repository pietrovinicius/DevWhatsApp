import firebase from '../FirebaseConnection';

//minha action 
export const checkLogin = () => {

    return (dispatch) => {

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                //usuário está logado
                dispatch({
                    type: 'changeUid',
                    payload: {
                        uid: user.uid
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
        });
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
                    name: name
                });
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