import ReactSelect from 'react-select';
import { useTranslation } from 'react-i18next';
import './Filter.scss';

const Filter = () => {
  const { t } = useTranslation();

  const filterButtons = [
    { value: t('filter.bakota'), label: t('filter.bakota') },
    { value: t('filter.carpathians'), label: t('filter.carpathians') },
    { value: t('filter.kyiv'), label: t('filter.kyiv') },
    { value: t('filter.odessa'), label: t('filter.odessa') },
  ];

  const customStyles = {
    control: provided => ({
      ...provided,
      height: '60px',
      fontSize: '24px',
      cursor: 'pointer',
      boxShadow: 'none',
      backgroundColor: '#e8e8e8',
      borderRadius: '0',
      border: '0',
    }),
    menuList: provided => ({
      ...provided,
      paddingTop: '0',
      paddingBottom: '0',
    }),
    option: provided => ({
      ...provided,
      fontStyle: 'italic',
      cursor: 'pointer',
      color: '#292a31',
      backgroundColor: '#a3a5a9f7',
      '&:not(:last-child)': {
        borderBottom: '2px solid #e8e8e8',
      },
      '&:hover': {
        backgroundColor: '#e8e8e8',
      },
    }),
    placeholder: provided => ({
      ...provided,
      color: '#0000009b',
    }),
  };

  const IndicatorSeparator = () => null;

  const IndicatorsContainer = () => (
    <div className="indicators-Container">
      <div className="indicators"> </div>
    </div>
  );

  return (
    <ReactSelect
      className="select"
      placeholder={t('filter.title')}
      components={{ IndicatorSeparator, IndicatorsContainer }}
      options={filterButtons}
      styles={customStyles}
      isSearchable={false}
    />
  );
};

export default Filter;
