import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import jaTranslation from "./locales/jp.json";

// 翻訳リソースを定義
const resources = {
  en: {
    translation: enTranslation,
  },
  ja: {
    translation: jaTranslation,
  },
};

// i18nの初期化
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "ja", // デフォルトの言語を設定
  returnEmptyString: false, // 空文字での定義を許可に
  interpolation: {
    // 翻訳された文字列内のHTMLやReactコンポーネントのエスケープを無効化
    escapeValue: false,
  },
});

export default i18n;
