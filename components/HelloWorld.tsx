import styles from "../styles/HelloWorld.module.css";
import React, { FunctionComponent } from "react";

interface Props {
  name: string;
}

export const HelloWorld: FunctionComponent<Props> = ({ name }) => {
  return (
    <div className={styles.hello}>
      <p>Hello, {name}!</p>
    </div>
  );
};
