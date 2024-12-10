"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

const CustomUserButton = () => {
  const { theme } = useTheme();
  return (
    <SignedIn>
      <UserButton
        appearance={{
          baseTheme: theme === "dark" ? dark : undefined,
          elements: {
            avatarBox: {
              width: 35,
              height: 35,
            },
          },
        }}
      />
    </SignedIn>
  );
};

export default CustomUserButton;
