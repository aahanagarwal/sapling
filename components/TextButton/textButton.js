import styles from "./index.module.scss";

const TextButton = ({ children, onClick, disabled }) => {
  return (
    <button className={styles.textButton} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default TextButton;
