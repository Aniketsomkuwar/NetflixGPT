import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/LoginPage.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import BrowsePage from './Pages/BrowsePage.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BrowsePage />
      },
      {
        path: "/login",
        element: <LoginPage />
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
