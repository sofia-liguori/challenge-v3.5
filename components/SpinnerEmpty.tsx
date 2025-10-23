import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

export default function SpinnerEmpty() {
  return (
    <Empty className="w-full flex h-full justify-center">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Fetching characters...</EmptyTitle>
      </EmptyHeader>
    </Empty>
  )
}
