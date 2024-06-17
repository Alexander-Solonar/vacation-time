import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchHouses } from '../../firebase/APIFirebase';
import SectionMainPoster from '../../components/sectionMainPoster';
import SlideSwiper from '../../components/slideSwiper';
import FeedbackForm from 'components/forms/feedbackForm/FeedbackForm';
import SectionSecondPoster from '../../components/sectionSecondPoster';

const PageHome = () => {
  const [housesList, setHousesList] = useState([]);
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage;

  useEffect(() => {
    fetchHouses(setHousesList, lng);
  }, [lng]);

  return (
    <>
      <SectionMainPoster />
      <SlideSwiper housesList={housesList} />
      <SectionSecondPoster />
      <FeedbackForm />
    </>
  );
};

export default PageHome;
