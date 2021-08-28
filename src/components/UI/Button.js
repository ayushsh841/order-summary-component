import classes from './Button.module.css';

const Button = props => {

  return <button 
          type='button'
          className={props.isPrimary.toLowerCase() === 'true' ? classes.button__primary : classes.button__secondary}>
            {props.text}
          </button>;
}

export default Button;