import logoAuthor from '../../assets/logoAuthor.jpeg'

const Author = () => {
  return (
    <div className="author">
      <p>
        IUTA
        <br />
        Tercer Cuatrimeste
      </p>
      <div>
        <img style={{
          width: '150px',
          height: '200px',
          borderRadius: '28px',
          objectFit: 'cover'
        }} src={logoAuthor} alt="Carlos Argelio" />
      </div>
      <p>
        <a href="https://github.com/CarlosArgelio">Carlos A. Palacios R.</a>
      </p>
    </div>
  );
};

export default Author;
