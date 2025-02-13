import { cn } from "../../../lib/utils";

const InputGroup = ({ column = false, id, label, className, ...props }) => {
  return (
    <div
      className={`grid ${column ? "grid-cols-1 gap-[0.5em]" : "grid-cols-10 gap-[1em]"} items-end`}
    >
      <label
        htmlFor={id}
        className={`${column ? "col-span-1" : "col-span-3"} w-fit font-medium`}
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          "border-b border-b-white/30 px-[1em] py-[0.3em] transition-colors focus:border-b-white/50 focus:outline-none",
          column ? "col-span-1" : "col-span-7",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default InputGroup;
