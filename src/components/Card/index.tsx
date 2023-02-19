import React from "react"

const Card = ({ children }: {children: React.ReactNode}) => (
    <div className="relative overflow-hidden p-3 md:p-4 lg:p-5 shadow-lg md:shadow-md bg-gray-100">
        {children}
    </div>
)

export default Card