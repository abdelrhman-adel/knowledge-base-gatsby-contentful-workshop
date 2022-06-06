import React from "react"
import Header from "../components/Header"
import "../styles/global.css"
export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer>copyrights Rangle 2022, all rights reserved.</footer>
    </>
  )
}
