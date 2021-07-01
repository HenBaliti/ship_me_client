import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
// import HomePage from "./Pages/HomePage";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #c2e59c, #64b3f4);
`;

function App() {
  return (
    <AppContainer className="App">
      <AccountBox />
      {/* <HomePage /> */}
    </AppContainer>
  );
}

export default App;
