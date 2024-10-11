import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./components/AppRouter"
import NavItems from "./components/NavBar"

import './index.css'
import 'swiper/css'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// fonts and icons
import '././assets/css/icofont.min.css'
import '././assets/css/animate.css'
import '././assets/css/style.min.css'
import Footer from "./components/Footer"
import {AuthProvider} from "./context/AuthProvider"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavItems />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
