import { useTranslation } from "react-i18next";

export default function MultiLanguages() {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        margin: "20px",
        padding: "15px",
        width: "300px",
        display: "inline-flex",
        border: "2px solid lightblue",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>{t("greeting")}</h3>
        <label>{t("proverb")}</label>
      </div>
      <div
        style={{
          display: "flex",
          columnGap: "12px",
        }}
      >
        <button
          type="button"
          onClick={() => i18n.changeLanguage("en")}
          style={{
            width: "70px",
            height: "30px",
            borderRadius: "5px",
          }}
        >
          英語
        </button>
        <button
          style={{
            width: "70px",
            height: "30px",
            borderRadius: "5px",
          }}
          type="button"
          onClick={() => i18n.changeLanguage("ja")}
        >
          日本語
        </button>
      </div>
    </div>
  );
}
