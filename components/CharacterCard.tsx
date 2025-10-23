import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
          <CardHeader >
            <CardTitle>{character.name.full}</CardTitle> 
            {/* <CardDescription className="max-h-80"><p className="text-wrap truncate">{character.description}</p></CardDescription> */}
            {/* <CardAction>Card Action</CardAction> */}
          </CardHeader>
          <CardContent>
            <img
              alt={`Image of ${character.name.full}`}
              src={character.image.medium}
              className="rounded-sm h-40"
            />
            {/* <CardTitle className="pt-4">{character.name.full}</CardTitle> */}
            {/* <p className="text-wrap truncate">{character.description}</p> */}
          </CardContent>
          {/* <CardFooter>
        <p>Character ID: {character.id}</p>
      </CardFooter> */}
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader >
          <DialogTitle >Character Information</DialogTitle>
        </DialogHeader>
        <p>{character.description}</p>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
