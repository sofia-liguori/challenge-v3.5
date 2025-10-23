"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationControls({ page }: { page: number }) {
  let pageNumber = page;
  pageNumber < 1 && (pageNumber = 1);

  return (
    <Pagination className="pb-5">
      <PaginationContent>
        {pageNumber > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${pageNumber - 1}`}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`?page=${pageNumber - 1}`}
              >
                {pageNumber - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href={`?page=${pageNumber}`} isActive>
            {pageNumber}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`?page=${pageNumber + 1}`}
          >
            {pageNumber + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`?page=${pageNumber + 1}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
