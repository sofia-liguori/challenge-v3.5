import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <Card className="cursor-pointer hover:bg-accent">
          <CardHeader>
            <CardTitle>{character.name.full}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              alt={`Image of ${character.name.full}`}
              src={character.image.medium}
              className="rounded-sm w-30"
            />
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Character Information</DialogTitle>
        </DialogHeader>
        <p>{character.description}</p>
      </DialogContent>
    </Dialog>
  );
}
