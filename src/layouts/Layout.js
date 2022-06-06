import React from "react"
import Header from "../components/Header"
import "../styles/global.css"
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
