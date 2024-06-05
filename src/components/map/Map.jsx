import styles from './Map.module.scss';

const Map = () => {
  return (
    <div>
      <iframe
        className={styles.map}
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27146.69803851241!2d30.502562956246216!3d50.42003874897128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1710966379421!5m2!1suk!2sua"
        width="480"
        height="290"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
