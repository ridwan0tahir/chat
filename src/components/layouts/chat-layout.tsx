import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { ChevronLeft } from "lucide-react";

import { RootState } from "@/redux/store";
import { StepHelpers } from "@/types";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ChatLayoutProps {
  stepHelpers?: StepHelpers;
  children?: ReactNode;
  footer?: ReactNode;
}

export default function ChatLayout({
  stepHelpers,
  children,
  footer,
}: ChatLayoutProps) {
  const { currentUser } = useSelector((state: RootState) => state.users);
  if (!currentUser) {
    stepHelpers?.goToPrevStep();
    return;
  }

  const handleGoBack = () => {
    stepHelpers?.goToPrevStep();
  };

  return (
    <div className="relative h-full flex flex-col">
      <div className="min-h-10 container border-b bg-white border-neutral-300 sticky top-0 z-50">
        <div className="flex items-center gap-x-3 py-4">
          <Button onClick={handleGoBack}>
            <ChevronLeft className="size-5" />
          </Button>
          <Avatar>
            <AvatarImage src="" alt={currentUser} />
            <AvatarFallback>{currentUser.charAt(0)}</AvatarFallback>
          </Avatar>
          <p className="grow font-medium">{currentUser}</p>
        </div>
      </div>
      <div className="container grow relative pt-4 pb-24">{children}</div>
      <div className="absolute inset-x-0 bottom-0 container border-t border-neutral-300">
        {footer}
      </div>
    </div>
  );
}
