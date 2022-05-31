import { ChakraProvider } from "@chakra-ui/react";
import App from "App";
import { theme } from "configurations";
import { ReactNode } from "react"
import { QueryCache, QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
});

export const AppProvider = ({ children }: { children?: ReactNode }) => {
  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            {
              children != null ? children : <App />
            }
          </ChakraProvider>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}