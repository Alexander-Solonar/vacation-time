import { useTranslation } from 'react-i18next';
import Map from '../map';
import './ContactList.scss';

const ContactList = () => {
  const { t } = useTranslation();

  return (
    <ul className="contacts">
      <li>
        <p className="contacts__title">{t('contacts.phone')}</p>
        <a className="contacts__text" href="tel:+380973332211">
          +38(097)333-22-11
        </a>
      </li>
      <li>
        <p className="contacts__title">{t('contacts.schedule')}</p>
        <p className="contacts__text">
          {t('contacts.days.mon-fri')} 08:00-22:00 <br />
          {t('contacts.days.sat')}09:00-21:00 <br />
          {t('contacts.days.sun')} 10:00-20:00
        </p>
      </li>
      <li>
        <p className="contacts__title">{t('contacts.email')}</p>
        <a className="contacts__text" href="mailto:hello@gmail.com">
          hello@gmail.com
        </a>
      </li>
      <li>
        <p className="contacts__title">{t('contacts.address-title')}</p>
        <a
          className="contacts__text"
          href="https://maps.app.goo.gl/MhXZeUXeXauU3JdF9"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {t('contacts.address')}
        </a>
      </li>
      <li>
        <Map />
      </li>
    </ul>
  );
};

export default ContactList;
