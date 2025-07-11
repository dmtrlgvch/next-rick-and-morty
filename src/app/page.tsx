import Image from "next/image";
import charactersImage from "@/assets/characters.jpg";
import episodesImage from "@/assets/episodes.jpg";
import locationsImage from "@/assets/locations.jpg";
import Link from "next/link";

export default async function Home() {
  return (
    <section className="container mx-auto px-4 pb-16">
      <header className="text-center py-8 px-4">
        <div className="float">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Rick & Morty
          </h1>
          <div className="glow inline-block px-8 py-3 rounded-full border-2 border-green-500 bg-green-500/10 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-green-300 font-semibold">
              Interdimensional Explorer
            </p>
          </div>
        </div>
        <p className="text-gray-300 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
          Dive into the chaotic multiverse of Rick and Morty! Explore characters, episodes, and
          locations from across infinite dimensions.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Link href={"/characters"}>
          <div className="card-hover bg-gradient-to-br from-green-900/30 to-green-700/20 backdrop-blur-lg border border-green-500/30 rounded-3xl p-8 text-center cursor-pointer group">
            <div className="mb-6">
              <Image
                src={charactersImage}
                width={300}
                height={300}
                alt={"characters"}
                className="mb-4 mx-auto"
              />
              <h2 className="text-3xl font-bold text-green-300 mb-3">Characters</h2>
              <p className="text-gray-300 leading-relaxed">
                Meet the wild cast of characters from across the multiverse. From genius scientists
                to interdimensional beings.
              </p>
            </div>
            <div className="mt-8">
              <span className="inline-flex items-center px-6 py-3 bg-green-500/10 border border-green-500/50 rounded-full text-green-300 font-semibold group-hover:bg-green-500/20 transition-colors">
                Explore Characters
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </Link>

        <Link href={"/episodes"}>
          <div className="card-hover bg-gradient-to-br from-blue-900/30 to-blue-700/20 backdrop-blur-lg border border-blue-500/30 rounded-3xl p-8 text-center cursor-pointer group">
            <div className="mb-6">
              <Image
                src={episodesImage}
                width={300}
                height={300}
                alt={"episodes"}
                className="mb-4 mx-auto"
              />
              <h2 className="text-3xl font-bold text-blue-300 mb-3">Episodes</h2>
              <p className="text-gray-300 leading-relaxed">
                Relive the chaotic adventures and interdimensional mishaps across all seasons of the
                show.
              </p>
            </div>
            <div className="mt-8">
              <span className="inline-flex items-center px-6 py-3 bg-blue-500/10 border border-blue-500/50 rounded-full text-blue-300 font-semibold group-hover:bg-blue-500/20 transition-colors">
                Browse Episodes
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </Link>

        <Link href={"/locations"}>
          <div className="card-hover bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 text-center cursor-pointer group">
            <div className="mb-6">
              <Image
                src={locationsImage}
                width={300}
                height={300}
                alt={"locations"}
                className="mb-4 mx-auto"
              />
              <h2 className="text-3xl font-bold text-purple-300 mb-3">Locations</h2>
              <p className="text-gray-300 leading-relaxed">
                Discover the bizarre worlds, dimensions, and planets that Rick and Morty have
                visited.
              </p>
            </div>
            <div className="mt-8">
              <span className="inline-flex items-center px-6 py-3 bg-purple-500/10 border border-purple-500/50 rounded-full text-purple-300 font-semibold group-hover:bg-purple-500/20 transition-colors">
                Visit Locations
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
