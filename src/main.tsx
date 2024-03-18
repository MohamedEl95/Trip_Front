import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.tsx";
import { Provider } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ReactQueryDevtools } from "react-query/devtools";

const persistor = persistStore(store);
import { QueryClient, QueryClientProvider, setLogger } from "react-query";
setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 10 * 1 } },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <App />
          </QueryClientProvider>
        </LocalizationProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
