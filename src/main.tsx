import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Root element not found</div>'
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  } catch (error) {
    console.error('Failed to render application:', error)
    document.body.innerHTML = '<div style="color: red; padding: 20px;">Failed to load application. Error: ' + (error instanceof Error ? error.message : 'Unknown error') + '</div>'
  }
}
