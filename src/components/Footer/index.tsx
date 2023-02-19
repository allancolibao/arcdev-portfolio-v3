import React from "react"
import SocialLink from "./SocialLink"

const Footer = () => (
  <section className="mb-20 md:mb-24 lg:mb-0 mt-12 md:mt-16 lg:mt-24">
    <div className="w-full mb-2 md:mb-6">
      <div className="flex mx-auto">
        <SocialLink />
      </div>
      <div>
        <p className="font-normal lg:font-normal tracking-wider text-sm md:text-xl lg:text-2xl  text-gray-500 italic flex justify-center bottom-0 mx-auto z-20">
          @arcdev
        </p>
      </div>
    </div>
  </section>
)

export default Footer