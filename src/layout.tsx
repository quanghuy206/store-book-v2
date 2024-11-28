import { Outlet } from "react-router-dom"

function Layout() {

  return (
    <>
      <div>Hello world page</div>
      <Outlet />
    </>
  )
}

export default Layout
