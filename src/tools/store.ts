import { configureStore } from '@reduxjs/toolkit'
import StoreSlice from './storeSlice'
// ...

const store = configureStore({
  reducer: {
    store: StoreSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;