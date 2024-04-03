import ReactSelect from 'react-select';
import scss from './Filter.module.scss';
import { useTranslation } from 'react-i18next';

interface FilterOption {
  value: string;
  label: string;
}

const Filter = () => {
  const { t } = useTranslation();

  const filterButtons: FilterOption[] = [
    { value: t('filter.bakota'), label: t('filter.bakota') },
    { value: t('filter.carpathians'), label: t('filter.carpathians') },
    { value: t('filter.kyiv'), label: t('filter.kyiv') },
    { value: t('filter.odessa'), label: t('filter.odessa') },
  ];

  const customStyles = {
    control: (provided: object, state: { isFocused: boolean }) => ({
      ...provided,
      height: '60px',
      fontSize: '24px',
      cursor: 'pointer',
      boxShadow: 'none',
      backgroundColor: '#e8e8e8',
      borderRadius: '0',
      border: '0',
    }),
    menuList: (provided: object) => ({
      ...provided,
      paddingTop: '0',
      paddingBottom: '0',
    }),
    option: (provided: object) => ({
      ...provided,
      color: 'inherit',
      cursor: 'pointer',
      backgroundColor: '#a3a5a9f7',
      '&:not(:last-child)': {
        borderBottom: '2px solid #e8e8e8',
      },
      '&:hover': {
        backgroundColor: '#e8e8e8',
      },
    }),
  };

  const IndicatorSeparator = () => null;

  const IndicatorsContainer = () => (
    <div className={scss.indicatorsContainer}>
      <div className={scss.indicators}> </div>
    </div>
  );

  return (
    <ReactSelect
      className={scss.select}
      placeholder={t('filter.title')}
      components={{ IndicatorSeparator, IndicatorsContainer }}
      options={filterButtons}
      styles={customStyles}
      isSearchable={false}
    />
  );
};

export default Filter;
