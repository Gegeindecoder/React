import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Details from './pages/Details.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/details",
    element: <Details></Details>
  }
])

createRoot(document.getElementById('root')!).render(
  //TODO vedere e chiedere differenze https://www.geeksforgeeks.org/reactjs-types-of-routers/
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
)
