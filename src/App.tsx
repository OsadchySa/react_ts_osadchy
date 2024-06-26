import React, {FC} from 'react';
import './App.css';
import Car from "./Components/avtomobile/Car";
const App: FC = () => {
  return (
      <>
          <Car nameOfClassImg={'img'} nameOfClassTitle={'title'} nameOfClassBut={'but'} model={'Tesla Model 3'} image={'https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg'}>RENT</Car>
          <Car nameOfClassImg={'img'} nameOfClassTitle={'title'} nameOfClassBut={'but'} model={'Tesla Model Y'} image={'https://upload.wikimedia.org/wikipedia/commons/5/5c/Tesla_Model_Y_1X7A6211.jpg'}>RENT</Car>
          <Car nameOfClassImg={'img'} nameOfClassTitle={'title'} nameOfClassBut={'but'} model={'Tesla Model X'} image={'https://upload.wikimedia.org/wikipedia/commons/c/c6/Tesla_Model_X_100D_1X7A6736.jpg'}>RENT</Car>
      </>
  );
}

export default App;
