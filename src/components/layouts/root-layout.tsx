import { ReactNode } from "react";

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-svh max-w-[100vw] grid grid-cols-1">{children}</div>
  );
}
