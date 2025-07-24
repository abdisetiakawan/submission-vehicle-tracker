import VehicleDetailPage from "../../components/VehicleDetailPage";

interface PageProps {
  params: {
    id: string;
  };
}

export default function VehicleDetail({ params }: PageProps) {
  return <VehicleDetailPage id={params.id} />;
}

export async function generateStaticParams() {
  return Array.from({ length: 6 }, (_, i) => ({
    id: (i + 1).toString(),
  }));
}
