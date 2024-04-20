import firstImg from '../../assets/images/image 8.png';
import secondImg from '../../assets/images/image 11.png';
import thirdImg from '../../assets/images/image 9.png';
import fourthImg from '../../assets/images/image 10.png';
import './CottageGallery.scss';

const CottageGallery = () => {
  return (
    <div className="cottage-booking__gallery">
      <div className="cottage-booking__images-left">
        <img src={firstImg} alt="house" width={507} />
        <img src={secondImg} alt="house" width={507} />
      </div>
      <div className="cottage-booking__description">
        <p className="cottage-booking__text">
          Затишні дерев’яні будиночки, які заховались на окраїні лісу,
          зустрічатимуть Вас чудовим краєвидом на ранкові полонини. <br />{' '}
          <br /> Ви можете обрати кількість кімнат та місце, яке буде ідеальним
          для Вас. Територія, на якій базуються будиночки, підійде як і для
          великих компаній, яким потрібно бути поряд у декількох будинках, так і
          для пар, які хочуть бути на одинці.
        </p>
        <div className="cottage-booking__images-bottom">
          <img src={thirdImg} alt="house" width={355} />
          <img src={fourthImg} alt="house" width={355} />
        </div>
      </div>
    </div>
  );
};

export default CottageGallery;
