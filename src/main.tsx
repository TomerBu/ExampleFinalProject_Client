import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { DarkModeProvider } from './contexts/DarkModeContext.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { router } from './routes/Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DarkModeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </DarkModeProvider>
  </StrictMode>,
)
