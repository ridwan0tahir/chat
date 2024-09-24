import { useStep } from "usehooks-ts";

import { MAX_STEP_SIZE } from "@/lib/constants";
import { Auth } from "./auth";
import { ChatLayout } from "./layouts";
import { Chat } from "./chat";
import { MessageForm } from "./message-form";

export const Steps = () => {
  const [currentStep, stepHelpers] = useStep(MAX_STEP_SIZE);

  return (
    <section className="justify-self-center w-full max-w-md">
      {
        {
          1: <Auth stepHelpers={stepHelpers} />,
          2: (
            <ChatLayout stepHelpers={stepHelpers} footer={<MessageForm />}>
              <Chat />
            </ChatLayout>
          ),
        }?.[currentStep]
      }
    </section>
  );
};
