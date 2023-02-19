import React from "react"
import type { InputProps } from "@type/input"

const Input = ({
  id,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
  rows,
  isTextarea
}: InputProps) => (
  isTextarea ? 
    <textarea
      id={id}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={input.style}
    >
    </textarea>
    :
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={input.style}
  />
)

const input = {
  style: "bg-gray-100 text-sm md:text-base appearance-none border border-gray-500 w-full text-gray-700 py-2 px-2 md:px-4 leading-tight focus:outline-none focus:text-gray-700 focus:border-gray-800"
}
export default Input