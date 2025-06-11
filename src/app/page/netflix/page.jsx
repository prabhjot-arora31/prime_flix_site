import HorizontalRow from "@/components/HorizontalRow";
import data from "@/data/netflix.json"; // your content source

export default function Home() {
  return (
    <main className="p-4">
      {data.data.map((row, idx) => (
        <HorizontalRow key={idx} title={row.title} items={row.list} />
      ))}
    </main>
  );
}
