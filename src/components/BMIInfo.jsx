function BMIInfo() {
  const categories = [
    {range: "Below 16.0", category: "Severly Underweight", color: "yellow"},
    { range: "16.0-18.4", category: "Underweight", color: "yellow" },
    { range: "18.5 - 24.9", category: "Normal weight", color: "green" },
    { range: "25 - 29.9", category: "Overweight", color: "orange" },
    { range: "30 and 34.9", category: "Moderately Obese", color: "red" },
    { range: "35.0 and 39.9", category: "Severely Obese", color: "red" },
    { range: "40 and above", category: "Morbidly Obese", color:"red"}
  ]
  
  return (
    <div className="bmi-info">
      <h3>BMI Categories</h3>
      <div className="categories">
        {categories.map(function (category, index) {
          return <div key={index} className="category-item" style={{ borderLeft: `6px solid ${category.color}` }}>
            <span className='range'>{category.range}</span>
            <span className='category'>{category.category}</span>
          </div>
        })}
      </div>
    </div>
  );
}
export default BMIInfo