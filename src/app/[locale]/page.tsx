import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations("Page");
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
      <strong>{t("home")}</strong>
      <div className={styles.card}>
        <Link href="/items">{`TO ITEMS ->`}</Link>
      </div>
    </main>
  );
}
