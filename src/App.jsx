
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import Home from './components/home'

function App() {

  return (
    <>
     <div className='bg-black  ' style={{height:'100vh'}}>
     <Header/>
     <Home/>
     <Footer/>
     </div>
    </>
  )
}

export default App