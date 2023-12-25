import Header from "./components/Header";
import Card from "./components/Card";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        <Card />
      </div>
    </main>
  );
}
