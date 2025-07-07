export default function NutritionPage() {
  return (
    <div className="nutrition-page" style={{ padding: "20px" }}>
      <h2>Nutrition & Exercise Plans</h2>

      <section>
        <h3>🥗 Vegetarian Meal Plan</h3>
        <ul>
          <li>Breakfast: Oats with fruits & nuts</li>
          <li>Lunch: Brown rice, dal, mixed vegetable curry, salad</li>
          <li>Snack: Sprouts chaat or fruit smoothie</li>
          <li>Dinner: Chapati with paneer or tofu curry & steamed veggies</li>
        </ul>
      </section>

      <section>
        <h3>🍗 Non-Vegetarian Meal Plan</h3>
        <ul>
          <li>Breakfast: Boiled eggs & whole grain toast</li>
          <li>Lunch: Grilled chicken breast, brown rice, mixed salad</li>
          <li>Snack: Greek yogurt or handful of nuts</li>
          <li>Dinner: Fish curry or chicken stir fry with vegetables</li>
        </ul>
      </section>

      <section>
        <h3>🏃 Exercise Recommendations</h3>
        <ul>
          <li>30 min brisk walk or cycling daily</li>
          <li>Strength training 2-3 times per week</li>
          <li>Stretching or yoga for flexibility & stress relief</li>
        </ul>
      </section>

      <section>
        <h3>✅ Tips & Precautions</h3>
        <ul>
          <li>Stay hydrated: drink at least 6–8 glasses of water daily</li>
          <li>Avoid skipping meals</li>
          <li>Consult a doctor before starting new exercise if you have medical conditions</li>
          <li>Balance your diet with protein, carbs & healthy fats</li>
        </ul>
      </section>

      


      <section>
        <h3>More info</h3>
        <a className="diet-link" href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet" target="_blank" rel="noopener noreferrer">WHO: Nutrition and Health</a>
        <br/>
        <a className="diet-link" href="https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eating-a-balanced-diet/" target="_blank">Balanced diet</a>
         
      </section>
    </div>
  );
}
