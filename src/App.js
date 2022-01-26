
import './App.css';
import From from './components/From';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
     <Navbar title="Text Utils" link1="Home" link2="About"/>
     <From heading="Modify your text ~" placeholder="Start typing..."/>
    </>
  );
}

export default App;
