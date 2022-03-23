import AllUsers from "./Component/AllCustomers";
import AddUser from "./Component/AddCustomer";
import EditUser from "./Component/EditCustomer";
import NavBar from "./Component/Navbar";
import ImageGalleryLightbox from "./Component/ImageGallery";
import CustomPaginationActionsTable from "./Component/TablePagination";
import NotFound from "./Component/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<AllUsers />} />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/gallery" element={<ImageGalleryLightbox/>} />
        <Route exact path="/paginationTable" element={<CustomPaginationActionsTable/>} />
        <Route exact path="/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
