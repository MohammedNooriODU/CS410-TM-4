# Instruction for Team 4 Members

1. clone the repository

```
git clone <repository-name>
```

2. install the packages

```
npm install
```

3. go to `next.config.mjs` and comment out everything inside nextConfig

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // //   distDir: "dist",
  // basePath: "/CS410-TM-4",
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
```

4. Add `next.config.mjs` to your `.git.ignore` so its not going to be uploaded accidentally **OR** just don't add it to your commits

```
next.config.mjs
```

5. Run as dev to start developing

```
npm run dev
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
