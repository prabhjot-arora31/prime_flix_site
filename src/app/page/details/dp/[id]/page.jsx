import baseUrl from "@/app/page/constants/baseUrl";
import DisneyPlusDetailsClient from "./DisneyPlusDetailsClient";

export default async function DetailsPage(props) {
  const { params } = props;
  const res = await fetch(`${baseUrl}/api/disney-plus-details/${params.id}`);

  if (!res.ok) throw new Error("Failed to fetch details");
  const json = await res.json();
  console.log(json);

  return (
    <DisneyPlusDetailsClient
      details={json.details}
      episodes={json.episodes}
      id={params.id}
    />
  );
}
