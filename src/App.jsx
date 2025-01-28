import Header from "./components/Header";
import Main from "./components/Main";
import Layout from "./layout/DefaultLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return
  <>
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </>
}
export default App