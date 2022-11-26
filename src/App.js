import { useEffect, useState, CSSProperties } from "react";
import Layout from "./components/Layout/Layout";
import { FallingLines } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36d7b7");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <FallingLines
            color={color}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Layout />
      )}
    </>
  );
}

export default App;
