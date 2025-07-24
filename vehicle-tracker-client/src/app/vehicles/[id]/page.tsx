import VehicleDetailPage from "@/app/components/VehicleDetailPage";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return <VehicleDetailPage id={id} />;
}