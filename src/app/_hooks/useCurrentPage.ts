// 現在のページ番号を管理するHooks
import { useState } from "react";

const useCurrentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return { currentPage, setCurrentPage };
};

export default useCurrentPage;
