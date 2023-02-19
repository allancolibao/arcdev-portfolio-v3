import React from "react"

const SectionTitle = ({ children }: {children: string}) => (
    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-600 pb-6 md:pb-8 lg:pb-10">
        {children}
    </h3>
)

export default SectionTitle