import SectionMainPoster from '../../components/sectionMainPoster';
import SlideSwiper from '../../components/slideSwiper';
import FeedbackForm from 'components/forms/feedbackForm/FeedbackForm';
import SectionSecondPoster from '../../components/sectionSecondPoster';

const PageHome = () => {
  return (
    <>
      <SectionMainPoster />
      <SlideSwiper />
      <SectionSecondPoster />
      <FeedbackForm />
    </>
  );
};

export default PageHome;
