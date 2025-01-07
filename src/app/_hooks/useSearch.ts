import { useState } from "react";
import { useRouter } from "next/navigation";
import { searchFormHooks } from "../_interfaces/searchFormHooksInterface";

/**
 * 検索フォームを管理するHooks
 * @param latitude 取得した緯度
 * @param longitude 取得した経度
 * @returns 検索範囲、検索範囲更新関数、検索ワード、検索ワード更新関数、ページ遷移用関数
 */
export const useSearchForm = ({
  latitude,
  longitude,
}: {
  latitude: number | null;
  longitude: number | null;
}): searchFormHooks => {
  // stateの定義
  const [selectedRange, setSelectedRange] = useState("");
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  /**
   * 検索ボタンをクリックしたときに発火する、ページ遷移関数
   * @param event
   * @returns
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // 緯度経度が取得出来なかった場合
    // Alertを出し送信をキャンセル
    if (!latitude || !longitude) {
      alert("現在地が取得されていません");
      return;
    }

    // queryの定義
    // 入力されたデータと取得した位置情報を遷移先に送る
    const query = new URLSearchParams({
      range: selectedRange,
      keyword,
      // latitudeとlongitudeをstringに変換
      latitude: latitude.toString(),
      longitude: longitude.toString(),
    });

    // ページを遷移
    router.push(`/search_list?${query.toString()}`);
  };

  return {
    selectedRange,
    setSelectedRange,
    keyword,
    setKeyword,
    handleSubmit,
  };
};
