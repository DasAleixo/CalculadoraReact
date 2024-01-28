import './ImcCalc.css'
import Button from './Button'
import { useState } from 'react'

const ImcCalc = ({ calcImc }) => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] =useState('');

    const clearform = (e) => {
        e.preventDefault();
        setHeight('');
        setWeight('');
    }
    
    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value);
        setHeight(updateValue);
    }
    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value); 
        setWeight(updateValue);
    }

  return (
    <div id='calc-container'>
        <h1>Calculadora de IMC</h1>
        <form id="imc-form">
            <div className="form-inputs">
                <div className='form-control'>
                    <label htmlFor="height">Altura:</label>
                    <input type="text" name='height' placeholder='1,75' 
                    onChange={(e) => handleHeightChange(e)} value={height || ''}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="weight">Peso:</label>
                    <input type="text" name='weight' placeholder='75' 
                    onChange={(e) => handleWeightChange(e)} value={weight || ''}/>
                </div>
            </div>
            <div className="action-control">
                <Button id='calc-btn' text='Calcular' action={(e) => calcImc(e, height, weight)}/>
                <Button id='limpar-btn' text='Limpar' action={clearform}/>
            </div>
        </form>
    </div>
  )
}

export default ImcCalc