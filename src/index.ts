import localFont from "next/font/local";

export const sfSans = localFont({
  src: [
    // Regular
    {
      path: "../fonts/sf-pro-display/SF-Pro-Display-Regular.otf",
      weight: "400",
      style: "normal",
    },
    // Medium
    {
      path: "../fonts/sf-pro-display/SF-Pro-Display-Medium.otf",
      weight: "500",
      style: "normal",
    },
    // Semibold
    {
      path: "../fonts/sf-pro-display/SF-Pro-Display-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    // Bold
    {
      path: "../fonts/sf-pro-display/SF-Pro-Display-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-sans",
  display: "swap",
});

export const sfMono = localFont({
  src: [
    // Regular
    {
      path: "../fonts/sf-mono/SFMonoRegular.otf",
      weight: "400",
      style: "normal",
    },
    // Medium
    {
      path: "../fonts/sf-mono/SFMonoMedium.otf",
      weight: "500",
      style: "normal",
    },
    // Semibold
    {
      path: "../fonts/sf-mono/SFMonoSemibold.otf",
      weight: "600",
      style: "normal",
    },
    // Bold
    {
      path: "../fonts/sf-mono/SFMonoBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-mono",
  display: "swap",
});

export const fontVariables = {
  sans: "--font-sf-sans",
  mono: "--font-sf-mono",
} as const;
