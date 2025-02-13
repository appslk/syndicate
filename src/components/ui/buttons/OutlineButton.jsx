import { cn } from "../../../lib/utils";

const OutlineButton = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "font-montserrat inline-flex cursor-pointer items-center justify-center gap-[0.3em] rounded-[0.25em] border-[0.1em] border-[#FFBE25]/80 bg-transparent px-[5em] py-[0.5em] font-semibold text-white transition-all duration-200 enabled:hover:shadow-[0_0_5px_#F0811A] enabled:hover:brightness-110 enabled:focus:shadow-[0_0_5px_#F0811A] enabled:focus:brightness-110 disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
