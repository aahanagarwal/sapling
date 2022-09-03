import styles from "./index.module.scss";
import PageStyles from "../../styles/pages/index.module.scss";
import { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import Button from "../../components/Button";
import { Icon } from "@iconify/react";
import { Popup, useOnClickOutside } from "../../components/Popup";

const cx = classNames.bind(styles);

export default function Content() {
  const [drones, setDrones] = useState([]);
  const [smartSeeds, setSmartSeeds] = useState([]);

  useEffect(() => {
    setDrones([
      {
        name: "FarmAir 3",
        image:
          "https://media.discordapp.net/attachments/995999238771191808/1001169326419755069/FarmAir.png?width=350&height=150",
        status: "Online",
        battery: "medium",
      },
      {
        name: "FarmAir 3",
        image:
          "https://media.discordapp.net/attachments/995999238771191808/1001169326419755069/FarmAir.png?width=350&height=150",
        status: "Offline",
        battery: "low",
      },
      {
        name: "FarmAir 3",
        image:
          "https://media.discordapp.net/attachments/995999238771191808/1001169326419755069/FarmAir.png?width=350&height=150",
        battery: "full",
        status: "Offline",
      },
    ]);

    setSmartSeeds([
      {
        name: "SmartSeed 2",
        image:
          "https://media.discordapp.net/attachments/995999238771191808/1001172334658461816/SmartSeed.png?width=150&height=150",
        status: "Offline",
        battery: "full",
      },
      {
        name: "SmartSeed 2",
        image:
          "https://media.discordapp.net/attachments/995999238771191808/1001172334658461816/SmartSeed.png?width=150&height=150",
        battery: "medium",
        status: "Online",
      },
    ]);
  }, []);

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
      <div className={PageStyles.content__description}>
        Here’s a list of the devices connected to Sapling. You can monitor the
        battery levels, performance ratings and more.
      </div>

      <div className={PageStyles.content__section}>
        <div className={PageStyles.content__section__title}>Drones</div>
        <div className={PageStyles.content__section__content}>
          {drones.map((drone, index) => {
            return (
              <div className={styles.device}>
                <div className={styles.device__picture}>
                  <img src={drone.image} />
                </div>
                <div className={styles.device__name}>{drone.name}</div>
                <div className={styles.device__status}>
                  {drone.status === "Online" ? (
                    <Icon icon={"bi:wifi"} width={24} />
                  ) : (
                    <Icon icon={"bi:wifi-off"} width={24} />
                  )}
                  <div
                    className={styles.device__status__text}
                    style={{
                      color:
                        drone.status === "Online"
                          ? "var(--primary)"
                          : "var(--apple-red)",
                    }}
                  >
                    {drone.status}
                  </div>
                  {drone.battery === "low" ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 9C0 8.20435 0.316071 7.44129 0.87868 6.87868C1.44129 6.31607 2.20435 6 3 6H18C18.7956 6 19.5587 6.31607 20.1213 6.87868C20.6839 7.44129 21 8.20435 21 9V15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V9ZM3 7.5C2.60218 7.5 2.22064 7.65804 1.93934 7.93934C1.65804 8.22064 1.5 8.60218 1.5 9V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H18C18.3978 16.5 18.7794 16.342 19.0607 16.0607C19.342 15.7794 19.5 15.3978 19.5 15V9C19.5 8.60218 19.342 8.22064 19.0607 7.93934C18.7794 7.65804 18.3978 7.5 18 7.5H3ZM24 12C24 12.5967 23.7629 13.169 23.341 13.591C22.919 14.0129 22.3467 14.25 21.75 14.25V9.75C22.3467 9.75 22.919 9.98705 23.341 10.409C23.7629 10.831 24 11.4033 24 12Z"
                        fill="#111111"
                      />
                    </svg>
                  ) : drone.battery === "medium" ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_104_15)">
                        <path
                          d="M3.5 10.5H12.25V17.5H3.5V10.5Z"
                          fill="#e5af1b"
                        />
                        <path
                          d="M3.5 7C2.57174 7 1.6815 7.36875 1.02513 8.02513C0.368749 8.6815 0 9.57174 0 10.5L0 17.5C0 18.4283 0.368749 19.3185 1.02513 19.9749C1.6815 20.6313 2.57174 21 3.5 21H21C21.9283 21 22.8185 20.6313 23.4749 19.9749C24.1313 19.3185 24.5 18.4283 24.5 17.5V10.5C24.5 9.57174 24.1313 8.6815 23.4749 8.02513C22.8185 7.36875 21.9283 7 21 7H3.5ZM21 8.75C21.4641 8.75 21.9092 8.93437 22.2374 9.26256C22.5656 9.59075 22.75 10.0359 22.75 10.5V17.5C22.75 17.9641 22.5656 18.4092 22.2374 18.7374C21.9092 19.0656 21.4641 19.25 21 19.25H3.5C3.03587 19.25 2.59075 19.0656 2.26256 18.7374C1.93437 18.4092 1.75 17.9641 1.75 17.5V10.5C1.75 10.0359 1.93437 9.59075 2.26256 9.26256C2.59075 8.93437 3.03587 8.75 3.5 8.75H21ZM28 14C28 14.6962 27.7234 15.3639 27.2312 15.8562C26.7389 16.3484 26.0712 16.625 25.375 16.625V11.375C26.0712 11.375 26.7389 11.6516 27.2312 12.1438C27.7234 12.6361 28 13.3038 28 14Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_104_15">
                          <rect width="28" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_143_9)">
                        <path d="M3 9H18V15H3V9Z" fill="#9BD788" />
                        <path
                          d="M3 6C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.316071 7.44129 0 8.20435 0 9L0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15V9C21 8.20435 20.6839 7.44129 20.1213 6.87868C19.5587 6.31607 18.7956 6 18 6H3ZM18 7.5C18.3978 7.5 18.7794 7.65804 19.0607 7.93934C19.342 8.22064 19.5 8.60218 19.5 9V15C19.5 15.3978 19.342 15.7794 19.0607 16.0607C18.7794 16.342 18.3978 16.5 18 16.5H3C2.60218 16.5 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3978 1.5 15V9C1.5 8.60218 1.65804 8.22064 1.93934 7.93934C2.22064 7.65804 2.60218 7.5 3 7.5H18ZM24 12C24 12.5967 23.7629 13.169 23.341 13.591C22.919 14.0129 22.3467 14.25 21.75 14.25V9.75C22.3467 9.75 22.919 9.98705 23.341 10.409C23.7629 10.831 24 11.4033 24 12Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_143_9">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={PageStyles.content__section}>
        <div className={PageStyles.content__section__title}>Seeds</div>
        <div className={PageStyles.content__section__content}>
          {smartSeeds.map((seed, index) => {
            return (
              <div className={styles.device}>
                <div className={styles.device__picture}>
                  <img src={seed.image} />
                </div>
                <div className={styles.device__name}>{seed.name}</div>
                <div className={styles.device__status}>
                  {seed.status === "Online" ? (
                    <Icon icon={"bi:wifi"} width={24} />
                  ) : (
                    <Icon icon={"bi:wifi-off"} width={24} />
                  )}
                  <div
                    className={styles.device__status__text}
                    style={{
                      color:
                        seed.status === "Online"
                          ? "var(--primary)"
                          : "var(--apple-red)",
                    }}
                  >
                    {seed.status}
                  </div>
                  {seed.battery === "low" ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 9C0 8.20435 0.316071 7.44129 0.87868 6.87868C1.44129 6.31607 2.20435 6 3 6H18C18.7956 6 19.5587 6.31607 20.1213 6.87868C20.6839 7.44129 21 8.20435 21 9V15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V9ZM3 7.5C2.60218 7.5 2.22064 7.65804 1.93934 7.93934C1.65804 8.22064 1.5 8.60218 1.5 9V15C1.5 15.3978 1.65804 15.7794 1.93934 16.0607C2.22064 16.342 2.60218 16.5 3 16.5H18C18.3978 16.5 18.7794 16.342 19.0607 16.0607C19.342 15.7794 19.5 15.3978 19.5 15V9C19.5 8.60218 19.342 8.22064 19.0607 7.93934C18.7794 7.65804 18.3978 7.5 18 7.5H3ZM24 12C24 12.5967 23.7629 13.169 23.341 13.591C22.919 14.0129 22.3467 14.25 21.75 14.25V9.75C22.3467 9.75 22.919 9.98705 23.341 10.409C23.7629 10.831 24 11.4033 24 12Z"
                        fill="#111111"
                      />
                    </svg>
                  ) : seed.battery === "medium" ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_104_15)">
                        <path
                          d="M3.5 10.5H12.25V17.5H3.5V10.5Z"
                          fill="#e5af1b"
                        />
                        <path
                          d="M3.5 7C2.57174 7 1.6815 7.36875 1.02513 8.02513C0.368749 8.6815 0 9.57174 0 10.5L0 17.5C0 18.4283 0.368749 19.3185 1.02513 19.9749C1.6815 20.6313 2.57174 21 3.5 21H21C21.9283 21 22.8185 20.6313 23.4749 19.9749C24.1313 19.3185 24.5 18.4283 24.5 17.5V10.5C24.5 9.57174 24.1313 8.6815 23.4749 8.02513C22.8185 7.36875 21.9283 7 21 7H3.5ZM21 8.75C21.4641 8.75 21.9092 8.93437 22.2374 9.26256C22.5656 9.59075 22.75 10.0359 22.75 10.5V17.5C22.75 17.9641 22.5656 18.4092 22.2374 18.7374C21.9092 19.0656 21.4641 19.25 21 19.25H3.5C3.03587 19.25 2.59075 19.0656 2.26256 18.7374C1.93437 18.4092 1.75 17.9641 1.75 17.5V10.5C1.75 10.0359 1.93437 9.59075 2.26256 9.26256C2.59075 8.93437 3.03587 8.75 3.5 8.75H21ZM28 14C28 14.6962 27.7234 15.3639 27.2312 15.8562C26.7389 16.3484 26.0712 16.625 25.375 16.625V11.375C26.0712 11.375 26.7389 11.6516 27.2312 12.1438C27.7234 12.6361 28 13.3038 28 14Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_104_15">
                          <rect width="28" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_143_9)">
                        <path d="M3 9H18V15H3V9Z" fill="#9BD788" />
                        <path
                          d="M3 6C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.316071 7.44129 0 8.20435 0 9L0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15V9C21 8.20435 20.6839 7.44129 20.1213 6.87868C19.5587 6.31607 18.7956 6 18 6H3ZM18 7.5C18.3978 7.5 18.7794 7.65804 19.0607 7.93934C19.342 8.22064 19.5 8.60218 19.5 9V15C19.5 15.3978 19.342 15.7794 19.0607 16.0607C18.7794 16.342 18.3978 16.5 18 16.5H3C2.60218 16.5 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3978 1.5 15V9C1.5 8.60218 1.65804 8.22064 1.93934 7.93934C2.22064 7.65804 2.60218 7.5 3 7.5H18ZM24 12C24 12.5967 23.7629 13.169 23.341 13.591C22.919 14.0129 22.3467 14.25 21.75 14.25V9.75C22.3467 9.75 22.919 9.98705 23.341 10.409C23.7629 10.831 24 11.4033 24 12Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_143_9">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
