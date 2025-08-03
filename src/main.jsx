import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import App from './App.jsx'

const client = new ApolloClient({
    uri: 'https://graphql-api-brown.vercel.app/api/graphql',
    cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
