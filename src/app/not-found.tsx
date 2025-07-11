import Link from "next/link";

export default function NotFound() {
  return (
    <div className={"grow bg-gray-900 flex flex-col items-center justify-center px-4"}>
      <div className={"text-center"}>
        <h1 className={"text-4xl md:text-6xl font-bold text-green-400 mb-4"}>
          Wubba Lubba Dub Dub! 404!
        </h1>
        <p className={"text-lg md:text-xl text-gray-200 mb-6"}>
          Oh geez, Rick, this page is lost in another dimension!
        </p>
        <div className={"relative w-32 h-32 mx-auto mb-6"}>
          <svg
            className={"w-full h-full animate-spin-slow"}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="rgba(74, 222, 128, 0.5)"
              strokeWidth="8"
              fill="none"
              className={"animate-pulse"}
            />
            <circle cx="50" cy="50" r="30" stroke="rgb(74, 222, 128)" strokeWidth="6" fill="none" />
          </svg>
        </div>
        <p className={"text-md text-gray-400 mb-8"}>
          The resource you are looking for does not exist in this universe. Try jumping through a
          portal back home!
        </p>
        <Link
          href="/"
          className={
            "glow inline-block px-4 py-2 rounded-full border-2 border-green-500 bg-green-500/10 backdrop-blur-sm"
          }
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
