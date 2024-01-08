import React, { useEffect, useState } from "react";
import styles from "./ThemeSwitch.module.scss";

const ThemeSwitch = () => {
  const [ischecked, setChecked] = useState(true);

  const changeTheme = () => {
    if (ischecked) {
      root.style.setProperty("--bg-color", "#1d1d1d");
      root.style.setProperty("--bg-secondary-color", "#282828");
      root.style.setProperty("--text-primary", "#dddddd");
    } else {
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--bg-secondary-color", "#f8f7f1");
      root.style.setProperty("--text-primary", "#0d2f3f");
    }
  };

  useEffect(() => {
    changeTheme();
  }, [ischecked]);

  return (
    <div class="switch">
      <input
        type="checkbox"
        class={styles.switch__input}
        id="Switch"
        onChange={() => {
          setChecked(!ischecked);
          changeTheme();
        }}
      />
      <label class={styles.switch__label} for="Switch">
        <span class={styles.switch__indicator}></span>
        <span class={styles.switch__decoration}></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
