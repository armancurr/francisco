# Francisco

A font package for using Apple's SF Pro Display and SF Mono fonts in Next.js projects.

## Installation

```bash
npm install francisco
# or
bun add francisco
```

### Step 1: Update Your Layout

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
    <html lang="en" className={`${sfSans.variable} ${sfMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

### Step 2: Configure Fonts in `globals.css`

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

### Step 3: Use the Fonts

You can now use the `font-mono` utility class to apply the mono font. The sans-serif font is applied by default.

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <main className="p-24">
      <h1 className="text-4xl font-bold">SF Pro Display (Sans-Serif)</h1>
      <p className="mt-4">This is the body text, rendered in SF Pro Display.</p>
      <code className="block mt-8 p-4 bg-gray-100 rounded-md font-mono text-lg">
        This is some code, rendered in SF Mono.
      </code>
    </main>
  );
}
```
