import styles from "./index.module.scss";
import PageStyles from "../../styles/pages/index.module.scss";
import { useState, useRef } from "react";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { Icon } from "@iconify/react";
import { Popup, useOnClickOutside } from "../../components/Popup";

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

  const [popupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef();

  useOnClickOutside(popupRef, () => setPopupOpen(false));

  return (
    <div className={cx(PageStyles.content, styles.page)}>
      <div className={PageStyles.content__header}>
        <div className={PageStyles.content__header__title}>My Devices</div>
        <div className={PageStyles.content__header__action}>
          <Button
            altClass={PageStyles.content__header__action__button}
            onClick={() => {
              setPopupOpen(true);
            }}
          >
            <Icon icon={"ant-design:plus-outlined"} />
            Add Device
          </Button>
        </div>
      </div>
    </div>
  );
}
