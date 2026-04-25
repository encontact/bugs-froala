import ReactDOM from 'react-dom/client'
import App from './App.tsx'



const rootContainer = document.getElementById('root')
if (rootContainer) {
  const root = ReactDOM.createRoot(rootContainer)
  root.render(
    <App />,
  )
}


