"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "@/redux/store";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import theme from "@/styles/theme";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </Provider>
  );
};
