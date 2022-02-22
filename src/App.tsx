import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import Dashboard from "./pages/Dashboard";
import Store from "./pages/Store";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout>
        <Store />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
