import {createSlice} from '@reduxjs/toolkit'
import Api from "../../api";

export const initialState = {
    loading: false,
    hasErrors: false,
    comments: [],
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        getComments: state => {
            state.loading = true
        },
        getCommentsSuccess: (state, {payload}) => {
            state.comments = payload
            state.loading = false
            state.hasErrors = false
        },
        getCommentsFailure: state => {
            state.loading = false
            state.hasErrors = true
        }
    },
})

export const {getComments, getCommentsSuccess, getCommentsFailure, getSelectedComment} = commentsSlice.actions
export default commentsSlice.reducer

export function fetchComments(id) {
    return async dispatch => {
        dispatch(getComments())
        try {
            await Api.get(`fetch-post-comments/${id}`)
                .then((response) => {
                    if (response.data.comments !== null) {
                        dispatch(getCommentsSuccess(response.data.comments))
                    } else {
                        dispatch(getCommentsSuccess([]))
                    }
                })
        } catch (error) {
            dispatch(getCommentsFailure())
        }
    }
}
