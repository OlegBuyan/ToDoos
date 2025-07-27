import styles from "./component.module.css";
import clsx from "clsx";
export const Button = ({ type, children, onClick, className, disabled }) => {
  return (
    <button
      className={clsx(styles.sharedBtn, className)}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
