import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Location from './components/Location.jsx';
import Packages from './components/Packages.jsx';
import Testimonials from './components/Testimonials.jsx';
import PhotoGallery from './components/PhotoGallery.jsx';
import Footer from './components/Footer.jsx';
import Blog from './components/Blog.jsx';
import FAQ from './components/FAQ.jsx';
import Map from './components/Map.jsx';
import Offers from './components/Offers.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Location />
      <Packages />
      <Offers />
      <Blog />
      <Testimonials />
      <FAQ />
      <Map />
      <PhotoGallery />
      <Footer />
     
    </div>
  );
}

export default App;