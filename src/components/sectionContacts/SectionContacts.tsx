import { useTranslation } from 'react-i18next';
import Map from '../map';
import scss from './SectionContacts.module.scss';

const SectionContacts = () => {
  const { t } = useTranslation();

  return (
    <section className={scss.contact}>
      <div className={scss['box-title']}>
        <h1 className={scss.title}>{t('contacts.title')}</h1>
      </div>
      <div className="container">
        <ul className={scss['contact-list']}>
          <li className={scss['contact-item']}>
            <p className={scss['info-title']}>{t('contacts.phone')}</p>
            <a className={scss['contact-phone']} href="tel:+380973332211">
              +38(097)333-22-11
            </a>
          </li>
          <li className={scss['contact-item']}>
            <p className={scss['info-title']}>{t('contacts.schedule')}</p>
            <p className={scss['office-hours']}>
              {t('contacts.days.mon-fri')} 08:00-22:00 <br />
              {t('contacts.days.sat')}09:00-21:00 <br />
              {t('contacts.days.sun')} 10:00-20:00
            </p>
          </li>
          <li className={scss['contact-item']}>
            <p className={scss['info-title']}>{t('contacts.email')}</p>
            <a className={scss['contact-email']} href="mailto:hello@gmail.com">
              hello@gmail.com
            </a>
          </li>
          <li className={scss['contact-item']}>
            <p className={scss['info-title']}>{t('contacts.address-title')}</p>
            <a
              className={scss['office-address']}
              href="https://maps.app.goo.gl/MhXZeUXeXauU3JdF9"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {t('contacts.address')}
            </a>
          </li>
          <li className={scss['contact-item']}>
            <Map />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionContacts;
