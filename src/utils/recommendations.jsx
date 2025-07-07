// utils/recommendations.js
export function getRecommendations(bmi) {
  if (bmi < 16.0) {
    return {
      diet: [
        "Eat calorie-dense foods: nuts, seeds, dairy, and healthy oils",
        "Add smoothies and shakes to increase calories",
        "Frequent balanced meals"
      ],
      exercise: [
        "Focus on light strength training to build muscle",
        "Avoid excessive cardio"
      ]
    };
  } else if (bmi < 18.5) {
    return {
      diet: [
        "Increase calorie intake with healthy carbs and proteins",
        "Eat more meals/snacks throughout the day"
      ],
      exercise: [
        "Strength training to promote healthy weight gain",
        "Gentle cardio"
      ]
    };
  } else if (bmi < 25) {
    return {
      diet: [
        "Balanced diet with whole grains, lean protein, fruits, and veggies",
        "Stay hydrated"
      ],
      exercise: [
        "Mix of cardio and strength training",
        "30 min brisk walk daily"
      ]
    };
  } else if (bmi < 30) {
    return {
      diet: [
        "Focus on portion control",
        "More vegetables and fiber-rich foods",
        "Limit sugar and processed foods"
      ],
      exercise: [
        "Increase daily cardio: brisk walking, cycling",
        "Add strength training 2-3 times per week"
      ]
    };
  } else {
    return {
      diet: [
        "Consult a dietitian for personalized plan",
        "Eat more whole foods, reduce refined carbs",
        "Control calorie intake"
      ],
      exercise: [
        "Low-impact cardio (walking, swimming)",
        "Strength training under supervision"
      ]
    };
  }
}
