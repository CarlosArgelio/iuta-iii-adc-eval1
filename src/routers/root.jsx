import App from '../App';
import WhatsIsAComputer from '../pages/questions/WhatIsAComputer';
import TypesComputers from '../pages/questions/TypesComputers';
import CharacteristicsVariousComputers from '../pages/questions/CharacteristicsVariousComputers';
import CharacteristicsVariosComputersDependingDataHandling from '../pages/questions/CharacteristicsVariosComputersDependingDataHandling';

const routes =  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/questions-one",
      element: <WhatsIsAComputer />,
    },
    {
      path: "/questions-two",
      element: <TypesComputers />,
    },
    {
      path: "/questions-three",
      element: <CharacteristicsVariousComputers />,
    },
    {
      path: "/questions-four",
      element: <CharacteristicsVariosComputersDependingDataHandling />,
    },
  ]

export default routes;
