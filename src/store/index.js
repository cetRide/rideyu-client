import { combineReducers } from 'redux'

import postsReducer from './slices/posts'
// import postReducer from './post'
import commentsReducer from './slices/comments'

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    // post: postReducer,
})

export default rootReducer
