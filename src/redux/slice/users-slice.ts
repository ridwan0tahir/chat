import { UserType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  users: UserType[];
  currentUser: string | null;
};

const initialState: UserState = {
  users: [],
  currentUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUserToList: (state, action: PayloadAction<UserType>) => {
      state.users.push(action.payload);
    },
    deleteUserFromList: (state, action: PayloadAction<{ name: string }>) => {
      const newUsers = state.users.filter(
        (user) => user?.name !== action.payload.name
      );
      state.users = newUsers;
    },
    setCurrentUser: (state, action: PayloadAction<string | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { addUserToList, deleteUserFromList, setCurrentUser } =
  usersSlice.actions;
export default usersSlice.reducer;
