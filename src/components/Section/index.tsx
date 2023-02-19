import React from "react"

const Section = ({ id, children }: {id?: string, children: React.ReactNode}) => (
    <section id={id} className="mb-8 md:mb-10 lg:mb-20 pt-16 md:pt-20">
        {children}
    </section>
)

export default Section