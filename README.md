# Challenge v3.5

This project is a Next.js application (v16.0.0) designed to display character information fetched from a GraphQL API using Apollo Client. It includes user authentication and a responsive UI built with Tailwind CSS and Radix UI components.

## Features

*   **Next.js 16.0.0**: A React framework for building full-stack web applications.
*   **Apollo Client**: For efficient data fetching and management with GraphQL.
*   **Authentication**: Implemented using `iron-session` for secure user sessions.
*   **Character Gallery**: Displays a list of characters with details, fetched from a GraphQL endpoint.
*   **Responsive UI**: Styled with Tailwind CSS and utilizes Radix UI components for accessibility and modern design.
*   **TypeScript**: Entire codebase is written in TypeScript for type safety.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

*   Node.js (v18 or higher recommended)
*   pnpm (or npm/yarn)

### Installation

1.  Clone the repository:
    ```bash
    git clone [repository-url]
    cd challenge-v3.5
    ```
2.  Install dependencies:
    ```bash
    pnpm install
    # or
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application. The page will automatically reload as you make changes.

## Project Structure

*   `app/`: Contains Next.js pages, layouts, and API routes.
    *   `app/page.tsx`: The main entry point, displaying the login component.
    *   `app/layout.tsx`: Root layout for the application, including `Header` and `ApolloWrapper`.
    *   `app/ApolloWrapper.tsx`: Configures and provides the Apollo Client to the application.
    *   `app/actions.ts`: Server actions for various functionalities.
    *   `app/information/page.tsx`: Information page.
*   `auth/`: Authentication-related utilities.
    *   `auth/lib.ts`: Authentication logic.
    *   `auth/use-session.ts`: Hook for managing user sessions.
*   `components/`: Reusable React components.
    *   `components/Login.tsx`: User login interface.
    *   `components/Gallery.tsx`: Fetches and displays character data.
    *   `components/CharacterCard.tsx`: Displays individual character details.
    *   `components/Header.tsx`: Application header.
    *   `components/PaginationControls.tsx`: Controls for navigating through character pages.
    *   `components/UserControls.tsx`: User-related controls (e.g., logout).
    *   `components/InformationSection.tsx`: Section for displaying additional information.
    *   `components/ui/`: UI components built with Radix UI and styled with Tailwind CSS.
*   `lib/`: Utility functions.
    *   `lib/utils.ts`: General utility functions.
*   `public/`: Static assets.

## Learn More

To learn more about Next.js, take a look at the following resources:

*   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
*   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
