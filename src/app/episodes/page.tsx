import {
  GetEpisodesDocument,
  type GetEpisodesQuery,
  type GetEpisodesQueryVariables,
} from "@/graphql/__generated__";
import { query } from "@/lib/apollo-client";
import { type searchParams } from "@/types/searchParams.type";
import Link from "next/link";
import Pagination from "@/components/pagination";

export default async function EpisodesPage({ searchParams }: { searchParams: searchParams }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const {
    data: { episodes },
  } = await query<GetEpisodesQuery, GetEpisodesQueryVariables>({
    query: GetEpisodesDocument,
    variables: {
      page,
    },
  });
  return (
    <div className="container max-w-2xl mx-auto px-4 mt-4">
      <div className="flex flex-wrap items-center justify-between p-4 mb-6 rounded-2xl border border-gray-700/50 ">
        <h1 className="text-blue-400 font-semibold text-2xl">Episodes</h1>
      </div>

      <ul className="mb-6 rounded-2xl border border-gray-700/50 not-last:border-b">
        {episodes?.results?.map((episode) => (
          <li key={episode?.id} className="group/item not-last:border-b border-gray-700/50">
            <Link href={`/episodes/${episode?.id}`}>
              <div className="p-4">
                <h3 className="text-blue-300 group-hover/item:text-blue-400 transition-all duration-300">
                  {episode?.name}
                </h3>
                <p className="text-sm text-white/70">
                  {episode?.episode} - {episode?.air_date}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination totalPages={episodes?.info?.pages || 0} accentColor={"bg-blue-400"} />
    </div>
  );
}
