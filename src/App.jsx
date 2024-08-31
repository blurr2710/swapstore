import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import AuthPage from "./pages/AuthPage/AuthPage";
import InboxPage from "./pages/InboxPage/InboxPage"
function App() {

  return (
    <>
    <Routes>
      <Route path = '/' element={<HomePage/>}/>
      <Route path = '/auth' element={<AuthPage/>}/>
      <Route path = '/inbox' element={<InboxPage/>}/>
    </Routes>
    </>
  )
}

export default App
