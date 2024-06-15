import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import styles from './Filter.module.scss';
import { useEffect, useMemo, useState } from 'react';

const Filter = ({ filter, setSearchParams }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { t } = useTranslation();

  const filterOptions = useMemo(
    () => [
      { value: 'bakota', label: t('filter.bakota') },
      { value: 'carpathians', label: t('filter.carpathians') },
      { value: 'kyiv', label: t('filter.kyiv') },
      { value: 'odessa region', label: t('filter.odessa') },
    ],
    [t]
  );

  useEffect(() => {
    if (filter) {
      const selected = filterOptions.find(option => option.value === filter);
      setSelectedOption(selected.label);
    } else {
      setSelectedOption('');
    }
  }, [filter, filterOptions]);

  const handleChange = option => {
    if (option) {
      setSearchParams({ filter: option.value });
      setSelectedOption(option.label);
    } else {
      setSearchParams('');
    }
  };

  return (
    <Select
      onChange={handleChange}
      value={filter ? { label: selectedOption } : null}
      className={styles.select}
      placeholder={t('filter.title')}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
      }}
      options={filterOptions}
      styles={customStyles}
      isSearchable={false}
      isClearable={true}
    />
  );
};

export default Filter;

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
