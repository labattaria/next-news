**Read in another language: [Українська](README.ukr.md), [English](README.md).**

# NextNews app

---

[![NextNews](https://i.gyazo.com/6356d1ab4f7ddb84f9f8b128c284841e.gif)](https://gyazo.com/6356d1ab4f7ddb84f9f8b128c284841e)

---

[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](#)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](#)
[![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)](#)

This is the NextNews Next.js + React app

Next News is a modern news application built with Next.js. It allows you to stay up to date with the latest news and explore an archive of news from previous years and months. With smooth navigation, fast loading, and a clean interface, reading the news becomes simple and enjoyable.

The app in this repo is hosted on [![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](#), hosting public URL: [https://next-news-indol.vercel.app/](https://next-news-indol.vercel.app/)

But you can use this app manually on your local machine

## Used dependencies:

- **Next.js** - React framework for building fast, full-stack web applications with server-side rendering and static site generation
- **React** - Library used for building user interfaces, particularly for single-page applications where you need a fast, interactive experience
- **Prisma** – A modern ORM that streamlines database access by providing a type-safe, auto-generated query builder and intuitive API for working with relational databases efficiently and reliably

The full list of dependencies can be found in the **package.json** file.

---

## Next.js Features Used:

- **Server Components** – Enable rendering parts of the UI on the server with full access to backend resources, improving performance and security
- **App Router** – File-based routing with support for layouts, nested routes, loading/error states, and route-specific metadata
- **Server-Side Rendering (SSR)** – Render pages on each request, great for dynamic content and SEO
- **Static Site Generation (SSG)** – Pre-render pages at build time for fast performance and easy CDN caching
- **Client Components** – Standard React components rendered in the browser; useful for interactive UI
- **Dynamic Routing** – Create dynamic pages with URL parameters using file and folder naming conventions
- **Metadata and SEO** – Add page-level metadata (static or dynamic) for SEO and social media previews
- **Streaming and Suspense** – Native support for React Suspense, allowing streaming of UI segments
- **Parallel Routes** – Display multiple routes in the same layout simultaneously
- **Catch-All Routes** – Handle dynamic segments with multiple path parts
- **Interception Routes** – Override routing behavior for specific paths
- **Route Groups** – Organize routes without affecting the URL structure
- **Link** – Client-side navigation component for seamless and fast route changes without full page reloads
- **usePathname** – A React hook that returns the current URL pathname, useful for conditionally rendering UI based on the active route
- **useRouter** – Access router methods and route data in client components, navigate between pages using code (e.g. `router.push, router.back`)

---

## React Features Used:

- **Components** - Building blocks of React applications, reusable and encapsulated UI pieces
- **Props** - Mechanism to pass data and event handlers from parent to child components
- **Rendering Lists** - Dynamically displaying multiple elements by iterating over arrays
- **Conditional Rendering** - Displaying different UI elements based on application state, props or conditions
- **Suspense** - Displays a fallback (like a loader) while lazy-loaded components are being fetched

---

## Contents

- [Installation](#installation)
- [Usage](#usage)

### Installation

1. Clone the repository:

```shell
git clone https://github.com/labattaria/next-news.git
```

2. Install project dependencies:

```shell
cd next-news
npm install
```

### Usage

Start the next-dev-server using the following command:

```shell
npm run dev
```

Server will be located at **http://localhost:3000/**
