import { Navigate, Outlet } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated = true;

  return (
    <>
      {isAuthenticated ?
      (<Navigate to='/'/>)
       : 
      (
        <div className="flex h-screen flex-1 items-center justify-center">
          <section>
            <Outlet/>
          </section>
        </div>
      )}
    </>
  )
}

export default AuthLayout