import { Route, Routes } from 'react-router-dom'
import './App.css'


import WhoIsWatching from './pages/WhoIsWatching'
import Home from './pages/Home'
import Account from './pages/Account'

function App() {

  return (
    <Routes>
      <Route index path='/' element={ <Home /> } />
      <Route path='/profiles' element={<WhoIsWatching />} />
      <Route path='/account' element={<Account />} />
    </Routes>
  )
}

export default App
