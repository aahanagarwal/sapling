import styles from "./index.module.scss";
import PageStyles from "../../styles/pages/index.module.scss";
import { useState } from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Content() {
  const [devices, setDevices] = useState([
    {
      name: "FarmAir 3",
      type: "Drones",
      image:
        "https://media.discordapp.net/attachments/995999238771191808/1000793650642550914/dronesketch.png?width=759&height=427",
    },
    {
      name: "FarmAir 3",
      type: "Drones",
      image:
        "https://media.discordapp.net/attachments/995999238771191808/1000793650642550914/dronesketch.png?width=759&height=427",
    },
  ]);

  return (
    <div className={cx(PageStyles.content, styles.page)}>
      <div className={PageStyles.content__title}>My Devices</div>
    </div>
  );
}
