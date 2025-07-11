import CharacterCard from "@/components/character-card";
import {
  GetEpisodeDocument,
  type Character,
  type GetEpisodeQuery,
  type GetEpisodeQueryVariables,
} from "@/graphql/__generated__";
import { query } from "@/lib/apollo-client";
import { notFound } from "next/navigation";

export default async function EpisodePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const {
    data: { episode },
  } = await query<GetEpisodeQuery, GetEpisodeQueryVariables>({
    query: GetEpisodeDocument,
    variables: {
      id,
    },
  });

  if (!episode) return notFound();

  return (
    <div className="container max-w-2xl mx-auto px-4 mt-4">
      <div className="flex flex-wrap items-center justify-between p-4 mb-6 rounded-2xl border border-gray-700/50 ">
        <h1 className="text-blue-400 font-semibold text-2xl">{episode?.name}</h1>
        <p className="text-sm text-white/70">
          {episode?.episode} - {episode?.air_date}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {episode?.characters?.map((character) => (
          <CharacterCard key={character?.id} character={character as Character} />
        ))}
      </div>
    </div>
  );
}
