import logo from './logo.svg';
import './App.css';
import '../src/Component/Navbar'
import Navbar from '../src/Component/Navbar';
import Body from '../src/Component/Body';
import Contact from  '../src/Component/Contact'
import Card from '../src/Component/Card'
import Content from '../src/Component/Content'
import SliderHeader from '../src/Component/SliderHeader'
import Slider from '../src/Component/Slider'
import Expertise from '../src/Component/Expertise'
import Subscribe from '../src/Component/Subscribe'
import News from '../src/Component/News'
import Footer from '../src/Component/Footer'

function App() {
  return (
    
    <div>
      <Navbar></Navbar>
      <Body></Body>
      <Contact></Contact>
      <Card></  Card>
      <Content></Content>
      <SliderHeader></SliderHeader>
      <Slider></Slider>
      <Expertise></Expertise>
      <Subscribe></Subscribe>
      <News></News>
      <Footer></Footer>
    </div>
  );
}

export default App;
