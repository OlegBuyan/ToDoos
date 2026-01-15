import styles from "./component.module.css";
import clsx from "clsx";

export const Input = ({
  type,
  name,
  value,
  htmlFor,
  onChange,
  children,
  className,
  required,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>{children}</label>
      <input
        required={required}
        placeholder={placeholder}
        className={clsx(styles.sharedInput, className)}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
