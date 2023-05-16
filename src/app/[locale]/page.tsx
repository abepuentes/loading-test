import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations("Page");
  return (
    <main className={styles.main}>
      {t("home")}
      <div className={styles.card}>
        <Link href="/items">{`TO ITEMS ->`}</Link>
      </div>
    </main>
  );
}
