import styles from "./index.module.scss";
import PageStyles from "../../styles/pages/index.module.scss";
import { useState } from "react";
import cx from "classnames";

export default function Content() {
  const _ = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  let _randomNumber = Math.ceil(Math.random() * 20);

  let _farmBlockData = {
    nitrogenContent: Math.ceil(Math.random() * 100),
    water: Math.ceil(Math.random() * 100),
    organicMatter: Math.ceil(Math.random() * 100),
    timeline: [
      {
        activity: "Land tilled",
        date: Date.UTC(2022, 6, _randomNumber, 10, 45, 0, 0),
      },
      {
        activity: "Seed Sown",
        date: Date.UTC(2022, 6, _randomNumber + 2, 12, 0, 0, 0),
      },
      {
        activity: "Fertilizer used",
        date: Date.UTC(2022, 6, _randomNumber + 6, 11, 15, 0, 0),
      },
      {
        activity: "Harvesting",
        date: Date.UTC(2022, 6, _randomNumber + 10, 9, 30, 0, 0),
      },
    ],
  };

  const [farmData, setFarmData] = useState(_farmBlockData);
  const [activeBlock, setActiveBlock] = useState(13);

  return (
    <div className={PageStyles.content}>
      <div className={PageStyles.content__title}>My Field</div>

      <div className={styles.farmView}>
        {_.map((_blockId) => {
          return (
            <img
              src="/farm_block.png"
              key={_blockId}
              className={cx(
                styles.farmView__farmBlock,
                _blockId == activeBlock
                  ? styles.farmView__farmBlock__active
                  : ""
              )}
              onClick={() => {
                console.log(farmData);
                setFarmData(_farmBlockData);
                setActiveBlock(_blockId);
              }}
            />
          );
        })}
      </div>

      <div className={styles.farmBlockDetails}>
        <div className={styles.farmBlockDetails__metrics}>
          <div
            className={cx(
              PageStyles.content__content,
              styles.farmBlockDetails__metrics__data
            )}
          >
            <span> Nitrogenus Content: </span>
            <span
              style={{
                color:
                  farmData.nitrogenContent > 66
                    ? "var(--leaf-green)"
                    : farmData.nitrogenContent > 33
                    ? "var(--lemon-yellow)"
                    : "var(--apple-red)",
              }}
            >
              {farmData.nitrogenContent} mg/kg
            </span>
          </div>
          <div
            className={cx(
              PageStyles.content__content,
              styles.farmBlockDetails__metrics__data
            )}
          >
            <span>Soil Organic Matter (SOM): </span>
            <span
              style={{
                color:
                  farmData.organicMatter > 66
                    ? "var(--leaf-green)"
                    : farmData.organicMatter > 33
                    ? "var(--lemon-yellow)"
                    : "var(--apple-red)",
              }}
            >
              {farmData.organicMatter}%
            </span>
          </div>
          <div
            className={cx(
              PageStyles.content__content,
              styles.farmBlockDetails__metrics__data
            )}
          >
            <span>Water: </span>
            <span
              style={{
                color:
                  farmData.water > 66
                    ? "var(--leaf-green)"
                    : farmData.water > 33
                    ? "var(--lemon-yellow)"
                    : "var(--apple-red)",
              }}
            >
              {farmData.water} Pa
            </span>
          </div>
        </div>

        <div className={styles.farmBlockDetails__timeline}>
          {farmData.timeline.map((_timelineEvent) => {
            const _date = new Date(_timelineEvent.date);

            if (_date > Date.now()) {
              return (
                <div
                  className={cx(
                    styles.farmBlockDetails__timeline__event,
                    styles.farmBlockDetails__timeline__event__future
                  )}
                >
                  <img src="/timeline_graphic.svg" />
                  <div
                    className={styles.farmBlockDetails__timeline__event__data}
                  >
                    <div
                      className={PageStyles.content__content}
                      style={{ marginBottom: 0 + "px !important" }}
                    >
                      {_timelineEvent.activity}
                    </div>
                    <div className={PageStyles.content__paragraph}>
                      {_date.toLocaleDateString()}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className={styles.farmBlockDetails__timeline__event}>
                  <img src="/timeline_graphic.svg" />
                  <div
                    className={styles.farmBlockDetails__timeline__event__data}
                  >
                    <div
                      className={PageStyles.content__content}
                      style={{ marginBottom: 0 + "px !important" }}
                    >
                      {_timelineEvent.activity}
                    </div>
                    <div className={PageStyles.content__paragraph}>
                      {_date.toLocaleDateString()}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
