import { type Character } from "@/graphql/__generated__";
import { getStatusColor } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link href={`/characters/${character?.id}`}>
      <div className="bg-gray-800/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:scale-105">
        <div className="relative">
          <Image
            src={character?.image || ""}
            width={200}
            height={200}
            alt={character?.name || "Character image"}
            className="w-full h-45 object-cover"
          />
          {character?.status ? (
            <div
              className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(
                character?.status
              )}`}
            >
              {character?.status}
            </div>
          ) : null}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-2 truncate">{character?.name}</h3>
        </div>
      </div>
    </Link>
  );
}
