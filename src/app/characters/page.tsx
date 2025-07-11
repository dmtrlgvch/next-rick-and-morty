import CharactersInfiniteList from "@/components/characters-infinite-list";
import SearchInput from "@/components/search-input";
import { PreloadQuery } from "@/lib/apollo-client";
import { GetCharactersDocument } from "@/graphql/__generated__";
import { type GetCharactersQuery, type GetCharactersQueryVariables } from "@/graphql/__generated__";
import { type searchParams } from "@/types/searchParams.type";

export default async function CharactersPage({ searchParams }: { searchParams: searchParams }) {
  const params = await searchParams;
  const queryParam = params.query || "";

  return (
    <div className="container max-w-2xl mx-auto px-4 mt-4">
      <div className="flex flex-wrap items-center justify-between p-4 mb-6 rounded-2xl border border-gray-700/50 ">
        <h1 className="text-2xl text-green-400 font-semibold">Characters</h1>
        <SearchInput />
      </div>

      <PreloadQuery<GetCharactersQuery, GetCharactersQueryVariables>
        query={GetCharactersDocument}
        variables={{
          page: 1,
          filter: {
            name: queryParam,
          },
        }}
      >
        {(queryRef) => <CharactersInfiniteList queryRef={queryRef} />}
      </PreloadQuery>
    </div>
  );
}
