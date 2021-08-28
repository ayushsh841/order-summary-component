import './App.css';
import OrderSummary from './components/Order/OrderSummary';
import Card from './components/UI/Card';

function App() {
  return (
    <div className="App">
      <Card>
        <OrderSummary></OrderSummary>
      </Card>
    </div>
  );
}

export default App;
