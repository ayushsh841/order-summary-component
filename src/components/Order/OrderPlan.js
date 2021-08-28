import classes from './OrderPlan.module.css';
import musicIcon from '../../assets/icon-music.svg';

const OrderPlan = () => {
  
  return (
    <div className={classes.plan__container}>
      <img src={musicIcon} alt='music tone' />
      <div className={classes.plan__description}>
        <span>Annual Plan</span>
        <span>$59.99/year</span>
      </div>
      <button type='button'>Change</button>
    </div>
  );
}

export default OrderPlan;