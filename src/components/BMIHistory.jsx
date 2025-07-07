import { useBmiStore } from '../store/bmiStore';

export default function BMIHistory() {
  const history = useBmiStore(state => state.history);
  const clearHistory = useBmiStore(state => state.clearHistory);

  return (
    <div className='bmi-history'>
      <button onClick={clearHistory}>Clear History</button>
      {history.map((item, idx) => (
        <div key={idx}>
          <strong>{item.name}</strong> → BMI: {item.bmi} on {item.timestamp}
        </div>
      ))}
    </div>
  );
}
