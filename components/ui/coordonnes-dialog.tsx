'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./button"
import Github from "../svg/Github"
import { Separator } from "./separator"
import { AtSignIcon, Building2Icon, PhoneIcon } from "lucide-react"


const CoordonneesDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="pointer-events-auto bg-indigo-400 hover:bg-indigo-500 transition-colors">
          Voir
        </Button>
      </DialogTrigger>
      <DialogContent className="border-gray-950/[.1] bg-background/90 dark:border-gray-50/[.1]">
        <DialogHeader>
          <DialogTitle>Mes coordonnées</DialogTitle>
          <DialogDescription>
            Besoin de me contacter ? Voici où vous pouvez me joindre !
          </DialogDescription>
        </DialogHeader>
        <Separator className="bg-foreground/15 h-[0.5px]" />
        <div className="absolute top-0 h-full w-full overflow-hidden rounded-lg">
          {/* Illustration */}
          <Github className="absolute top-14 -right-12 opacity-50 sm:h-60 sm:w-60" />
        </div>
        <div className="flex flex-col gap-5 mt-2">
          {/* Ville */}
          <span className="flex items-center gap-2">
            <Building2Icon />
            <p>Brest, 29200</p>
          </span>

          {/* Téléphone */}
          <span className="flex items-center gap-2">
            <PhoneIcon />
            <p>06.79.98.02.40</p>
          </span>

          {/* Mail */}
          <span className="flex items-center gap-2">
            <AtSignIcon />
            <p>louismzl.dev@gmail.com</p>
          </span>

        </div>


      </DialogContent>
    </Dialog>

  )
}

export default CoordonneesDialog