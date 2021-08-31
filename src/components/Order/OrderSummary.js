import classes from './OrderSummary.module.css';
import Hero from '../../assets/illustration-hero.svg';
import OrderPlan from './OrderPlan';
import Button from '../UI/Button';

const OrderSummary = props => {

  return (
    <div className={classes.summary__container}>
      <div>
        <img src={Hero} className={classes.summary__img} alt="" />        
      </div>
      <div className={classes.summary__text}>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <OrderPlan />
      <div className={classes.summary__button_container}>
        <Button text='Proceed to Payment' isPrimary='true' />
        <Button text='Cancel Order' isPrimary='false' />
      </div>
    </div>
  );
};

export default OrderSummary;