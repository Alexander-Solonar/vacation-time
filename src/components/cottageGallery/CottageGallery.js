import firstImg from '../../assets/images/image 8.png';
import secondImg from '../../assets/images/image 11.png';
import thirdImg from '../../assets/images/image 9.png';
import fourthImg from '../../assets/images/image 10.png';
import styles from './CottageGallery.module.scss';

const CottageGallery = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.blockLargeImage}>
        <img src={firstImg} alt="house" width={507} />
        <img src={secondImg} alt="house" width={507} />
      </div>
      <div className={styles.description}>
        <p className={styles.text}>
          Затишні дерев’яні будиночки, які заховались на окраїні лісу,
          зустрічатимуть Вас чудовим краєвидом на ранкові полонини. <br />{' '}
          <br /> Ви можете обрати кількість кімнат та місце, яке буде ідеальним
          для Вас. Територія, на якій базуються будиночки, підійде як і для
          великих компаній, яким потрібно бути поряд у декількох будинках, так і
          для пар, які хочуть бути на одинці.
        </p>
        <div className={styles.blockSmallImage}>
          <img src={thirdImg} alt="house" width={355} />
          <img src={fourthImg} alt="house" width={355} />
        </div>
      </div>
    </section>
  );
};

export default CottageGallery;
