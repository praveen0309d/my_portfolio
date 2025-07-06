function VisitorCount() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        background: "rgba(0, 255, 198, 0.05)",
        border: "1px solid #00ffc6",
        borderRadius: "12px",
        padding: "10px 20px",
        marginTop: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#00ffc6",
        fontSize: "1rem"
      }}
    >
      <span>👁️ Visitors:</span>
      <img
        src="https://visitor-badge.laobi.icu/badge?page_id=praveen0309d.my_portfolio"
        alt="Visitor Count"
        style={{
          height: "24px",
          background: "transparent",
          borderRadius: "6px",
          padding: "2px 6px"
        }}
      />
    </div>
  );
}

export default VisitorCount;
