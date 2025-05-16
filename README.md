# SlickLink

SlickLink is a sleek and minimal URL shortening service that evokes the smoothness of silk while providing robust and fast link management. Built with **Next.js**, **PostgreSQL**, **Prisma ORM**, and **Tailwind CSS**, SlickLink is designed to deliver elegance and performance.

## Features

* Shorten long URLs into compact, shareable links
* Track click metrics (optional future enhancement)
* Modern, responsive UI built with Tailwind CSS
* Built using Next.js App Router
* PostgreSQL for reliable data storage
* Prisma ORM for smooth database interaction

## Tech Stack

* **Framework**: [Next.js](https://nextjs.org/)
* **Database**: [PostgreSQL](https://www.postgresql.org/)
* **ORM**: [Prisma](https://www.prisma.io/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

* Node.js >= 18
* PostgreSQL database

### Installation

```bash
# Clone the repository
git clone https://github.com/rajput-vishal01/slick-link
cd slicklink

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Fill in the values for DATABASE_URL and any other required env vars

# Generate Prisma client and push schema to database
npx prisma generate
npx prisma db push

# Run the development server
npm run dev
```

## Folder Structure

* `/app` - Contains Next.js routes and components (App Router)
* `/prisma` - Prisma schema and migrations
* `/styles` - Tailwind CSS configuration

## License

This project is licensed under the MIT License.

---

> Crafted with performance and simplicity in mind.
