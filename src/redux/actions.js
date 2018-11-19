import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENT} from "./action-types";

export const add = (comment) => ({type: ADD_COMMENT, data: comment})

export const deleteCom = (index) => ({type: DELETE_COMMENT, data: index})

const receiveCom = (comments) => ({type: RECEIVE_COMMENT, data: comments})

export const getCommentAsy = () => {
    return dispatch => {
        setTimeout(()=>{
            const comments = [
                {username: 'Tom', content: 'React looks very good!'},
                {username: 'Jack', content: 'React works good as well!'}
            ]
            dispatch(receiveCom(comments))
        },1000)
    }
}