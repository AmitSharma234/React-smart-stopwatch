import { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    // Prevent multiple intervals
    if (timerRef.current !== null) return;

    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>⏱ Stopwatch</h1>

        <div style={styles.timeBox}>
          {time} <span style={styles.sec}>sec</span>
        </div>

        <div style={styles.buttons}>
          <button style={styles.start} onClick={start}>Start</button>
          <button style={styles.stop} onClick={stop}>Stop</button>
          <button style={styles.reset} onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  card: {
    background: "#020617",
    padding: "32px",
    borderRadius: "16px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
    border: "1px solid #1e293b"
  },
  title: {
    color: "#e5e7eb",
    marginBottom: "20px",
    fontSize: "22px",
    fontWeight: "600"
  },
  timeBox: {
    fontSize: "48px",
    fontWeight: "700",
    color: "#38bdf8",
    marginBottom: "24px"
  },
  sec: {
    fontSize: "16px",
    color: "#94a3b8",
    marginLeft: "4px"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px"
  },
  start: {
    flex: 1,
    background: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500"
  },
  stop: {
    flex: 1,
    background: "#dc2626",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500"
  },
  reset: {
    flex: 1,
    background: "#334155",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500"
  }
};
