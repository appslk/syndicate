import { DropdownMenu } from "radix-ui";

import { cn } from "../../lib/utils";

const DropdownRoot = ({ children, className, ...props }) => {
  return (
    <DropdownMenu.Root className={cn("font-montserrat", className)} {...props}>
      {children}
    </DropdownMenu.Root>
  );
};

const DropdownTrigger = ({ children, className, ...props }) => {
  return (
    <DropdownMenu.Trigger
      className={cn("focus:outline-none", className)}
      {...props}
    >
      {children}
    </DropdownMenu.Trigger>
  );
};

const DropdownContent = ({ children, className, ...props }) => {
  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className={cn(
          "font-montserrat dashboard data-[side=top]:animate-dropdown-top data-[side=right]:animate-dropdown-right data-[side=left]:animate-dropdown-left data-[side=bottom]:animate-dropdown-bottom mt-[0.5em] w-fit min-w-[20ch] space-y-[1em] rounded-[0.3em] border border-white/30 bg-[#060606] p-[1em]",
          className,
        )}
        {...props}
      >
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
};

const DropdownLabel = ({ children, className, ...props }) => {
  return (
    <DropdownMenu.Label
      className={cn(
        "border-b-2 border-b-white/30 pb-[0.6em] text-center text-[1.2em] font-semibold text-white",
        className,
      )}
      {...props}
    >
      {children}
    </DropdownMenu.Label>
  );
};
const DropdownItem = ({ children, className, ...props }) => {
  return (
    <DropdownMenu.Item
      className={cn(
        "cursor-pointer rounded-[0.2em] bg-white/50 px-[2em] py-[0.5em] text-center font-semibold text-white transition-colors hover:text-black hover:outline-none focus:text-black",
        className,
      )}
      {...props}
    >
      {children}
    </DropdownMenu.Item>
  );
};

export {
  DropdownRoot,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownItem,
};
