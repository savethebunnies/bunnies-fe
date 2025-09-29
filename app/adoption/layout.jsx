import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import getAvailableRabbits from "./_libs/get-available-rabbits";

export default async function Layout({ children, modal }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["rabbits", "adaptable"],
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
