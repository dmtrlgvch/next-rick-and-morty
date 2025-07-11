"use client";

import {
  type GetCharactersQueryVariables,
  type GetCharactersQuery,
  type Character,
} from "@/graphql/__generated__/";
import { useQueryRefHandlers, useReadQuery, QueryRef } from "@apollo/client";
import CharacterCard from "@/components/character-card";
import { useCallback, useEffect, useRef } from "react";

export default function CharactersInfiniteList({
  queryRef,
}: {
  queryRef: QueryRef<GetCharactersQuery, GetCharactersQueryVariables>;
}) {
  const { fetchMore } = useQueryRefHandlers(queryRef);
  const { data } = useReadQuery(queryRef);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (!data?.characters?.info?.next) return;

    try {
      await fetchMore({
        variables: {
          page: data.characters.info.next,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult.characters?.results?.length) {
            return prev;
          }

          return {
            characters: {
              ...fetchMoreResult.characters,
              results: [...(prev.characters?.results || []), ...fetchMoreResult.characters.results],
            },
          };
        },
      });
    } catch (error) {
      console.error("Error loading more characters:", error);
    }
  }, [data, fetchMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      {
        root: null,
        rootMargin: "500px",
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.unobserve(sentinel);
    };
  }, [loadMore]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {data?.characters?.results?.map((character) => (
          <CharacterCard key={character?.id} character={character as Character} />
        ))}
      </div>
      <div ref={sentinelRef}></div>
    </div>
  );
}
