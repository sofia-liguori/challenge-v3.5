"use client";

import { gql, TypedDocumentNode } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client/react";
import CharacterCard from "./CharacterCard";
import { Suspense } from "react";

interface CharacterData {
  Page: {
    pageInfo: {
      currentPage: number;
      hasNextPage: boolean;
      perPage: number;
    };
    characters: [
      {
        id: number;
        name: {
          full: string;
        };
        description: string;
        image: {
          medium: string;
        };
      }
    ];
  };
}

interface GalleryProps {
  page: number;
  perPage: number;
}

const GET_CHARACTERS: TypedDocumentNode<CharacterData> = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        hasNextPage
        perPage
      }
      characters {
        image {
          medium
        }
        name {
          full
        }
        description
        id
      }
    }
  }
`;

export default function Gallery({ page, perPage }: GalleryProps) {
  const { data } = useSuspenseQuery(GET_CHARACTERS, { variables: { page, perPage }});
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-wrap gap-4 justify-center pb-10">
        {data.Page.characters.map((character) => (
          <CharacterCard {...character} key={character.id} />
        ))}
      </div>
    </Suspense>
  );
}
