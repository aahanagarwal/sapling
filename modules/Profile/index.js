import styles from "./index.module.scss";
import PageStyles from "../../styles/pages/index.module.scss";
import TextField from "../../components/TextField";
import { useState } from "react";

export default function Content() {
  const [name, setName] = useState("Arnav Bansal");

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

        <div className={styles.profile__data}>
          <div className={styles.profile__data__name}>
            <TextField label={"Name"} value={name} setValue={setName} />
          </div>
        </div>
      </div>
    </div>
  );
}
