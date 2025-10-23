"use client";

import Gallery from "@/components/Gallery";
import PaginationControls from "@/components/PaginationControls";
import SpinnerEmpty from "@/components/SpinnerEmpty";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function InformationSection() {
  let perPage = 12;
  let pageNumber = Number(useSearchParams().get("page")) ?? 0;
  pageNumber < 1 && (pageNumber = 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans dark:bg-black">
      <main className="flex flex-col min-h-screen w-full max-w-3xl items-center dark:bg-black sm:items-start">
        <Suspense fallback={<SpinnerEmpty />}>
          <Gallery page={pageNumber} perPage={perPage} />
        </Suspense>
        <PaginationControls page={pageNumber} />
      </main>
    </div>
  );
}
