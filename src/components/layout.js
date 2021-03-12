import * as React from "react"
import Nav from './Nav'
import "../styles/style.css"

const Layout = (props) => {
  return (
    <div>
      <Nav />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
