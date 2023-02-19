import React from "react"
import Twitter from "@images/svgs/twitter.svg"
import NPM from "@images/svgs/npm.svg"
import Github from "@images/svgs/github.svg"
import LinkedIn from "@images/svgs/linked-in.svg"

const SocialLink = () => (
    <div
        className="relative lg:fixed lg:left-0 lg:bottom-0 lg:mb-6 lg:ml-2 lg:z-20 mx-auto"
    >
        <a 
            href="https://github.com/allancolibao" 
            target="_blank"
        >
            <Github className={socialIcon.style} />
        </a>
        <a 
            href="https://www.npmjs.com/~allancolibao" 
            target="_blank"
        >
            <NPM className={socialIcon.style} />
        </a>
        <a
            href="https://www.linkedin.com/in/allan-colibao-635902151"
            target="_blank"
        >
            <LinkedIn className={socialIcon.style} />
        </a>
        <a 
            href="https://twitter.com/allancolibao" 
            target="_blank"
        >
            <Twitter className={socialIcon.style} />
        </a>
    </div>
)

const socialIcon = {
    style: "inline-block lg:block w-10 md:w-12 px-1 md:px-2 my-3 h-auto text-gray-600 transition duration-500 ease-in-out transform hover:scale-125 hover:text-gray-800",
}

export default SocialLink
