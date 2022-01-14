import React, { createContext, useReducer } from "react";
import users from "../Data/user";

const initialState = { users }
const UserContext = createContext({})

const actions = {
    createUser(state, action){
        const user = action.payload
        user.id = Math.random()
        return {
            ...state,
            users: [...state.users, user],
        }
    },
    updateUser(state, action){
        const user = action.payload
        return{
            ...state,
            users: state.users.map(u => u.id === user.id ? user : u)
        }
    },
    User(state, action){
        const user = action.payload
        return {
            ...state,
            users: state.users.filter(u => u.id !== user.id)
        }  
    }
}

export const UsersProvider = props =>{

    function reducer(state, action){
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <UserContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext