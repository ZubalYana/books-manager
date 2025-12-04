import "./main.css";
import { useState } from "react";
import { MenuLayout } from "./components/MenuLayout/MenuLayout";
import { BrowsePage } from "./components/pages/BrowsePage/BrowsePage";
import { LikedBooksPage } from "./components/pages/LikedBooksPage/LikedBooksPage";
import { ReadingListPage } from "./components/pages/ReadingListPage/ReadingListPage";

export function Main() {
  const [page, setPage] = useState("browse");

  return (
    <MenuLayout activePage={page} onSelectPage={setPage}>
      {page === "browse" && <BrowsePage />}
      {page === "reading" && <ReadingListPage />}
      {page === "liked" && <LikedBooksPage />}
    </MenuLayout>
  );
}
