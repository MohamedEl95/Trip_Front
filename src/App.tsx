import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/atoms/errorBoundary";
import ListRoutes from "./routes";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import { Notification } from "./components/atoms/notification.tsx";

function App() {

  return (
      <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
              <ListRoutes />
              <Notification />
            </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
  );
}

export default App;
