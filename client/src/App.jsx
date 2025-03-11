import { Routes, Route} from 'react-router'

import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {
  return (
      <div id="box">
          <Header />

            {/* Main Content */}
          <main id="main-content">
              <Routes>
                  <Route path='/' element={<Home />} />
              </Routes>
              <Home />
          </main>
      </div>
  )
}

export default App
