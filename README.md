# Website Template

A modern web application built with Next.js, Shadcn UI, Tailwind CSS, and Supabase.

## Technologies

- **Frontend**: Next.js, Shadcn UI components, Tailwind CSS
- **Backend**: Supabase for authentication and data
- **API Integrations**: Structure in place for n8n, Klaviyo, and Kudosity APIs

## Features

- User authentication with Supabase
- Protected routes
- Clean and modern UI with Shadcn components
- Responsive design with Tailwind CSS
- Organized project structure for easy API integration

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                # Next.js app directory
│   ├── auth/           # Authentication routes
│   ├── dashboard/      # Protected dashboard routes
│   └── login/          # Login page
├── components/         # React components
│   ├── auth/           # Authentication components
│   ├── dashboard/      # Dashboard components
│   └── ui/             # Shadcn UI components
├── lib/                # Utility functions and API clients
│   ├── api/            # API integration modules
│   │   ├── n8n/        # n8n API client
│   │   ├── klaviyo/    # Klaviyo API client
│   │   └── kudosity/   # Kudosity API client
│   └── supabase.ts     # Supabase client
└── middleware.ts       # NextAuth middleware for route protection
```

## Development

### Environment Setup

- **Development**: `.env.local` - Local development environment
- **Testing**: `.env.test` - Testing environment
- **Production**: `.env.production` - Production environment

## API Integrations

The project is structured to easily integrate with the following APIs:

- **n8n**: Structure in place at `lib/api/n8n/`
- **Klaviyo**: Structure in place at `lib/api/klaviyo/`
- **Kudosity**: Structure in place at `lib/api/kudosity/`

## License

MIT
