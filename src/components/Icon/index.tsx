import React from "react"
import Home from "@images/svgs/home.svg"
import About from "@images/svgs/about.svg"
import Contact from "@images/svgs/contact.svg"
import Projects from "@images/svgs/project.svg"
import Blogs from "@images/svgs/form.svg"

const Icon = ({ name, area = "header" }: {name: string, area?: string}) => {
    switch (name) {
        case "Home":
        return <Home className={area === "header" ? style.header : style.bottomNav } />
        case "Projects":
        return <Projects className={area === "header" ? style.header : style.bottomNav } />
        case "Contact":
        return <Contact className={area === "header" ? style.header : style.bottomNav } />
        case "Blog":
        return <Blogs className={area === "header" ? style.header : style.bottomNav } />
        case "About":
        return <About className={area === "header" ? style.header : style.bottomNav } />
        default:
        return <Home className={area === "header" ? style.header : style.bottomNav } />
    }
}

const style = {
    bottomNav: "h-auto w-8 md:w-10 mx-auto",
    header: "h-auto w-6 md:w-8 mx-auto"
}

export default Icon
