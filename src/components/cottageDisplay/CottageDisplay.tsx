import firstImg from '../../assets/images/image 8.png';
import secondImg from '../../assets/images/image 11.png';
import thirdImg from '../../assets/images/image 9.png';
import fourthImg from '../../assets/images/image 10.png';
import scss from './CottageDisplay.module.scss';

const CottageDisplay = () => {
  return (
    <div className={scss['section-gallery']}>
      <div className={scss['image-container']}>
        <img src={firstImg} alt="house" width={507} />
        <img src={secondImg} alt="house" width={507} />
      </div>
      <div className={scss['content-block']}>
        <p className={scss['text-block']}>
          Затишні дерев’яні будиночки, які заховались на окраїні лісу,
          зустрічатимуть Вас чудовим краєвидом на ранкові полонини. <br />{' '}
          <br /> Ви можете обрати кількість кімнат та місце, яке буде ідеальним
          для Вас. Територія, на якій базуються будиночки, підійде як і для
          великих компаній, яким потрібно бути поряд у декількох будинках, так і
          для пар, які хочуть бути на одинці.
        </p>
        <div className={scss['inner-image-container']}>
          <img src={thirdImg} alt="house" width={355} />
          <img src={fourthImg} alt="house" width={355} />
        </div>
      </div>
    </div>
  );
};

export default CottageDisplay;
