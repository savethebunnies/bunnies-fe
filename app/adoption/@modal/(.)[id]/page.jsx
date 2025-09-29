import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import AdoptionDetailModal from "../../_sections/adoption-detail-modal";
import { getRabbitById } from "@/libs/api/get";
import { RABBIT } from "@/constant/query-keys";

export default async function Page({ params }) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [RABBIT, id],
    queryFn: () => getRabbitById({ id }),
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <AdoptionDetailModal id={id} />;
    </HydrationBoundary>
  );
}
