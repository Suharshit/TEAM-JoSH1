import {Route,Routes} from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import LoginForm from './_auth/forms/LoginForm'
import SigninForm from './_auth/forms/SigninForm'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <>
      <Routes>
        {/* public route */}
        <Route element={<AuthLayout/>}>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/signin' element={<SigninForm/>}/>
        </Route>

        {/* private route */}
        <Route element={<PrivateRoute/>}>
          <Route element={<RootLayout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
