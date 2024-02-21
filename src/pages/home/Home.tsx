import FeedbackForm from '../../components/feedbackForm';
import SectionMainPoster from '../../components/sectionMainPoster';
import SectionSecondPoster from '../../components/sectionSecondPoster';
import scss from './Home.module.scss';

const Home = () => {
  return (
    <div className={scss.pageHome}>
      <SectionMainPoster />
      <SectionSecondPoster />
      <FeedbackForm />
    </div>
  );
};

export default Home;
