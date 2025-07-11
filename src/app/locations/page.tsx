import {
  GetLocationsDocument,
  type GetLocationsQuery,
  type GetLocationsQueryVariables,
} from "@/graphql/__generated__";
import { query } from "@/lib/apollo-client";
import { type searchParams } from "@/types/searchParams.type";
import Link from "next/link";
import Pagination from "@/components/pagination";

export default async function EpisodesPage({ searchParams }: { searchParams: searchParams }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const {
    data: { locations },
  } = await query<GetLocationsQuery, GetLocationsQueryVariables>({
    query: GetLocationsDocument,
    variables: {
      page,
    },
  });
  return (
    <div className="container max-w-2xl mx-auto px-4 mt-4">
      <div className="flex flex-wrap items-center justify-between p-4 mb-6 rounded-2xl border border-gray-700/50 ">
        <h1 className="text-purple-400 font-semibold text-2xl">Locations</h1>
      </div>

      <ul className="mb-6 rounded-2xl border border-gray-700/50 not-last:border-b">
        {locations?.results?.map((location) => (
          <li key={location?.id} className="group/item not-last:border-b border-gray-700/50">
            <Link href={`/locations/${location?.id}`}>
              <div className="p-4">
                <h3 className="text-purple-300 group-hover/item:text-purple-400 transition-all duration-300">
                  {location?.name}
                </h3>
                <p className="text-sm text-white/70">
                  {location?.type} - {location?.dimension}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalPages={locations?.info?.pages || 0} accentColor={"bg-purple-400"} />
    </div>
  );
}
