import { MantineProvider } from "@mantine/core";
// styles
import "../global.scss";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';


import { PropsWithChildren } from "react";
import { theme } from "./theme";

export function Provider({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <MantineProvider theme={theme}>
        {children}
      </MantineProvider>
    </>
  );
}
