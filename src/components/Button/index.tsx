import React from "react"
import type { ButtonProps } from "@type/button"

const Button = ({ type, label, className, icon, isLoading, onClick, loadingText }: ButtonProps) => (
    <button
        type={type}
        className={`${className} text-white shadow-sm text-sm md:text-base appearance-none py-2 md:py-3 px-4 leading-tight transition duration-500 ease-in-out transform focus:outline-none focus:border-gray-700 bg-gray-600 hover:bg-gray-800`}
        onClick={onClick}
    >
        <div className="flex items-center justify-center">
            <span className={icon ? "mr-2" : ""}>{icon ? icon : null}</span>{isLoading ? loadingText :label}
        </div>
    </button>
)
  
export default Button