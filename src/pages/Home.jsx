import BMIForm from "../components/BMIForm";
import BMIResult from "../components/BMIResult";
import Header from "../components/Header";
import ExportReport from "../components/ExportReport";

export default function Home(){
    return(
    <div className="home-page">
      <Header title="Calculate your BMI" subtitle="Calculate your body mass index and track your health status"/>
      <BMIForm />
      <BMIResult />
      <ExportReport/>
    </div>
    );
}


