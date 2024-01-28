import './App.css'
import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable';
import { data } from './data/data'
import { useState } from 'react'

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault();
    if (!height || !weight) return;

    const heightFloat = height.replace(',','.');
    const weightFloat = weight.replace(',','.');
    
    const ImcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(ImcResult);

    data.forEach((item) => {
      if(ImcResult >= item.min && ImcResult <= item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);

      }
    });
    if (!info) return
  };

    const resetCalc = (e) => {
      e.preventDefault();

      setImc('');
      setInfo('');
      setInfoClass('');
    }

  const [info, setInfo] = useState('');
  const [imc, setImc] = useState('');
  const [infoClass, setInfoClass] = useState('')
  
  return (
    <div className='container'>
      {!imc ? (<ImcCalc calcImc={calcImc}/>) : (<ImcTable data={data} imc={imc} info={info}  infoClass={infoClass} resetCalc={resetCalc}/>)}
    </div>
  )
}

export default App
