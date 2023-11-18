import {Main} from "./Main"
import {Header} from "./Components/Header"
import {Body} from "./Components/Body"
import {Footer} from './Components/Footer'
import './Body.css'
import './App.css';
import './Navv.css';
import './Header.css';
import './Footer.css';

function App() {
  return (
    <div className="App">
    <Main/>
    <Header/>
    <Body/>
    <Footer/>
    </div>
  );
}

export default App;
