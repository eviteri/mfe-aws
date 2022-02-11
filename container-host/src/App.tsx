import React from "react";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>Container</div>
    </ThemeProvider>
  );
}

export default App;
