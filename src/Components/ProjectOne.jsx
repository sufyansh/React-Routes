import Navbar from '../Components/Projectone/Navbar/Navbar';
import Banner from '../Components/Projectone/Banner/Banner';
import ExtraText from '../Components/Projectone/ExtraText/ExtraText';
import Card from '../Components/Projectone/Cards/Cards';
import ExtraText2 from '../Components/Projectone/ExtraText2/ExtraText2';
import ReviewSection from '../Components/Projectone/ReviewSection/Review';
import Footer from '../Components/Projectone/Footer/Footer';

import './ProjectOne.css'
const ProjectOne =() => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ExtraText />
      <Card />
      <Card />
      <ExtraText2 />
      <Card />
      <Card />
      <ReviewSection />
    <Footer />
    </div>
    
  );
}

export default ProjectOne;