import './App.css';
import WhatsIsAComputer from './pages/questions/WhatIsAComputer';
import TypesComputers from './pages/questions/TypesComputers';
import CharacteristicsVariousComputers from './pages/questions/CharacteristicsVariousComputers';
import CharacteristicsVariosComputersDependingDataHandling from './pages/questions/CharacteristicsVariosComputersDependingDataHandling';
import Author from './pages/author/authors';
import NavBar from './pages/navbar/navbar';


function App() {
  return (
    <div className="App">
      <NavBar />

      <WhatsIsAComputer />
      <TypesComputers />
      <CharacteristicsVariousComputers />
      <CharacteristicsVariosComputersDependingDataHandling />

      <Author />
    </div>
  );
}

export default App;
