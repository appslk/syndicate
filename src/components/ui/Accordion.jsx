import { Accordion } from "radix-ui";
import { IoIosArrowDown } from "react-icons/io";

import { cn } from "../../lib/utils";

const AccordionRoot = ({ children, className, ...props }) => {
  return (
    <Accordion.Root className={cn("", className)} {...props}>
      {children}
    </Accordion.Root>
  );
};

const AccordionItem = ({ children, className, ...props }) => {
  return (
    <Accordion.Item className={cn("mb-[0.5em]", className)} {...props}>
      {children}
    </Accordion.Item>
  );
};

const AccordionHeader = ({ children, className, ...props }) => {
  return (
    <Accordion.Header className={cn("", className)} {...props}>
      {children}
    </Accordion.Header>
  );
};

const AccordionTrigger = ({ children, className, ...props }) => {
  return (
    <Accordion.Trigger
      className={cn(
        "font-ddt group inline-flex w-full cursor-pointer items-center justify-between gap-[0.5em] overflow-hidden rounded-t-[0.3em] bg-black px-[1.5em] py-[1em] text-left text-[1.2em] transition-all duration-300 *:w-fit hover:bg-[#131313] focus:bg-[#131313]",
        className,
      )}
      {...props}
    >
      {children}
      <IoIosArrowDown className="shrink-0 transition-transform ease-in group-data-[state=open]:rotate-180" />
    </Accordion.Trigger>
  );
};

const AccordionContent = ({ children, className, ...props }) => {
  return (
    <Accordion.Content
      className={cn(
        "font-ddt data-[state=closed]:animate-accordion-close data-[state=open]:animate-accordion-open overflow-hidden rounded-b-[0.3em] bg-white/10 text-[0.9em] text-white/80 italic backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      <div className="px-[1.5em] py-[1em]">{children}</div>
    </Accordion.Content>
  );
};

export {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
};
