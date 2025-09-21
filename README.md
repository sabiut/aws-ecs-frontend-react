# Next.js Frontend Application

A Next.js TypeScript frontend application for the AWS ECS three-tier architecture.

## Features

- Next.js 15 with App Router
- TypeScript support
- Tailwind CSS for styling
- Docker containerization
- Health check endpoints
- Backend API integration
- AWS ECS deployment ready

## Local Development

### Prerequisites

- Node.js 20+
- npm or yarn
- Docker (optional)

### Setup

1. Clone the repository:
```bash
git clone git@github.com:sabiut/aws-ecs-frontend-react.git
cd aws-ecs-frontend-react
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env.local file
BACKEND_URL=http://localhost:8000
```

4. Run development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000

## Docker Development

1. Build and run with Docker:
```bash
docker build -t nextjs-frontend .
docker run -p 8080:8080 nextjs-frontend
```

## API Endpoints

- `GET /api/health` - Health check endpoint for load balancer
- Frontend connects to Django backend at `/health/` and `/api/` endpoints

## Environment Variables

- `BACKEND_URL`: URL of the Django backend API (default: http://localhost:8000)

## Features

### Backend Integration
The frontend automatically checks the backend status and displays:
- Connection status (connected/disconnected/error)
- Backend URL configuration
- Real-time status updates

### Production Configuration
- Standalone output for Docker deployment
- Health check endpoint for ECS
- Production-optimized build

## Deployment

This application is configured for deployment to AWS ECS using the CI/CD pipeline. The GitHub Actions workflow will:

1. Run tests and linting
2. Build optimized production bundle
3. Build Docker image
4. Push to Amazon ECR
5. Deploy to ECS Fargate
6. Perform health checks

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

The application follows Next.js App Router patterns:
- `src/app/page.tsx` - Main page component
- `src/app/api/health/route.ts` - Health check API route
- `next.config.ts` - Next.js configuration
- `Dockerfile` - Container configuration

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## License

MIT License