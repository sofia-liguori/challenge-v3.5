"use client";

import Gallery from "@/components/Gallery";
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

export default function information() {
  let pageNumber = (Number(useSearchParams().get("page")) ?? 0);
  pageNumber < 1 && (pageNumber = 1);

  let perPage = 12;
  const [currentPage, setCurrentPage] = useState(pageNumber);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans dark:bg-black">
      <main className="flex flex-col min-h-screen w-full max-w-3xl items-center bg-white dark:bg-black sm:items-start">
        <Gallery page={currentPage} perPage={perPage} />
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
      </main>
    </div>
  );
}
