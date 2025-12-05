
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"

import { Input } from "@/components/ui/input"
import { ChevronDownIcon, SlashIcon } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const metadata = {
  title: "Home",
  description: "Index page",
}

const user = {
  name: "John Ethan B. Dela Cruz",
  role: "Student",
  course: "Computer Science"
}
export default function Index() {
  return (
    <>

    {/* FIXED HEADER */}
<div className="fixed top-0 left-0 right-0 z-50 h-18 border border-black relative">
  <div className="flex items-center justify-between">

    {/* Left section */}
    <div className="flex items-center border border-black rounded-sm">
      <Avatar className="mr-2">
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <span className="text-md font-semibold">Index Page</span>
    </div>
  </div>
<nav className = "mt-20 text-sm relative bottom-20">
  <a
  href="/register"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:underline">
   <Button variant="outline" className="text-sm mb-2">Register</Button>
  </a>
  <a
  href="/login"
  rel="noopener noreferrer"
  className="text-blue-500 hover:underline">
   <Button variant="outline" className="text-sm mb-2">Login</Button>
  </a>
  <a
  href="/dashboard"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:underline">
   <Button variant="outline" className="text-sm mb-2">Dashboard</Button>
  </a>


</nav>
</div>
<main className = " ml-2">

  <article>
    <p>Welcome to Index. Select any of the links above to go to Youtube Clone main site.</p>
    <p>Nextjs + Nestjs + Tailwind</p>






</article>
</main>
    </>
  )
}
