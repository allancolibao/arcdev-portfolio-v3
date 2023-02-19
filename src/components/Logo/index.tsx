import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo: React.FC<{}> = () => (
    <div className="w-full flex items-center justify-between">
      <Link to="/">
        <StaticImage 
            src="../../images/logo.png" 
            className="w-14"
            alt="Arcdev Logo" 
        />
      </Link>
    </div>
)

export default Logo
