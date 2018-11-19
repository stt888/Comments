
import  {combineReducers} from 'redux'
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENT} from "./action-types";

// const initComments = [
//     {username: 'Tom', content: 'React looks very good!'},
//     {username: 'Jack', content: 'React works good as well!'}
// ]

const initComments = []

export default function commentsAct(state = initComments, action){
    switch (action.type){
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            return state.filter((comment,index)=>index!==action.data)
        case RECEIVE_COMMENT:
            return action.data
        default:
            return state
    }
}



