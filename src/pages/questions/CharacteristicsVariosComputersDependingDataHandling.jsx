import Table from 'react-bootstrap/Table';
import NavBar from '../../pages/navbar/navbar';
import info from '../../utils/questions_for'

const CharacteristicsVariosComputersDependingDataHandling = () => {

  const characteristics = info.map( element =>
    <tbody>
      <tr>
        <td> {element.type} </td>
        <td> {element.capacity} </td>
        <td> {element.characteristic} </td>
        <td> {element.examples} </td>
      </tr>
    </tbody>
  )
  // console.log(characteristics)

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <Table responsive>
          <thead className='text-center'>
            <tr>
              <th>Tipos de computadoras</th>
              <th>Capacidad de manejo de datos</th>
              <th>Características</th>
              <th>Ejemplos</th>
            </tr>
          </thead>
            {characteristics}
        </Table>
      </div>
    </>
  );
};

export default CharacteristicsVariosComputersDependingDataHandling;
