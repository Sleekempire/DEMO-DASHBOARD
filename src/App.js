import "./App.css";
import Topbar from "./Component/Topbar";
import Sidebar from "./Component/sidebar";
import Home from "./Component/home";
import Userlist from "./pages/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/user";
import NewUser from "./pages/newUser";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="contaioner">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>

        <Routes>
          <Route exact path="/UserList" element={<Userlist />} />
        </Routes>

        <Routes>
          <Route exact path="/newUser" element={<NewUser />} />
        </Routes>

        <Routes>
          <Route exact path="/ProductList" element={<ProductsList />} />
        </Routes>

        <Routes>
          <Route exact path="/Product/:productId" element={<Product />} />
        </Routes>

        <Routes>
          <Route exact path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
