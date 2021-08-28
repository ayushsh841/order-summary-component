import './App.css';
import OrderSummary from './components/Order/OrderSummary';
import Card from './components/UI/Card';

function App() {
  return (
    <div className="App">
      <Card>
        <OrderSummary></OrderSummary>
      </Card>

      <a href="https://github.com/ayushsh841/order-summary-component">Source Code</a>
    </div>
  );
}

export default App;
