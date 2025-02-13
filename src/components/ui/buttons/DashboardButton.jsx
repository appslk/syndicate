import { cn } from "../../../lib/utils";

const DashboardButton = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        "font-montserrat inline-flex items-center justify-center gap-[0.3em] rounded-[0.25em] bg-[#3FFF90] px-[2em] py-[0.5em] font-semibold text-black transition-all duration-200 enabled:cursor-pointer enabled:hover:shadow-[0_0_5px_#3FFF90] enabled:hover:brightness-110 enabled:focus:shadow-[0_0_5px_#3FFF90] enabled:focus:brightness-110 disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default DashboardButton;
