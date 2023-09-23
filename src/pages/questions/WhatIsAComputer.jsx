import Card from 'react-bootstrap/Card';
import computerIMage from '../../assets/questionsOne/resource_computer_1.jpg'
import NavBar from '../navbar/navbar';



function WhatsIsAComputer() {
  return (
    <>
      <NavBar />

      <Card style={{
      width: '18rem',
      margin: 'auto',
      }}>
      <Card.Img variant="top" src={computerIMage} />
      <Card.Body>
        <Card.Title> ¿Que es un computador? </Card.Title>
        <Card.Text>
          Un computador es una máquina electrónica que está diseñada para realizar tareas específicas.
          En muchos países se le conoce como computadora u ordenador, pero todas estas palabras se
          refieren a lo mismo.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}

export default WhatsIsAComputer;
