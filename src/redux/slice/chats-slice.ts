import { MessageType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ChatState = {
  messages: MessageType[];
  limit: number;
  page: number;
};

const initialState: ChatState = {
  messages: JSON.parse(localStorage.getItem("chatMessages") || "[]"),
  limit: 25,
  page: 1,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action: PayloadAction<MessageType>) => {
      state.messages.push(action.payload);
      localStorage.setItem("chatMessages", JSON.stringify(state.messages));
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    loadMessages: (state) => {
      const messages = JSON.parse(
        localStorage.getItem("chatMessages") || "[]"
      ) as Array<MessageType>;
      state.messages = messages.slice(0, state.page * state.limit);
    },
  },
});

export const { sendMessage, loadMessages, setCurrentPage } = chatSlice.actions;
export default chatSlice.reducer;
