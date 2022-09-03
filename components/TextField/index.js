import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { Ref, useEffect, useState } from "react";
const cx = classNames.bind(styles);
export default function TextField({
  className,
  label,
  value,
  setValue,
  type,
  textarea,
  passRef,
  disabled,
  onChange,
}) {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (value !== undefined || value !== null || value !== "") {
      setIsFocused(true);
    }
  }, []);
  return (
    <label
      className={cx(className, {
        [styles.container]: true,
      })}
    >
      <span
        className={cx({
          [styles.label]: true,
          [styles["label--focused"]]: isFocused,
        })}
      >
        {label}
      </span>

      <span
        className={cx({
          [styles.count]: true,
        })}
      ></span>
      {textarea ? (
        <textarea
          ref={passRef}
          value={value}
          disabled={disabled}
          onChange={(e) => {
            onChange ? onChange(e) : null;
            setValue ? setValue(e.target.value) : null;
          }}
          className={cx({
            [styles.textfield]: true,
            [styles["textfield--focused"]]: isFocused,
          })}
          onFocus={(e) => {
            setIsFocused(true);
          }}
          onBlur={(e) => {
            if (e.target.value !== "" || e.target.value.trim() !== "") {
              return;
            }
            setIsFocused(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsFocused(false);
            }
          }}
        />
      ) : (
        <input
          ref={passRef}
          className={cx({
            [styles.textfield]: true,
            [styles["textfield--focused"]]: isFocused,
          })}
          type={type}
          value={value}
          disabled={disabled}
          onChange={(e) => {
            onChange ? onChange(e) : null;
            setValue ? setValue(e.target.value) : null;
          }}
          onFocus={(e) => {
            setIsFocused(true);
          }}
          onBlur={(e) => {
            if (e.target.value !== "" || e.target.value.trim() !== "") {
              return;
            }
            setIsFocused(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setIsFocused(false);
            }
          }}
        />
      )}
    </label>
  );
}
