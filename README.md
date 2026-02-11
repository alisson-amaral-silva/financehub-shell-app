# 💰 FinanceHub - Microfrontend Finance Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker" />
  <img src="https://img.shields.io/badge/AWS-S3%20%2B%20CloudFront-FF9900?style=for-the-badge&logo=amazon-aws" />
</p>

## 📋 Overview

FinanceHub is a **personal finance management platform** built with a **Microfrontend Architecture** using Module Federation. This project serves as a study case for:

- 🧩 **Microfrontends** with Webpack Module Federation
- 🐳 **Docker** containerization
- 🔄 **CI/CD** with GitHub Actions
- ☁️ **AWS** deployment (S3, CloudFront, CloudWatch)
- 🎭 **MSW** (Mock Service Worker) for API mocking

## 🔧 Technology Stack

### Frontend
| Tech         | Version | Purpose           |
| ------------ | ------- | ----------------- |
| Next.js      | 14.x    | Shell Application |
| React        | 18.x    | UI Library        |
| TypeScript   | 5.x     | Type Safety       |
| Tailwind CSS | 3.x     | Styling           |
| shadcn/ui    | Latest  | UI Components     |
| Recharts     | 2.x     | Charts            |
| Zustand      | 4.x     | State Management  |
| MSW          | 2.x     | API Mocking       |

### DevOps
| Tech           | Purpose          |
| -------------- | ---------------- |
| Docker         | Containerization |
| GitHub Actions | CI/CD            |
| AWS S3         | Static Hosting   |
| AWS CloudFront | CDN              |
| AWS CloudWatch | Monitoring       |


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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
