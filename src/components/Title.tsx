import type { HtmlHTMLAttributes } from "react";
import type React from "react";



export const Title: React.FC<HtmlHTMLAttributes<HTMLHeadingElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h1 className={`text-5xl font-semibold ${className}`}{...props}>{children}</h1>
    )
}

export const Subtitle: React.FC<HtmlHTMLAttributes<HTMLHeadingElement>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <h1 className={`opacity-50 ${className}`}{...props}>{children}</h1>
    )
}
