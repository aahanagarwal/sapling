import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Button = ({ children, onClick, disabled, altClass }) => {
  return (
    <button
      className={cx(styles.button, altClass)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
