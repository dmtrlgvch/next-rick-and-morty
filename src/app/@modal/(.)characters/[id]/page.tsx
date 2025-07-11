import { query } from "@/lib/apollo-client";
import Modal from "./modal";
import {
  GetCharacterDocument,
  GetCharacterQuery,
  GetCharacterQueryVariables,
} from "@/graphql/__generated__";
import Image from "next/image";
import { formatDate, getStatusColor } from "@/utils";

export default async function CharacterModal({ params }: { params: Promise<{ id: string }> }) {
  const characterId = (await params).id;
  const {
    data: { character },
  } = await query<GetCharacterQuery, GetCharacterQueryVariables>({
    query: GetCharacterDocument,
    variables: {
      id: characterId,
    },
  });

  return (
    <Modal>
      <div className="bg-gradient-to-br bg-black/75 p-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-8 border border-white/20 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="relative group">
                <Image
                  src={character?.image || ""}
                  alt={character?.name || ""}
                  width={200}
                  height={150}
                  className="w-64 h-64 rounded-2xl object-cover shadow-2xl border-4 border-white/30"
                />
                {character?.status ? (
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 ${getStatusColor(
                      character?.status
                    )} rounded-full border-4 border-white shadow-lg`}
                  ></div>
                ) : null}
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">{character?.name}</h1>
                  <div className="flex items-center gap-3 text-lg">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        character?.status === "Alive"
                          ? "bg-green-500/20 text-green-300"
                          : character?.status === "Dead"
                          ? "bg-red-500/20 text-red-300"
                          : "bg-gray-500/20 text-gray-300"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${getStatusColor(
                          character?.status || ""
                        )}`}
                      ></div>

                      {character?.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-white/90">
                    <div>
                      <span className="text-sm text-white/70">Species</span>
                      <p className="font-medium">{character?.species}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-white/90">
                    <div>
                      <span className="text-sm text-white/70">Gender</span>
                      <p className="font-medium">{character?.gender}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-white/90">
                    <div>
                      <span className="text-sm text-white/70">Type</span>
                      <p className="font-medium">{character?.type}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-white/90">
                    <div>
                      <span className="text-sm text-white/70">Created</span>
                      <p className="font-medium">{formatDate(character?.created || "")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold text-white">🌍 Origin</h3>
              </div>
              <p className="text-white/90 text-lg">{character?.origin?.name}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-semibold text-white">📍 Location</h3>
              </div>
              <p className="text-white/90 text-lg">{character?.location?.name}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-xl">
            <h3 className="text-xl font-semibold text-white flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EP</span>
              </div>
              Episodes ({character?.episode.length})
            </h3>
          </div>
        </div>
      </div>
    </Modal>
  );
}
