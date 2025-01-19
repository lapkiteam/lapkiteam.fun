import React from "react" // leave it in, otherwise it throws an error
import { createRoot } from "react-dom/client"

import "./styles.css"
import { concat } from "./utils"
import { Navbar } from "./components/navbar"

function App() {
  return (
    <>
      <div
        className={concat([
          "h-screen",
          "flex",
          "flex-col",
          "items-center",
          "gap-6",
        ])}
      >
        <Navbar />
        <div
          className={concat([
            "flex-grow",
            "overflow-y-auto",

          ])}
        >
          <img
            className={concat([
              "object-contain",
              "max-w-fit",
              "h-full",
              "w-full",
            ])}
            src="./team.png"
            alt="team"
          />
        </div>
        <div
        className={concat([
          "overflow-y-auto",
        ])}
        >
          <img
            className={concat([
              "object-contain",
              "max-w-fit",
              "h-full",
              "w-full",
            ])}
            src="./details.png"
            alt="details"
          />
        </div>
      </div>
    </>
  )
}

document.addEventListener("DOMContentLoaded", (event) => {
  const app = document.getElementById("app") as HTMLDivElement
  if (app) {
    const root = createRoot(app)
    root.render(<App />)
  }
})
