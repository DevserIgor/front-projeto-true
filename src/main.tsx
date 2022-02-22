import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import App  from './App';
import { queryclient } from './services/queryClient';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient} >
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
