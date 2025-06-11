// in Home.jsx or another page
import HorizontalRow from "@/components/HorizontalRow";
import data from "@/data/prime_video_data.json";

export default function Home() {
  return (
    <main className="p-4">
      {data.post.map((row, idx) => (
        <HorizontalRow
          key={idx}
          title={row.cate}
          items={row}
          source="primevideo"
        />
      ))}
    </main>
  );
}
