import logo from './logo.svg';
import './App.css';
import Blogsingle from './components/Blogsingle';
import Contact from './components/Contact';
import Profiledetails from './components/Profiledetails';

function App() {
  return (
    <div className="App">
      <Profiledetails/>
     <Blogsingle/>
     <Contact/>

    </div>
  );
}

export default App;
