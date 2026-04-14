import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Bookmarks from "./pages/Bookmarks";
import Layout from "@components/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="random" element={<Random />} />
        <Route path="bookmarks" element={<Bookmarks />} />
      </Route>
    </Routes>
  );
}
