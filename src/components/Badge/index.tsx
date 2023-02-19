import React from "react"

const Badge = ({ children }: {children: string}) => (
    <small className="text-xs lg:text-sm font-thin lg:font-light px-3 bg-gray-600 text-gray-100 rounded-sm mr-2">
        {children}
    </small>
)

export default Badge