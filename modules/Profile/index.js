import styles from "./index.module.scss";
import PageStyles from "../../styles/pages/index.module.scss";

export default function Content() {
  return (
    <div className={PageStyles.content}>
      <div className={PageStyles.content__title}>Profile</div>
      <div className={PageStyles.content__center}>
        <div className={styles.profile}>
          <div className={styles.profile__picture}>
            <img
              src={
                "https://media.discordapp.net/attachments/866329183184748584/999274097970270278/unknown.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
