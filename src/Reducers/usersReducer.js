const initialState = {
    users:[]
}

const usersReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'ADD_ALL_USERS':
            let users = action.payload;
            return{users:users}

        case 'ADD_USER':
            console.log(action.payload)
            let newUsers =  [...state.users, action.payload]
            return { users: newUsers };
            
        case 'DELETE_USER':
            var id = action.payload
            let usersAfterDelete = state.users.filter((user)=>user.id !== id);
            return {users: usersAfterDelete};

        case 'UPDATE_USER':
            var id = action.payload.id;
            let updatedUserInfo = action.payload.updatedUserInfo
            let usersAfterUpdate = state.users.map((user)=>{
                if(user.id === id){
                    return updatedUserInfo
                }
                return user;
            });

            return {users: usersAfterUpdate}

    
        default:
            return state;
    }
};


export default usersReducer;