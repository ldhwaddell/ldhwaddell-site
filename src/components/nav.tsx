"use client";

import * as React from "react";
import Link from "next/link";
import { navConfig } from "@/config/nav";
import { Icons } from "./icons";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Nav() {
  return (
    <div className="hidden md:flex">
      <NavigationMenu>
        <Icons.cpu className="h-[1.2rem] w-[1.2rem] mr-2" />
        <NavigationMenuList>
          {navConfig.map((nav, index) => {
            return (
              <NavigationMenuItem key={index}>
                <Link href={nav.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {nav.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
