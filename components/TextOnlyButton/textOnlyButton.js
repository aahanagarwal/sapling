import styles from "./index.module.scss";

const TextOnlyButton = ({ children, onClick, disabled }) => {
  return (
    <button
      className={styles.textOnlyButton}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default TextOnlyButton;
