import React from "react"

const Paragraph = ({ children }: {children: string}) => (
    <p className="text-xs lg:text-sm xl:text-base font-normal leading-relaxed">
        {children}
    </p>
)

export default Paragraph