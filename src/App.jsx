import { RouterProvider } from 'react-router-dom'
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Auth from './Auth/Auth';
import router from './Routes/Routes';

const queryClient= new QueryClient();
const App = () => {
  return <QueryClientProvider client={queryClient}><Auth><RouterProvider router={router}></RouterProvider></Auth></QueryClientProvider>
}

export default App
