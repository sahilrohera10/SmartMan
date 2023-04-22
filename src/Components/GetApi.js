import React, { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Output from "./Output";
import cat from "../Assests/catgif.gif";

export default function GetApi() {
  const [api, setApi] = useState();
  const [resp, setResp] = useState();
  const [showElement, setShowElement] = React.useState(false);

  const getApiRun = () => {
    fetch(`${api}`)
      .then((resp) => resp.text())
      .then((text) => {
        setResp(text);
        setShowElement(true);
        // text ? setShowElement(true) : "";
        // console.log("data=>", text);
      });
  };

  // if (!resp) setShowElement(false);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 2000);
  }, [showElement]);

  return (
    <div>
      {showElement ? (
        <div
          style={{
            margin: "auto",
            position: "absolute",
            // left: "40%",
            right: "2%",
            zIndex: "100",
          }}
        >
          <img src={cat} alt="" />
        </div>
      ) : (
        ""
      )}

      <div
        style={{
          width: "60vw",
          height: "15vh",
          border: "1px solid black",
          padding: "30px",
          margin: "auto",
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Input
          color="white"
          value={api}
          onChange={(e) => setApi(e.target.value)}
          width="50vw"
          placeholder="Enter Api"
        />
        <Button onClick={() => getApiRun()} colorScheme="blue">
          Run
        </Button>
      </div>

      <Output resp={resp} setShowElement />
    </div>
  );
}
