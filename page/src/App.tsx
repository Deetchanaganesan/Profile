import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Page from "./Page";
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Page />
      </div>
    </ChakraProvider>
  );
}

export default App;
