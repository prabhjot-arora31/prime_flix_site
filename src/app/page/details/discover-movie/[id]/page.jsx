import DiscoverDetailsClient from "./DiscoverDetailsClient";

export default async function DetailsPage(props) {
  const { params } = props;
  const res = await fetch(
    `http://localhost:3000/api/discover-movie-details/${params.id}`
  );

  if (!res.ok) throw new Error("Failed to fetch details");
  const json = await res.json();
  console.log(json);

  return (
    <DiscoverDetailsClient
      details={json.details}
      episodes={json.episodes}
      id={params.id}
    />
  );
}
