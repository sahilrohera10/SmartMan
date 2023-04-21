import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Output from "./Output";

export default function GetApi() {
  const [api, setApi] = useState();
  const [resp, setResp] = useState();

  const getApiRun = () => {
    fetch(`${api}`)
      .then((resp) => resp.text())
      .then((text) => {
        setResp(text);
        console.log("data=>", text);
      });
  };

  return (
    <div>
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
          value={api}
          onChange={(e) => setApi(e.target.value)}
          width="50vw"
          placeholder="Enter Api"
        />
        <Button onClick={() => getApiRun()} colorScheme="blue">
          Run
        </Button>
      </div>

      <Output resp={resp} />
    </div>
  );
}
