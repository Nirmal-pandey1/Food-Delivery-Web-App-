import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import ResetPass from './Pages/ResetPass'

function App() {
  return (
    
    <Routes>
      
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/reset-pass' element={<ResetPass/>}></Route>
      
    </Routes>
  )
}

export default App