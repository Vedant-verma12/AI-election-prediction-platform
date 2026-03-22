# AI Election Prediction Platform

An AI-powered platform for predicting and analyzing Indian election outcomes using advanced machine learning models, real-time data analysis, and interactive visualizations.

## 🚀 Features

- **AI-Powered Predictions**: Advanced machine learning models for accurate election forecasting
- **Interactive Dashboard**: Real-time election data visualization with charts and graphs
- **Election Map**: Interactive map showing constituency-wise predictions
- **News Analysis**: AI-driven sentiment analysis of election news
- **Political Alliances**: Dynamic alliance formation simulator
- **Leader Analytics**: Comprehensive analysis of political leaders and their performance
- **Election Simulator**: Scenario-based election outcome simulation
- **AI Chat Assistant**: Intelligent chatbot for election-related queries
- **Dark/Light Theme**: Modern UI with theme switching capability

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Charts**: Recharts for data visualization
- **Maps**: React India Map for geographical data
- **State Management**: Zustand for global state
- **Data Fetching**: TanStack Query for server state management
- **Routing**: React Router v6
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Testing**: Vitest with Testing Library
- **Backend**: Supabase (functions for AI chat)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "AI- Election prediction platform"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🧪 Testing

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── AIChatbox.tsx   # AI chat interface
│   ├── Layout.tsx      # Main layout component
│   ├── Navbar.tsx      # Navigation component
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx        # Dashboard page
│   ├── Prediction.tsx  # Prediction models
│   ├── MapPage.tsx     # Interactive map
│   ├── Simulator.tsx   # Election simulator
│   └── ...
├── context/            # React contexts
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── data/               # Static data files
└── utils/              # Helper functions
```

## 🎨 Design System

The project uses a custom design system with:
- **Colors**: Indian tricolor theme (saffron, white, green)
- **Typography**: Modern font stack with proper hierarchy
- **Components**: Accessible, reusable UI components
- **Themes**: Dark and light mode support

## 🤖 AI Features

- **Prediction Models**: Machine learning algorithms for seat predictions
- **Sentiment Analysis**: Real-time analysis of news and social media
- **Chat Assistant**: AI-powered conversational interface
- **Scenario Simulation**: What-if analysis for different election scenarios

## 📊 Data Sources

- Election Commission of India data
- Historical election results
- News APIs for real-time updates
- Social media sentiment analysis
- Public opinion polls

## 🔒 Authentication

User authentication system with:
- Login/Signup functionality
- Secure session management
- User profile management

## 🚀 Deployment

The application can be deployed to:
- Vercel
- Netlify
- AWS Amplify
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Election Commission of India for data
- Open source community for amazing tools
- Contributors and maintainers

---

**Note**: This is an educational/demo project. Election predictions are for informational purposes only and should not be considered as definitive outcomes.
