import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slice/users-slice";
import chatsReducer from "./slice/chats-slice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    chats: chatsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
