"use client"

import grapesjs from "grapesjs"
import { useEffect, useState } from "react"

const Home = () => {
  const [editor, setEditor] = useState(null)

  const escapeName = (name) =>
    `${name}`.trim().replace(/([^a-z0-9\w-:/]+)/gi, "-")

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      height: "100%",
      fromElement: true,
      storageManager: false,
      selectorManager: { escapeName },
      plugins: ["grapesjs-tailwind"],
    })
    setEditor(editor)
  }, [])

  return (
    <>
      <div>Home Page</div>
    </>
  )
}

export default Home
