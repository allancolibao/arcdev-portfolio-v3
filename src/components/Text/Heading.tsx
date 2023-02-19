import React from "react"

const Heading = ({ children }: {children: string}) => (
    <h4 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold">
        {children}
    </h4>
)

export default Heading