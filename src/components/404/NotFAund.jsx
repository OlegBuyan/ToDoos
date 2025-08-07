import styles from "./notFaund.module.css";
import { useNavigate } from "react-router-dom";

export const NotFaund = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={styles.backWard}
        onClick={() => navigate("/", { replace: true })}
      >
        Вернуться на главную
      </div>
      <div className={styles.notFaund}>404 NOT Faund :(</div>;
    </>
  );
};
