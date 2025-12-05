import Link from "next/link";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

import { SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

export const metadata = {
  title: "Facebook",
  description: "Web Application",
}
export default function home(){
    return(
        <div>
        <div className="flex items-center justify-between border border-blac bg-white fixed top-0 left-0 right-0 p-2">
                <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/facebook.png"
          alt="Example image"
          width={38}
          height={38}
          className="float-left rounded-xl"
        />
      <ButtonGroup className = "relative left-2">
      <Input placeholder="Search..." className = "w-55 rounded-xl"/>
      <Button variant="outline" aria-label="Search" className = "rounded-xl">
        <SearchIcon />
      </Button>
    </ButtonGroup>
    </Link>
    <div>
    <span className = "inline-block hover:underline bg-gray relative right-10 pr-20">Home</span>
    <span className = "inline-block hover:underline bg-gray relative right-10 pr-20">Videos</span>
    <span className = "inline-block hover:underline bg-gray relative right-10 pr-20">Shop</span>
    <span className = "inline-block hover:underline bg-gray relative right-10 pr-20">Groups</span>
    <span className = "inline-block hover:underline bg-gray relative right-10 pr-20">Groups</span>
    </div>
    <div className="float-right">
    <button className="bg-black-500 text-black px-4 py-2 rounded">Messenger</button>
        <button className="bg-black-500 text-black px-4 py-2 rounded">Darkmode</button>
    <DropdownMenu>
      <DropdownMenuTrigger>Settings</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Link href="#" target="_blank" rel="noopener noreferrer">
          My Account
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem><Link href="/register" target="_blank" rel="noopener noreferrer">
          Register
          </Link></DropdownMenuItem>
        <DropdownMenuItem><Link href="/login" target="_blank" rel="noopener noreferrer">
          Login
          </Link></DropdownMenuItem>
        <DropdownMenuItem>Menu</DropdownMenuItem>
        <DropdownMenuItem>Menu</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    </div>
    </div>

        <aside className = "bg-gray-300 border border-white float-left w-70 p-5 fixed top-14 h-800">
          <ul className = "space-y-4">
    </ul>
        <nav className = "mt-10 ml-4"></nav>
  <ul className = "space-y-4 border-bottom black">
    <li>Your Shortcuts</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
   </ul>
        </aside>
        <body className = "bg-gray-200">
        <main className = "ml-80 mr-20 mt-25 mr-80 text-center border float-left bg-white">
            <div className = "bg-red w-300 h-150">

            </div>
            <article className = "bg-white rounded-xl">

            </article>

        </main>
 <div className = "float-right w-40 border">
        <h4>Contacts</h4>
        </div>
    </body>
    </div>
    );
}

