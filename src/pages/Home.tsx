import getTMDBData from "@services/data.ts";

export default function Home() {
  console.log(getTMDBData());

  return <h1>Home Page</h1>;
}
