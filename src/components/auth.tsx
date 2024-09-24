import { FC, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { StepHelpers } from "@/types";
import { AppDispatch } from "@/redux/store";
import { addUserToList, setCurrentUser } from "@/redux/slice/users-slice";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AuthProps {
  stepHelpers?: StepHelpers;
}

export const Auth: FC<AuthProps> = ({ stepHelpers }) => {
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt?.preventDefault();

    const formData = new FormData(evt?.currentTarget);
    const name = formData.get("name") as string | null;
    dispatch(setCurrentUser(name));
    dispatch(addUserToList({ name }));
    stepHelpers?.goToNextStep();
  };

  return (
    <div className="h-full flex items-center pb-[20%]">
      <form onSubmit={onSubmit} className="w-full flex flex-col space-y-4">
        <Input
          id="name"
          name="name"
          required={true}
          minLength={3}
          placeholder="Enter your name"
        />
        <Button size="lg" variant="primary">
          Continue
        </Button>
      </form>
    </div>
  );
};
