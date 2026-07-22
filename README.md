# Intership News Project

A modern, responsive news portal web application built with **React** and **Vite**. This project consumes data from the **Hermes MNC Plus API**, providing users with the latest trending news and articles across various categories.

## 🚀 Features

* **Latest News Updates**: Real-time news fetched directly from multiple top Indonesian news outlets.
* **Categorized Content**: Browse news by categories such as technology, economy, sports, lifestyle, and more.
* **Topic Browsing**: Dedicated pages for specific news topics and personalized interest topics.
* **News Details**: Clean and readable view for detailed news articles.
* **Responsive Design**: Optimized for viewing on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

* **Frontend Framework**: [React.js](https://react.dev/) (v18)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Routing**: [React Router DOM](https://reactrouter.com/) (v7)
* **Styling**: Standard CSS (Custom designs using modern UI/UX principles)

## 📂 Project Structure

```text
Intership-News-Project/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images, icons, and fonts
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API integration and data fetching
│   ├── templates/          # Layout wrappers and page templates
│   ├── utils/              # Helper functions and utilities
│   ├── views/              # Main page components (Home, Topic, DetailNews, etc.)
│   ├── App.jsx             # Main application component and routing
│   ├── main.jsx            # React application entry point
│   └── index.css           # Global stylesheet
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## 🗺️ Application Routing

The application uses `react-router-dom` for client-side navigation.

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `Home` | Landing page displaying the main news feed. |
| `/category/:slug` | `Home` | Filtered news feed based on a specific category. |
| `/topicpage/:slug` | `Topic` | Dedicated page for a specific news topic. |
| `/interest-topic` | `InterestTopic`| Page for users to set or view personalized topics. |
| `/detail/:id` | `DetailNews` | Displays the full content of a selected news article. |

## 📡 API Reference

This project uses the **Hermes MNC Plus API** to fetch news data.

* **Base URL**: `https://hermes.mncplus.id/news-v2/api/v1`
* **Authentication**: Required via `apikey` header (configured in `.env`)
* **Default Method**: `GET`
* **Response Format**: `JSON`

### Available Endpoints (Examples)

* `GET /aggregator/pages/home?category_id={id}&page={page}&limit={limit}`: Fetches news articles for a specific category.
* `GET /tags/trending?limit={limit}`: Fetches currently trending news tags/topics.
* `GET /news/{id}`: Retrieves detailed information about a specific news article.

For configuration, ensure you have set the `VITE_API_BASE_URL` and `VITE_API_KEY` in your `.env` file.

## ⚙️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable) or download the project files.
2. **Navigate to the project directory:**
   ```bash
   cd Intership-News-Project
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App Locally

To start the development server:

```bash
npm run dev
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) (or the port provided by Vite) to view it in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The compiled output will be available in the `dist` folder. You can preview the production build locally using:

```bash
npm run preview
```

## 📝 Scripts

* `npm run dev`: Starts the Vite development server.
* `npm run build`: Compiles TypeScript (if used) and bundles the app for production.
* `npm run lint`: Runs ESLint to analyze the code for potential errors and styling issues.
* `npm run preview`: Bootstraps a local web server to serve the production build from the `dist` directory.
