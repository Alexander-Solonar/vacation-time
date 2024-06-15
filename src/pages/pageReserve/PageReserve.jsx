import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fetchHouses } from '../../firebase/APIFirebase';
import MainTitle from 'components/common/mainTitle';
import Filter from 'components/filter';
import HousesList from 'components/housesList';

const PageReserve = () => {
  const [housesList, setHousesList] = useState([]);
  const { i18n, t } = useTranslation();
  const lng = i18n.resolvedLanguage;

  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';

  useEffect(() => {
    fetchHouses(setHousesList, lng);
  }, [lng]);

  const filteredHouses = filter
    ? housesList.filter(
        ({ type }) => type.toLowerCase() === filter.toLowerCase()
      )
    : housesList;

  return (
    <div>
      <MainTitle name={t('reserve.title')} />
      <div className="container">
        <Filter filter={filter} setSearchParams={setSearchParams} />
        <HousesList filteredHouses={filteredHouses} />
      </div>
    </div>
  );
};

export default PageReserve;
