import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/root_layout/RootLayout'
import Homepage from './pages/homepage/Homepage'
import Apps from './pages/apps/Apps'
import InstallApps from './pages/install_apps/InstallApps'
import NotFound from './pages/not_found/NotFound'
import AppDetails from './pages/app_details/AppDetails'
import InstalledAppsContextProvider from './components/installed_apps_context/InstalledAppsContextProvider'

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage
      },
      {
        path: "apps",
        Component: Apps
      },
      {
        path: "apps/:appId",
        Component: AppDetails
      },
      {
        path: "installed-apps",
        Component: InstallApps
      },
      {
        path: "*",
        Component: NotFound
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstalledAppsContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </InstalledAppsContextProvider>
  </StrictMode>,
)
