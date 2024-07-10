# Aquaponic Monitoring System

   Web application to manage IoT modules measuring water parameters in an aquaponic system using ReactJS, Redux, and Socket.IO.

## Features

1. **Module List Page**:
   - Displays available modules with name, availability, and target temperature.
   - Real-time temperature updates.

2. **Module Details Page**:
   - Detailed module information and editing (name, description, target temperature).
   - Historical temperature data display.
   - Temperature color-coded based on proximity to target.

3. **Real-time Temperature Display**

   - Shows the current water temperature for each module.
   - Uses WebSocket connection (socket.io-client) to update temperatures in real-time.

4. **Historical Temperature Data**:
   - Chart for historical data, selectable time range and mode (hourly/daily).

## Technologies Used

   - **ReactJS**: Frontend library for building user interfaces.
   - **Redux**: State management library.
   - **React Router**: Routing library for navigation.
   - **Axios**: HTTP client for API requests.
   - **Socket.IO Client**: For real-time communication with WebSocket server.
   - **Chart.js**: Charting library for historical data visualization.

## Setup Backend
   Clone the repository and install dependencies:
   ```bash
   git clone https://gitlab.com/piotrdurniat/recruitment-luna.git
   cd backend
   npm install
   ```
   Run the application:
   ```bash
   npm run start
   ```
   The application will be available at `http://localhost:3001/`.

## Setup Frontend
   Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/Zjadlbyscos/aquaponics-app.git
   cd aquaponics-app
   npm install
   ```
   Run the application:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000/`.

## Contributors
   - github: [Zuzanna Maciejczyk](https://www.github.com/Zjadlbyscos)
