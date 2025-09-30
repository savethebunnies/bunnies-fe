import { ADOPTABLE, RABBITS } from "@/constant/query-keys";
import { getAvailableRabbits } from "@/libs/api/get";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function Layout({ children, modal }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [RABBITS, ADOPTABLE],
    queryFn: getAvailableRabbits,
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      {children}
      {modal}
    </HydrationBoundary>
  );
}
