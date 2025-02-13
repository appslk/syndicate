import { cn } from "../../../lib/utils";

const GradientButton = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "font-montserrat inline-flex items-center justify-center gap-[0.3em] rounded-[0.25em] bg-gradient-to-r from-[#FFBE25] to-[#F0811A] px-[2em] py-[0.5em] font-semibold text-black transition-all duration-200 enabled:cursor-pointer enabled:hover:shadow-[0_0_5px_#F0811A] enabled:hover:brightness-110 enabled:focus:shadow-[0_0_5px_#F0811A] enabled:focus:brightness-110 disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
