import React from "react"

const Grid = ({ children }: {children: React.ReactNode}) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {children}
    </div>
)

export default Grid