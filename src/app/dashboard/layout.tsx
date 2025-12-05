'use client';
import { useRouter } from 'next/navigation';
import { getToken, logoutUser } from '@/lib/auth';
import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Sheet,
         SheetClose,
         SheetContent,
         SheetDesription,
         SheetFooter,
         SheetHeader,
         SheetTitle,
         SheetTrigger,
        } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DashboardLayout({children}: {
    children: React.ReactNode;
}) {
  const router = useRouter();
  const token = getToken();

  if (!token) {
    router.push('/login');
    return null;
  }

  function handleLogout() {
    logoutUser();
    router.push('/login');
  }

  return (
    <>
      <div className="shadow-xl border flex p-1 items-center justify-between fixed bg-white top-0 left-0 right-0 z-50">

        <div className="relative left-4 pr-15">
          <Sheet >
      <SheetTrigger asChild>
         <Image
         src="/menu.png"
         alt="Like"
         width={25}
         height={25}
         className="inline-block cursor-pointer" />

      </SheetTrigger>
      <SheetContent side = "left" className = "opacity-90 w-[400px] sm:w-[240px]">
        <SheetHeader>
          <ul className="-ml-5 mt-0">
     <div className = "relative left-4">
      <Link href="/dashboard" rel="noopener noreferrer">
          <Image
            src="/youtube.png"
            alt="YouTube Logo"
            width={37}
            height={37}
            className="inline-block relative left-5"
          />
          <h1 className="inline-block text-2xl font-bold left-7 relative">
            Youtube<sup className="text-sm">PH</sup>
          </h1>
          </Link>
          <ul>
       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
          <Image src="/bahay.png" alt="Homepage" width={28} height={28} className="inline-block float-left" />
        <span className = "relative left-5">
                    <Link href="/dashboard" rel="noopener noreferrer">
                          Home
                    </Link>
        </span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/shorts.png" alt="Homepage" width={28} height={28} className="inline-block float-left" />
         <span className = "relative left-5">Shorts</span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/subscription.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Subscription</span>
       </li>


       <Separator />
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
          Explore
         </h4>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/trending.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Trending</span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/music.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Music</span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/movies.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">History</span>
       </li>
      <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/history.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Playlist</span>
       </li>


       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/music.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Liked Videos</span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/gaming.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Your videos</span>
       </li>
       <Separator/>
       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/youtube.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Settings</span>
       </li>

       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/youtube.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Report history</span>
       </li>
       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/youtube.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Help</span>
       </li>
        <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/youtube.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Send Feedback</span>
       </li>
       <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/youtube.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Fashion & Beauty</span>
       </li>
        <li className="inline-block text-sm w-47 hover:bg-gray-200 rounded-sm p-2 cursor-pointer">
         <Image src="/youtube.png" alt="Homepage" width={28} height={28} className="inline-block" />
         <span className = "relative left-5">Downloads</span>
       </li>
        </ul>
     </div>
       </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
          <Link href="/dashboard" rel="noopener noreferrer">
          <Image
            src="/youtube.png"
            alt="YouTube Logo"
            width={37}
            height={37}
            className="inline-block relative left-5"
          />
          <h1 className="inline-block text-2xl font-bold left-7 relative">
            Youtube<sup className="text-sm">PH</sup>
          </h1>
          </Link>
        </div>
        <ButtonGroup className="relative" style={{ right: "30px" }}>
          <Input placeholder="Search..." className="w-150 h-10" />
          <Button variant="outline" aria-label="Search" className="h-10 hover:bg-gray-100">
            <SearchIcon />
          </Button>
        </ButtonGroup>
 <div className="absolute left-250">
          <Image
            src="/microphone.png"
            alt="Microphone"
            width={25}
            height={25}
            className="inline-block"
          />
        </div>

<div className = "relative left-40">
          <Popover>
  <PopoverTrigger asChild>
          <Button variant = "outline">Create<span className = "text-2xl">+</span></Button>

  </PopoverTrigger>
  <PopoverContent>
         <ul>
          <li>Upload Video</li>
          <li>Go live</li>
          <li>Create post</li>
         </ul>
    </PopoverContent>
</Popover>
        </div>

<Popover >
  <PopoverTrigger className = "mb-7">
    <Image
          src="/notification.png"
          alt="Notifications"
          width={30}
          height={30}
          className="absolute" style={{ left: "1400px" }}
        />
</PopoverTrigger>
  <PopoverContent className = "w-50 cursor-pointer">
     <h4 className="scroll-m-20 text-md text-center font-semibold tracking-tight">
      Notification
    </h4>


    </PopoverContent>
</Popover>

        <DropdownMenu>
          <DropdownMenuTrigger className="top-4">
            <Image
              src="/profile-user.png"
              alt="Profile"
              width={32}
              height={32}
              className="mr-7 inline-block cursor-pointer"
            />
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link href="#" rel="noopener noreferrer">Profile</Link>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuLabel>
              <Link href="#" rel="noopener noreferrer">Positions</Link>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
              <Popover>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="leading-none font-medium">{token}</h4>
                      <p className="text-muted-foreground text-sm">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link href="/register" rel="noopener noreferrer">
                <Button variant="destructive" onClick={handleLogout}>Logout</Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


      </div>
      {children}
    </>
  );
}
