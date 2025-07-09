## Installation

```bash
npm i francisco
```

### 1: Update Your Layout

```tsx
// app/layout.tsx
import { sfSans, sfMono } from "francisco";
...

  return (
    <html lang="en" className={`${sfSans.variable} ${sfMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

### 2: Configure Fonts in `globals.css`

```css
/* app/globals.css */
.font-sans {
  font-family: var(--font-sf-sans), SFProDisplay-Regular, sans-serif;
}

.font-mono {
  font-family: var(--font-sf-mono), SFMono-Regular, monospace;
}
```

### 3: Use the Fonts

You can now use the `font-mono` utility class to apply the mono font. The sans-serif font is applied by default.

```tsx
// app/page.tsx
export default function Page() {
  return (
    <main className="p-24 font-sans">
      <h1 className="text-4xl">SF Pro Display</h1>
      <p className="mt-4">This is the body text, rendered in SF Pro Display.</p>
      <code className="block mt-8 p-4 bg-gray-100 rounded-md font-mono text-lg">
        This is some code, rendered in SF Mono.
      </code>
    </main>
  );
}
```
