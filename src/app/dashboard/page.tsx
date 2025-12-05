"use client";
import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import React from "react";
import { Separator } from "@/components/ui/separator"


import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome() {
  const token = getToken();
  let username = "Guest";

  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded.username) {
        username = decoded.username;
      }
    } catch (e) {
      console.error("Token decoding failed:", e);
    }
  }

  return (
    <>
<div className="sticky border bg-white rounded-lg mt-10">
  <h2 className="mt-10 scroll-m-20 text-center text-4xl font-extrabold tracking-tight mb-2 p-5">
    Welcome, {username}
  </h2>

  {token && (
    <ContextMenu>
      <ContextMenuTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              Your bearer token
            </Button>
          </TooltipTrigger>

          <TooltipContent>
            Right-click to view your token
          </TooltipContent>
        </Tooltip>
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuItem>
          <pre className="scroll-m-20 text-sm font-semibold tracking-tight whitespace-pre-wrap">
            {token}
          </pre>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )}
  <Separator className="my-4" />
<fieldset className="mt-5 bg-white">
    <div className="inline-block pl-10 sticky top-12 bg-white rounded-lg w-380">
      <Button variant="secondary" className = "top-5">All</Button>
      <Button variant="outline" className = "top-5">Programming</Button>
      <Button variant="outline" className = "top-5">Web-Development</Button>
      <Button variant="outline" className = "top-5">Game Dev</Button>
      <Button variant="outline" className = "top-5">David Goggins</Button>
      <Button variant="outline" className = "top-5">Motivation</Button>
      <Button variant="outline" className = "top-5">90's music</Button>
      <Button variant="outline" className = "top-5">20's music</Button>
      <Button variant="outline" className = "top-5">Five Night's At Freddy's</Button>
      <Button variant="outline" className = "top-5">Japan pop rock</Button>
      <Button variant="outline" className = "top-5">Nakano Miku</Button>
      <Button variant="outline" className = "top-5">MiSide</Button>
      <Button variant="outline" className = "top-5">Mita</Button>
    </div>

    <div className = "mt-10">
      <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out">
      <figure className="rounded-md">
        <Image
          src="/every_breath_you take.jpg"
          alt="Homepage"
          width={480}
          height={480}
          className="inline-block rounded-md"
        />
        <figcaption className="h-20">
          <div className = "ml-1 m-2">
          <Avatar className="float-left">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="text-xl relative left-3">
            <Link href="/Every_breath_you_take" rel="noopener noreferrer">
                          The Police- Every breath you take<br/>
                          </Link></span>

          <div className="relative left-3 inline-block text-gray-500 text-md">
            <span className="text-gray-500">Ethan-bytes101001</span>
            <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
            <span className="text-gray-500 ml-3">500K views</span>
          </div>
          </div>
        </figcaption>
      </figure>
      </div>
      <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out">
      <figure className="rounded-md">
        <Image
          src="/multo.jpg"
          alt="Homepage"
          width={480}
          height={480}
          className="inline-block rounded-md"
        />
        <figcaption className="h-20">
          <div className = "ml-1 m-2">
          <Avatar className="float-left">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="relative left-3 text-xl">
            <Link href="/Every_breath_you_take" rel="noopener noreferrer">
                          Cup of Joe- Multo<br/>
                          </Link></span>

          <div className="relative left-3 inline-block text-gray-500 text-md">
            <span className="text-gray-500">Ethan-bytes101001</span>
            <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
            <span className="text-gray-500 ml-3">3M views</span>
          </div>
          </div>
        </figcaption>
      </figure>
      </div>
      <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out">
      <figure className="rounded-md">
        <Image
          src="/walking_back_home.jpg"
          alt="Homepage"
          width={480}
          height={480}
          className="inline-block rounded-md"
        />
        <figcaption className="h-20">
          <div className = "ml-1 m-2">
          <Avatar className="float-left">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="relative left-3 text-xl">
            <Link href="/Every_breath_you_take" rel="noopener noreferrer">
                         Fur- Walking back home<br/>
                          </Link></span>

          <div className="relative left-3 inline-block text-gray-500 text-md">
            <span className="text-gray-500">Ethan-bytes101001</span>
            <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
            <span className="text-gray-500 ml-3">10M views</span>
          </div>
          </div>
        </figcaption>
      </figure>
      </div>
      <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out">
      <figure className="rounded-md">
        <Image
          src="/about_you.jpg"
          alt="Homepage"
          width={480}
          height={480}
          className="inline-block rounded-md"
        />
        <figcaption className="h-20">
          <div className = "ml-1 m-2">
          <Avatar className="float-left">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="relative left-3 text-xl">
            <Link href="/about_you" rel="noopener noreferrer">
                         The 1975- About you<br/>
                          </Link></span>

          <div className="relative left-3 inline-block text-gray-500 text-md">
            <span className="text-gray-500">Ethan-bytes101001</span>
            <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
            <span className="text-gray-500 ml-3">10M views</span>
          </div>
          </div>
        </figcaption>
      </figure>
      </div>
      <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out">
      <figure className="rounded-md">
        <Image
          src="/notouch.jpg"
          alt="Homepage"
          width={480}
          height={480}
          className="inline-block rounded-md"
        />
        <figcaption className="h-20">
          <div className = "ml-1 m-2">
          <Avatar className="float-left">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="relative left-3 text-xl">
            <Link href="/about_you" rel="noopener noreferrer">
                        Juan Dela Cruz- No Touch<br/>
                          </Link></span>

          <div className="relative left-3 inline-block text-gray-500 text-md">
            <span className="text-gray-500">Ethan-bytes101001</span>
            <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
            <span className="text-gray-500 ml-3">10M views</span>
          </div>
          </div>
        </figcaption>
      </figure>
      </div>

      <div className = "ml-5 inline-block hover:bg-gray-100 hover: transition-colors duration-300 ease-in-out">
      <figure className="rounded-md">
        <Image
          src="/wasted.jpg"
          alt="Homepage"
          width={480}
          height={480}
          className="inline-block rounded-md"
        />
        <figcaption className="h-20">
          <div className = "ml-1 m-2">
          <Avatar className="float-left">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <span className="relative left-3 text-xl">
            <Link href="/wasted" rel="noopener noreferrer">
                       Juice Wrld, Lil Uzi Vert- The Way Life Goes<br/>
                          </Link></span>

          <div className="relative left-3 inline-block text-gray-500 text-md">
            <span className="text-gray-500">Ethan-bytes101001</span>
            <span className="text-gray-500">&nbsp;&nbsp;&nbsp;•</span>
            <span className="text-gray-500 ml-3">10M views</span>
          </div>
          </div>
        </figcaption>
      </figure>
      </div>



    </div>

  </fieldset>
    </div>

    </>
  );
}
