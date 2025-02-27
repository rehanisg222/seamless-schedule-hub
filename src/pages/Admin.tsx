
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="*" element={<AdminDashboard />} />
    </Routes>
  );
};

export default Admin;
