import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import mithunlogo from './assets/mithun_logo.png'
import './App.css'

function App() {

  return (
      <>
          <header className="container-fluid d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
              <a href="/"
                 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                  <img src={mithunlogo} alt="LocalWeb (Recreated) Logo"/>
              </a>

              <ul className="nav nav-pills">
                  <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Apps</a></li>
                  <li className="nav-item"><a href="" className="nav-link">Games</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Terminal</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Recipes</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Feedback</a></li>
              </ul>
          </header>
          <p className="text-danger">Why???<s>?</s></p>
      </>
  )
}

export default App
