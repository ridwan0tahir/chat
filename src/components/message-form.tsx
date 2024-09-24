import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { Textarea } from "./ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { sendMessage } from "@/redux/slice/chats-slice";

export const MessageForm = () => {
  const { currentUser } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const [inputValue, setInputValue] = useState<string | undefined>("");

  const onSubmit = (evt?: FormEvent<HTMLFormElement>) => {
    evt?.preventDefault();

    dispatch(
      sendMessage({
        userId: currentUser,
        text: inputValue,
        timestamp: new Date().toDateString(),
      })
    );
  };

  const onInputChange = (evt?: ChangeEvent<HTMLTextAreaElement>) => {
    const value = evt?.target?.value;
    setInputValue(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="min-h-20 flex items-center gap-x-4">
        <Textarea
          value={inputValue}
          onChange={onInputChange}
          autoComplete="off"
          className="flex-1 resize-none h-6 min"
        />
        <Button
          size="icon"
          variant="primary"
          className="size-10"
          disabled={!inputValue?.trim()}
        >
          <Send className="size-5" />
        </Button>
      </div>
    </form>
  );
};
