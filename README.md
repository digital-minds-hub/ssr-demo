# SSR Demo with Next.js

This repository contains the full code for a Server-Side Rendering (SSR) implementation using Next.js.

## Project Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ssr-demo.git
    cd ssr-demo
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm run dev
    ```

Your app will be live at [http://localhost:3000](http://localhost:3000).

## Key Features

- **SSR with Next.js**: Fetches data server-side and renders HTML for better SEO and performance.
- **Streaming SSR**: Implements streaming SSR for faster TTFB by sending HTML in chunks.
- **Dynamic Routes**: Demonstrates how to handle dynamic routes with SSR.
- **ISR**: Combines SSR with Incremental Static Regeneration (ISR) to optimize caching and performance.

## Folder Structure

- **`src/app/page.js`**: Main page with SSR implementation.
- **`src/app/api/stream/route.jsx`**: Streaming SSR demo.
- **`src/app/product/[id]/page.jsx`**: Dynamic route with SSR for personalized content.

## License

This project is licensed under the MIT License.
