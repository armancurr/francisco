# Francisco

A font package for using Apple's SF Pro Display and SF Mono fonts in Next.js projects.

## Installation

```bash
npm install francisco
# or
bun add francisco
```

## Usage with Next.js App Router & Tailwind CSS

This guide shows how to set up the font package in a Next.js project using the App Router.

### Step 1: Update Your Layout (`app/layout.tsx`)

Open your root layout file, import `sfSans` and `sfMono`, and apply their CSS variables to the `<html>` element.

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import { sfSans, sfMono } from "francisco";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "Powered by Francisco fonts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sfSans.variable} ${sfMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
```
-   **`className`**: The `sfSans.variable` and `sfMono.variable` classes add the `--font-sf-sans` and `--font-sf-mono` CSS variables for global use.
-   **Default Font**: We apply a default `font-sans` style to the `<body>` element, which we will configure in the next step.

### Step 2: Configure Fonts in `globals.css`

With modern Tailwind CSS, you can configure fonts directly in `app/globals.css`, which is often simpler than modifying `tailwind.config.ts`.

Add the following `@layer base` rule to your `globals.css` file to set SF Pro as the default font and configure the `font-mono` utility.

```css
/* app/globals.css */
@layer base {
  body {
    font-family: var(--font-sf-sans), system-ui, sans-serif;
  }
  
  .font-mono {
    font-family: var(--font-sf-mono), SFMono-Regular, monospace;
  }
}
```
This sets SF Pro as the default `sans-serif` font for the entire application and ensures the `font-mono` class applies SF Mono.

### Step 3: Use the Fonts

You can now use the `font-mono` utility class to apply the mono font. The sans-serif font is applied by default.

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold">
        SF Pro Display (Sans-Serif)
      </h1>
      <p className="mt-4">
        This is the body text, rendered in SF Pro Display.
      </p>
      <code className="block mt-8 p-4 bg-gray-100 rounded-md font-mono text-lg">
        This is some code, rendered in SF Mono.
      </code>
    </main>
  );
}
```