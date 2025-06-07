# 🚀 NestJS WebSocket Application

A real-time WebSocket application built with NestJS and Socket.IO, demonstrating bidirectional communication between server and client.

## ✨ Features

- Real-time bidirectional communication using WebSocket
- CORS support for secure cross-origin requests
- Automatic reconnection handling
- Echo server functionality
- Connection status monitoring
- Clean and modern architecture using NestJS

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone git@github.com:maslechkin86/nest-ws-app.git
cd nest-ws-app
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running the Application

1. Start the NestJS WebSocket server:
```bash
npm run start:dev
```

2. In a new terminal, start the HTTP server for the client:
```bash
npx http-server -p 8080
```

3. Open your browser and navigate to:
```
http://localhost:8080/test.html
```

## 💻 Development

The application consists of two main parts:

### 🔌 Server (NestJS)
- WebSocket Gateway implementation
- Connection handling
- Message broadcasting
- CORS configuration

### 🌐 Client (HTML/JavaScript)
- WebSocket connection management
- User interface for sending/receiving messages
- Connection status display

## 📜 Available Scripts

- `npm run start:dev` - Start the server in development mode with hot-reload
- `npm run build` - Build the application
- `npm run start:prod` - Start the server in production mode
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Lint the codebase

## 🧪 Testing the WebSocket Connection

1. Open your browser's developer tools (F12 or right-click -> Inspect)
2. Navigate to the Console tab
3. Click the "Connect" button in the UI
4. You should see:
   - Connection success message
   - Welcome message from the server
   - Real-time message echo responses

## 📁 Project Structure

```
nest-ws-app/
├── src/
│   ├── events.gateway.ts    # WebSocket gateway implementation
│   ├── app.controller.ts    # HTTP controller
│   ├── app.service.ts       # Application service
│   └── main.ts             # Application entry point
├── test/
│   └── app.e2e-spec.ts     # End-to-end tests
├── test.html               # WebSocket client interface
└── package.json           # Project dependencies and scripts
```

## 🛠️ Technologies Used

- NestJS - Progressive Node.js framework
- Socket.IO - Real-time bidirectional communication
- TypeScript - Type-safe JavaScript
- Jest - Testing framework
- ESLint & Prettier - Code quality and formatting

## 📄 License

This project is unlicensed.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request