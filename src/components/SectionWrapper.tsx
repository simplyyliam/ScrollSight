import { forwardRef, type HtmlHTMLAttributes } from "react";

export const SectionWrapper = forwardRef<HTMLDivElement, HtmlHTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col max-w-[55vw] h-full p-10 gap-10 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";
