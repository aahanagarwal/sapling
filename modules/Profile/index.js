import styles from "./index.module.scss";
import PageStyles from "../../styles/pages/index.module.scss";
import TextField from "../../components/TextField";
import { useState } from "react";
import cx from "classnames";

export default function Content() {
  const [name, setName] = useState("Arnav");
  const [surname, setSurname] = useState("Bansal");
  const [email, setEmail] = useState("maihundoremon@disney.xyz");

  return (
    <div className={cx(PageStyles.content, styles.page)}>
      <div className={PageStyles.content__title}>Profile</div>
      <div className={PageStyles.content__center}>
        <div className={styles.profile}>
          <div className={styles.profile__picture}>
            <img
              src={
                "https://media.discordapp.net/attachments/918218224103997487/999730063169822770/unknown.png"
              }
            />
          </div>
        </div>

        <div className={styles.profile__data}>
          <div className={styles.profile__data__row}>
            <TextField label={"Name"} value={name} setValue={setName} />
            <TextField
              label={"Surname"}
              value={surname}
              setValue={setSurname}
            />
          </div>
          <div className={styles.profile__data__row}>
            <TextField label={"Name"} value={email} setValue={setEmail} />
          </div>
        </div>
      </div>
    </div>
  );
}
