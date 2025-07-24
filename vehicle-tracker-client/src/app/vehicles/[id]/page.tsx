import VehicleDetailPage from "@/app/components/VehicleDetailPage";

type PageProps = {
  params: { id: string };
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return <VehicleDetailPage id={id} />;
}
