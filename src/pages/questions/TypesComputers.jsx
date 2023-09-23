import Card from 'react-bootstrap/Card';
import info from '../../utils/questions_two'


const IdentifyTheTypesOfExistingComputers = () => {

  const mapListInfo = info.map( info =>
        <Card style={{
          width: '18rem',
          margin: 'auto',
        }}>
          <Card.Img variant="top" src={info.image} />
          <Card.Body>
            <Card.Title> {info.title} </Card.Title>
            <Card.Text>
              {info.description}
            </Card.Text>
          </Card.Body>
        </Card>
      )

  return (
    <div className="container">
      <div className="row">
        {mapListInfo.map((card, index) => (
          <div className="col-md-4" key={index}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdentifyTheTypesOfExistingComputers;
