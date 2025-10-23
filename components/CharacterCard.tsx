import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Character {
  id: number;
  name: {
    full: string;
  };
  description: string;
  image: {
    medium: string;
  };
}

export default function CharacterCard(character: Character) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:bg-accent h-60 w-40">
          <CardContent className="flex flex-col justify-betweem">
            <img
              alt={`Image of ${character.name.full}`}
              src={character.image.medium}
              className="rounded-sm h-35 mb-3"
            />
            <CardTitle>{character.name.full}</CardTitle>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Character Description</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-200 w-full bg-slate-800 text-white rounded-md p-4">
          <p>{character.description}</p>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
