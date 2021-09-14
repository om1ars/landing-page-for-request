// import logo from './logo.svg';
// import './App.css';

import "./index.css";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/index";
import Develop from "./components/Develop/index";
import Testimonial from "./components/testimonial/index";
// import { Group } from "@material-ui/icons";
import Group from './components/group/index'
import Footer from './components/footer/index'
function App() {
  return (
    <div className="App">
      <div className="background">
        <Navbar />
        <Home />
      </div>
      <div className="padding">
        <News />
      </div>
      <div className="laptop">
        <Develop />
      </div>
      <Testimonial />
      <div>
      <Group />
      </div>
      <div>
        <Footer />
      </div>
    </div>
 
  );
}

export default App;
