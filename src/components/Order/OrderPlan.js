import classes from './OrderPlan.module.css';
import musicIcon from '../../assets/icon-music.svg';

const OrderPlan = () => {
  
  return (
    <div className={classes.plan__container}>
      <div className={classes.plan__inner_container}>
        <img src={musicIcon} alt='music tone' />
        <div className={classes.plan__description}>
          <span>Annual Plan</span>
          <span>$59.99/year</span>
        </div>
      </div>
      <button type='button'>Change</button>
    </div>
  );
}

export default OrderPlan;