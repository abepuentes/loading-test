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
      <strong style={{ color: "orange" }}>{t("import1")}</strong>
      <div className={styles.card}>
        <Link href="/same">{`TO PAGE`}</Link>
        <span>{`->`}</span>
      </div>
      <br />
      <br />
      <br />
      <strong style={{ color: "purple" }}>{t("import2")}</strong>
      <div className={styles.card}>
        <Link href="/different">{`TO PAGE`}</Link>
        <span>{`->`}</span>
      </div>
    </main>
  );
}
