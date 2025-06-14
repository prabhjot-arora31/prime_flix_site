import HorizontalRow from "@/components/HorizontalRow";

export default function Loading() {
  return (
    <>
      {[1, 2, 3, 4, 5].map(
        (row, idx) =>
          idx <= 3 && (
            <HorizontalRow key={idx} items={row} source="primevideo" />
          )
      )}
    </>
  );
}
