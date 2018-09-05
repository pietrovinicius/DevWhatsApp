const initialState={
    chats:[],
    contacts:[]
};

const ChatReducer = (state = initialState, action) => {

    /*
    if(action.type == 'changeStatus'){
        return {...state, status:action.payload.status};
    }
    */

    if(action.type == 'setContactList'){
        return {...state, contacts:action.payload.users}
    }

    return state;
};

export default ChatReducer;