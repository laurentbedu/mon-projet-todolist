
import './App.css'
import Header from './components/layout/Header'
import ContactPage from './pages/ContactPage'

function App() {

  const handleClick = (e) => {
    console.log(e.target.innerText);
    
  }
  
  return ( <>
    <Header title="Ma Todo List 1" handleClick={handleClick}/>
    <Header title="Ma Todo List 2" handleClick={handleClick}/>
    <Header />
  </>)
}

export default App
