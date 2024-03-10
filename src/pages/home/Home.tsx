import SectionMainPoster from '../../components/sectionMainPoster';
import SlideSwiper from '../../components/slideSwiper';
import FeedbackForm from '../../components/feedbackForm';
import SectionSecondPoster from '../../components/sectionSecondPoster';

const Home = () => {
  return (
    <>
      <SectionMainPoster />
      <SlideSwiper />
      <SectionSecondPoster />
      <FeedbackForm />
    </>
  );
};

export default Home;
