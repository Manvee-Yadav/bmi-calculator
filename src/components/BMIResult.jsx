import { useBmiStore } from '../store/bmiStore';
import { getRecommendations } from '../utils/recommendations';

export default function BMIResult() {
  const result = useBmiStore(state => state.currentResult);
  if (!result) return null;
  const recommendations=getRecommendations(result.bmi);

  const getBMICategory = (bmi) => {
    if(bmi < 16.0) return { category: "Severly Underweight", color: "yellow" };
    else if(bmi < 18.5) return { category: "Underweight", color: "yellow" };
    else if(bmi < 25) return { category: "Normal weight", color: "green" };
    else if(bmi < 30) return { category: "Overweight", color: "orange" };
    else if(bmi < 35) return { category: "Moderately Obese", color: "red" };
    else if(bmi < 40) return { category: "Severly Obese", color: "red" };
    else return { category: "Morbidly Obese", color: "red" };
  };

  const categoryInfo = getBMICategory(result.bmi);

  return (
    <div className='bmi-result'>
      <h3>{result.name}'s BMI result</h3>
      <div className='result-display'>
        <div className='bmi-value' style={{backgroundColor: `${categoryInfo.color}`}}>
          BMI:{result.bmi}
        </div>

        <div className='bmi-category' style={{backgroundColor: `${categoryInfo.color}`}}>
          {categoryInfo.category}
        </div>

        <div className='result-details'>
          <p >Height: {result.height} {result.heightUnit}</p>
          <p>Weight: {result.weight} {result.weightUnit}</p>
        </div>

        <div className="result-recommend">
          <h3>🥗Diet-recommendation</h3>
          <ul className='diet-recommend'>
          {
            recommendations.diet.map((item, index) =>  (
               <li key={index}>{item}</li>
            ))
          }
          </ul>
          <h3>🤸‍♂️Exercise-recommendation</h3>
          <ul className='Exercise-recommend'>
          {
             recommendations.exercise.map((item, index) =>  (
               <li key={index}>{item}</li>
            ))
          }
          </ul>
        </div>
      </div>
    </div>
  );
}
