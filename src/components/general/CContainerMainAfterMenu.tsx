import { ReactNode } from "react";

export function CContainerMainAfterMenu({ children }: { children: ReactNode }) {
  return <div className="max-w-screen-xl mx-auto px-3">{children}</div>;
}
