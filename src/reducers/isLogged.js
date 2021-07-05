const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGNED_IN':
            return true;
        default:
            return state;
    }
};
export default loggedReducer; 