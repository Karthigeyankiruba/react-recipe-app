import { AnimatePresence } from "framer-motion";
import Category from "./components/Category";
import Header from "./components/Header";
import Pages from "./pages/Pages";


function App() {
  return (
    <div className="App">
        <AnimatePresence exitBeforeEnter>
      <Header />
      <Category />
      <Pages/>
      </AnimatePresence>
    </div>
  );
}

export default App;
