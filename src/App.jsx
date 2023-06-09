import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routes/Routes'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient= new QueryClient();
const App = () => {
  return <QueryClientProvider client={queryClient}><RouterProvider router={router}></RouterProvider></QueryClientProvider>
}

export default App
