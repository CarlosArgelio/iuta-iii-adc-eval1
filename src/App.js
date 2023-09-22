import './App.css';
import WhatsIsAComputer from './questions/WhatIsAComputer';
import TypesComputers from './questions/TypesComputers';
import CharacteristicsVariousComputers from './questions/CharacteristicsVariousComputers';
import CharacteristicsVariosComputersDependingDataHandling from './questions/CharacteristicsVariosComputersDependingDataHandling';



function App() {
  return (
    <div className="App">
      <WhatsIsAComputer />
      <TypesComputers />
      <CharacteristicsVariousComputers />
      <CharacteristicsVariosComputersDependingDataHandling />
    </div>
  );
}

export default App;
