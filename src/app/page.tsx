import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const locale = "es";
  return (
    <main
      className={styles.main}
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <div className={styles.card}>
        <Link href={`/${locale}`}>
          <h2>
            {`Link to dynamic route `}
            <span>{`->`}</span>
          </h2>
        </Link>
      </div>
    </main>
  );
}
