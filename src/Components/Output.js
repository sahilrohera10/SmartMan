import React, { useEffect } from "react";
import { Divider } from "@chakra-ui/react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript"; // Language
import "prismjs/themes/prism-okaidia.css"; // Theme
// import ReactPrismjs from "@uiw/react-prismjs";
// import "prismjs/components/prism-javascript";
// import "prismjs/themes/prism-coy.css";

export default function Output({ resp }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div>
      <div
        style={{
          border: "1px solid white",
          width: "85vw",
          height: "auto",
          margin: "auto",
          marginTop: "150px",
          overflow: "auto",
        }}
      >
        <p
          style={{
            textAlign: "left",
            marginLeft: "20px",
            margin: "6px",
            color: "white",
          }}
        >
          console
        </p>
        {/* <Divider /> */}
        <div id="output">
          <pre style={{ overflow: "auto", height: "35vh" }}>
            <code className="language-javascript">{resp}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
