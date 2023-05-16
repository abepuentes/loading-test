import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default async function Page() {
  const data = await getData();
  const rndInt = randomIntFromInterval(1, data.results.length - 1);

  return <div className={styles.container}>{data.results[rndInt].name}</div>;
}
