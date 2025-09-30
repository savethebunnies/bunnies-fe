import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { RABBIT } from "@/constant/query-keys";
import AdoptionDetail from "../_sections/adoption-detail";
import { getRabbitById } from "@/libs/api/get";

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
      <AdoptionDetail id={id} />
    </HydrationBoundary>
  );
}
