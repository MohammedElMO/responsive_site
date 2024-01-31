import { ReactNode, ComponentProps } from "react";

function Button({
  children,
  ...props
}: { children: ReactNode } & ComponentProps<"button">) {
  return <button {...props}>{children}</button>;
}

export default Button;
