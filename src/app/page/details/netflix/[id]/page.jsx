import DetailsClient from "./NetflixDetailsClient";
import PrimeVideoDetailsClient from "../../pv/[id]/PrimeVideoDetailsClient";
import baseUrl from "@/app/page/constants/baseUrl";

export default async function DetailsPage({ params }) {
  const res = await fetch(`${baseUrl}/api/details/${params.id}`);

  if (!res.ok) throw new Error("Failed to fetch details");
  const json = await res.json();
  console.log(json);

  return (
    <DetailsClient
      details={json.details}
      episodes={json.episodes}
      id={params.id}
    />
  );
}
