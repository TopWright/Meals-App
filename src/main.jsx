import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './responsive.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoutesProvider from './context/ProtectedRouteContext.jsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProtectedRoutesProvider>
        <App />
      </ProtectedRoutesProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
