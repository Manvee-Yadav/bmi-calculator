import { jsPDF } from "jspdf";
import { useBmiStore } from "../store/bmiStore";
import { getRecommendations } from "../utils/recommendations";

export default function ExportReport() {
  const currentResult = useBmiStore(state => state.currentResult);
  const recommendations = currentResult ? getRecommendations(currentResult.bmi) : null;

  const handleDownload = () => {
    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(20);
    doc.setTextColor(70, 90, 173); // purple-blue
    doc.text(" BMI Health Report", 20, y);
    y += 12;

    if (currentResult) {
      // Reset text color for details
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);

      doc.text(`Name: ${currentResult.name}`, 20, y); y += 8;
      doc.text(`BMI: ${currentResult.bmi}`, 20, y); y += 8;
      doc.text(`Height: ${currentResult.height} ${currentResult.heightUnit}`, 20, y); y += 8;
      doc.text(`Weight: ${currentResult.weight} ${currentResult.weightUnit}`, 20, y); y += 12;

      // Add separator line
      doc.setDrawColor(102, 126, 234); // same purple-blue
      doc.line(20, y, 190, y); y += 6; //doc.line(x1, y1, x2, y2) draws a straight line from (x1, y1) to (x2, y2).

      // Diet section
      doc.setFontSize(14);
      doc.setTextColor(102, 126, 234);
      doc.text(" ^_^ Diet Recommendations:", 20, y); y += 8;

      doc.setFontSize(12);
      doc.setTextColor(50, 50, 50);
      recommendations.diet.forEach(item => { //Because you can’t write JSX or HTML inside a doc.text.  //add item individually
        doc.text(`• ${item}`, 25, y);
        y += 7;
      });

      y += 5;
      doc.line(20, y, 190, y); y += 6;

      // Exercise section
      doc.setFontSize(14);
      doc.setTextColor(102, 126, 234);
      doc.text(" >_< Exercise Recommendations:", 20, y); y += 8;

      doc.setFontSize(12);
      doc.setTextColor(50, 50, 50);
      recommendations.exercise.forEach(item => {
        doc.text(`• ${item}`, 25, y);
        y += 7;
      });

    }
    else {
      doc.text("No BMI data available.", 20, 40);
    }

    doc.save("bmi-report.pdf");
  };
  const handleShare = () => {
    if (!currentResult || !recommendations) return;

    const text = `
    🏋️‍♀️ My BMI Report:
    Name: ${currentResult.name}
    BMI: ${currentResult.bmi}
    Height: ${currentResult.height} ${currentResult.heightUnit}
    Weight: ${currentResult.weight} ${currentResult.weightUnit}

   🥗 Diet Recommendations:
    ${recommendations.diet.map(item => `- ${item}`).join('\n')}

   🤸‍♂️ Exercise Recommendations:
    ${recommendations.exercise.map(item => `- ${item}`).join('\n')} `;

    navigator.clipboard.writeText(text)
      .then(() => alert("✅ BMI report copied to clipboard!"))
      .catch(() => alert("❌ Failed to copy!"));
  };

  return (
    <div className='export'style={{ marginTop: "20px" }}>
      <button className='download'   onClick={handleDownload}>Download PDF</button>
      <button className='share' onClick={handleShare} style={{ marginLeft: "10px" }}>Share my BMI</button>
    </div>
  );
}