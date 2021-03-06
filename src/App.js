import './App.css';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Email from './components/EmailBlock/Email';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Showcase from './components/Showcase/Showcase';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
    <Showcase />
    <CourseInfo/>
    <Features/>
    <Testimonials/>
    <Email/>
    <Footer/>
    </>
  );
}

export default App;
