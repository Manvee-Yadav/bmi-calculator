/* how information is passed inside bmi calculator

send data up using onCalculate:

onCalculate({
  name,
  height: parseFloat(height),
  weight: parseFloat(weight),
  bmi: parseFloat(bmi)
})
onCalculate is a prop passed from the parent (App):

<BMIForm onCalculate={handleCalculate} />
So when BMIForm calls onCalculate(...), it actually calls handleCalculate inside App, passing the BMI data object.

//flow-chart:
User → BMIForm → handleSubmit()
           ↓
  calculates BMI
           ↓
  calls onCalculate(data)
           ↓
       App.handleCalculate(data)
           ↓
    setCurrentResult(data)
           ↓
 App re-renders → passes currentResult → BMIResult
           ↓
   BMIResult shows result.bmi, result.name

*/

import { useState } from 'react';
import { useBmiStore } from '../store/bmiStore';

export default function BMIForm() {
  const addResult = useBmiStore(state => state.addResult);

  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('feet');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && height && weight) {
      let heightInMeters;
      if (heightUnit === "feet") heightInMeters = parseFloat(height) * 0.3048;
      else if (heightUnit === "cm") heightInMeters = parseFloat(height) / 100;
      else if (heightUnit === "inches") heightInMeters = parseFloat(height) * 0.0254;

      let weightInKg = weightUnit === "kg"
        ? parseFloat(weight)
        : parseFloat(weight) * 0.453592;

      const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);

      addResult({
        name,
        height: parseFloat(height),
        heightUnit,
        weight: parseFloat(weight),
        weightUnit,
        bmi: parseFloat(bmi)
      });

      setName('');
      setHeight('');
      setWeight('');
     
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form className="bmi-form" onSubmit={handleSubmit}>
      <h3>Calculate your BMI</h3>

      <div className='form-group'>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
          placeholder='Enter your name'
        />
      </div>

      <div className='form-group'>
        <label>Height:</label>
        <input
          type="text"
          value={height}
          onChange={(e)=> setHeight(e.target.value)}
          placeholder='Enter height'
        />
        <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
          <option value="feet">Feet</option>
          <option value="cm">Centimeters</option>
          <option value="inches">Inches</option>
        </select>
      </div>

      <div className='form-group'>
        <label>Weight:</label>
        <input
          type="text"
          value={weight}
          onChange={(e)=> setWeight(e.target.value)}
          placeholder='Enter weight'
        />
        <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
          <option value="kg">Kilograms</option>
          <option value="lbs">Pounds</option>
        </select>
      </div>

      <input type="submit" value="Calculate" className='calculate-btn' />
    </form>
  );
}
