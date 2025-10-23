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
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaginationControls() {
  let pageNumber = (Number(useSearchParams().get("page")) ?? 0);
  pageNumber < 1 && (pageNumber = 1);

  const [currentPage, setCurrentPage] = useState(pageNumber);

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${currentPage - 1}`}
                onClick={() => setCurrentPage(currentPage - 1)}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href={`?page=${currentPage - 1}`}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink href={`?page=${currentPage}`} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={`?page=${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`?page=${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}