import React from "react" // leave it in, otherwise it throws an error

import { concat } from "../utils"

export function Navbar() {
  return (
    <div
      className={concat([
        "h-14",
        "bg-gray-300",
        "w-full",
        // "flex-grow",
        // "basis-14",
      ])}
    >
    </div>
  )
}
