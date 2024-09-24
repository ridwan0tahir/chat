import { Dispatch, SetStateAction } from "react";

export type StepHelpers = {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;
  canGoToNextStep: boolean;
  canGoToPrevStep: boolean;
  setStep: Dispatch<SetStateAction<number>>;
};

export type UserType = {
  name: string | null;
};

export type MessageType = {
  userId: string | null;
  text: string | undefined;
  timestamp: string;
};
