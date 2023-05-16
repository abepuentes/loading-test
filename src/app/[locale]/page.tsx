import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Link href="/items">{`TO ITEMS ->`}</Link>
      </div>
    </main>
  );
}
