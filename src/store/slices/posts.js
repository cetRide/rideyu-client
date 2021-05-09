import {createSlice} from '@reduxjs/toolkit'
import Api from "../../api";

export const initialState = {
    loading: false,
    hasErrors: false,
    posts: [],
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: state => {
            state.loading = true
        },
        getPostsSuccess: (state, {payload}) => {
            state.posts = payload
            state.loading = false
            state.hasErrors = false
        },
        getPostsFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
        likePost: (state, action) => {
            state.posts[action.payload].LikeStatus = '1'
        },
        disLikePost: (state, action) => {
            state.posts[action.payload].LikeStatus = '0'
        }
    },
})

export const {getPosts, getPostsSuccess, getPostsFailure, disLikePost, likePost} = postsSlice.actions
export default postsSlice.reducer

export function fetchPosts() {
    return async dispatch => {
        dispatch(getPosts())
        try {
            await Api.get('fetch-posts')
                .then((response) => dispatch(getPostsSuccess(response.data.posts)))
        } catch (error) {
            dispatch(getPostsFailure())
        }
    }
}


export function disLikePosts(index) {

    return async dispatch => {
        try {
            await dispatch(disLikePost(index))
        } catch (error) {
            console.log(error)
        }
    }
}

export function likePosts(index) {

    return async dispatch => {
        try {
            await dispatch(likePost(index))
        } catch (error) {
            console.log(error)
        }
    }

}
