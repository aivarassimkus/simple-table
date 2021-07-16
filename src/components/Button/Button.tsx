import './Button.scss';
import { ButtonProps } from 'components/Button/Button.types';

const Button: React.FC<ButtonProps> = ({ onClick, active, buttonText }) => (
    <button className={active ? 'button active' : 'button'} onClick={onClick}>
        {buttonText}
    </button>
);

export default Button;
