"use client"

import styles from "./page.module.css";
import { Main } from "./starwars-ui/main-component";


export default function Home() {
  return (
    <div className={styles.bodyMain}>
      <Main/>
    </div>
  );
}
