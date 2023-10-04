import ConferenceById from "@/components/screens/conference/by-id/ConferenceById";

type Props = {
  params: { id: string };
};
export default function ConferencePage({ params }: Props) {
  console.log(params);
  return <ConferenceById params={params} />;
}
