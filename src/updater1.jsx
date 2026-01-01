import { useState } from "react";

function UpdaterCounterInline() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(precount => precount + 1);
    setCount(precount => precount + 1);
  };

  const decrement = () => {
    setCount(precount => precount - 1);
    setCount(precount => precount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div
        style={{
          width: "280px",
          margin: "50px auto",
          padding: "25px",
          borderRadius: "15px",
          background: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          textAlign: "center",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
            fontSize: "22px",
            fontWeight: "600"
          }}
        >
          React Updater Counter
        </h2>

        <p
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333"
          }}
        >
          {count}
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          <button
            onClick={increment}
            style={{
              padding: "8px 18px",
              background: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
              transition: "0.2s"
            }}
          >
            +
          </button>

          <button
            onClick={reset}
            style={{
              padding: "8px 18px",
              background: "#FF9800",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
              transition: "0.2s"
            }}
          >
            Reset
          </button>

          <button
            onClick={decrement}
            style={{
              padding: "8px 18px",
              background: "#F44336",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
              transition: "0.2s"
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default UpdaterCounterInline;
