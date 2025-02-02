import React from 'react'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/user.context'

const App = () => {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  )
}

// try

export default App