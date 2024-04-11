import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const queryClient = new QueryClient();
root.render(
  // <React.StrictMode
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  // </React.StrictMode>
)

reportWebVitals();
