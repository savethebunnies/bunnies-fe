import { dehydrate, QueryClient } from "@tanstack/react-query";

async function getAvailableRabbits() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/rabbits`, {
    next: { tags: ["rabbits", "adaptable"] },
  });
  if (!res.ok) {
    throw new Error(`Fail to fetch data: ${res.status}`);
  }

  return await res.json();
}
export default async function Adaption() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["rabbits", "adaptable"],
    queryFn: getAvailableRabbits,
  });
  const dehydratedState = dehydrate(queryClient);
  return <></>;
}
