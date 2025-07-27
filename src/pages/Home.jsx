//import Contact from '../components/contact/Contact';
import Experience from '../components/experience/Experience';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Intro from '../components/intro/Intro';
import Portfolio from '../components/portfolio/Portfolio';
//import Testimonials from '../components/testimonials/Testimonials';
import Topbar from '../components/topbar/Topbar';
import Timeline from '../components/timeline/Timeline';

const Home = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Timeline />
      <Portfolio />
      <Footer />
    </>
  );
};

export default Home;