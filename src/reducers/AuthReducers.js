const initialState={
    name:'Nome',
    email:'e-mail@gmail.com.br',
    password:'',
    uid:'',
    status:0
};

const AuthReducer = (state = initialState, action) => {

    if(action.type == 'changeStatus'){
        //alert("Retorno: " + action.payload.status);
        //o status inicial é 0
        return {...state, status:action.payload.status};
    }

    if(action.type == 'changeName'){
        return{...state, name:action.payload.name};
    }

    if(action.type == 'changeEmail'){
        return{...state, email:action.payload.email};
    }

    if(action.type == 'changePassword'){
        return{...state, password:action.payload.password};
    }

    if(action.type == 'changeUid'){
        return{...state, uid:action.payload.uid};
    }
    
    return state;
};

export default AuthReducer;