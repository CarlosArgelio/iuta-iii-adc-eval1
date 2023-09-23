import Table from 'react-bootstrap/Table';
import NavBar from '../../pages/navbar/navbar';
import info from '../../utils/questions_three'

const CharacteristicsVariousComputers = () => {

  const characteristics = info.map( element =>
    <tbody>
      <tr>
        <td> {element.type} </td>
        <td> {element.characteristic} </td>
        <td> {element.applications} </td>
      </tr>
    </tbody>
  )
  console.log(characteristics)

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
              <th>Caracateristicas</th>
              <th>Aplicaciones</th>
            </tr>
          </thead>
            {characteristics}
        </Table>
      </div>
    </>
  );
};

export default CharacteristicsVariousComputers;
