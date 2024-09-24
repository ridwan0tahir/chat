import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback } from "./ui/avatar";
import { useCallback } from "react";

export const Chat = () => {
  const { messages } = useSelector((state: RootState) => state.chats);
  const { currentUser } = useSelector((state: RootState) => state.users);

  const getIsUser = useCallback(
    (userId: string | null): boolean => {
      return userId === currentUser;
    },
    [currentUser]
  );

  return (
    <ul className="grid gap-y-4">
      {messages?.map((message, index) => (
        <li
          key={message?.userId + "" + index}
          className={cn("flex items-end gap-x-2", {
            "justify-self-end": getIsUser(message?.userId),
          })}
        >
          {!getIsUser(message?.userId) && (
            <Avatar className="size-8">
              <AvatarFallback>{message?.userId?.charAt(0)}</AvatarFallback>
            </Avatar>
          )}
          <Card
            className={cn("shadow-none border-none bg-neutral-200", {
              "bg-blue-500 text-white": getIsUser(message?.userId),
            })}
          >
            <CardContent
              className={cn("p-4", {
                "text-right": getIsUser(message?.userId),
              })}
            >
              {message.text}
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
};
