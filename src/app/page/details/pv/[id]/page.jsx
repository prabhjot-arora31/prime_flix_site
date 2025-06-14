import baseUrl from "@/app/page/constants/baseUrl";
import PrimeVideoDetailsClient from "./PrimeVideoDetailsClient";

export default async function DetailsPage({ params }) {
  const res = await fetch(`${baseUrl}/api/prime-video-details/${params.id}`);
  if (!res.ok) throw new Error("Failed to fetch details");
  const json = await res.json();
  console.log(json);

  return (
    <PrimeVideoDetailsClient
      details={json.details}
      episodes={json.episodes}
      id={params.id}
    />
  );
}
