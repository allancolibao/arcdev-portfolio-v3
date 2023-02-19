import React from "react"

const SubHeading = ({ children }: {children: string}) => (
    <h5 className="text-xs md:text-sm lg:text-base font-medium">
        {children}
    </h5>
)

export default SubHeading