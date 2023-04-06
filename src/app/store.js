import { configureStore } from "@reduxjs/toolkit";
// import { githubApi } from "../features/githubUser/api/apiSlice";
import findUserSliceReducer from "../features/githubUser/findUsers/findUserSlice";
import gitRepoSliceReducer from "../features/githubUser/gitRepo/gitRepoSlice";
import userFollowingSliceReducer from "../features/githubUser/userFollowing/userFollowingSlice";
import { githubApi } from "./../features/githubUser/api/apiSlice";
import userFollowersSliceReducer from "./../features/githubUser/userFollowers/userFollowersSlice";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    findUser: findUserSliceReducer,
    gitRepo: gitRepoSliceReducer,
    userFollower: userFollowersSliceReducer,
    userFollowing: userFollowingSliceReducer,
  },
});
