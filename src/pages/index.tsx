import { Route, Routes } from "react-router-dom"
import { routes } from "shared/config"


export const Routing = () => {
  return (
    <>
      <Routes>
        {routes.map(({path, component}) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </>
  )
}