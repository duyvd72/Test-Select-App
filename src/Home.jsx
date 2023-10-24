import { Button } from "antd";
import React from "react";

function Home() {
  const openNewWindow = (path, title) => {
    const params = "left=100, top=100, width=1300, height=700";
    const newWindow = window.open(`/${path}`, "_blank", params);

    function changeTitle() {
      newWindow.document.title = `${title}`;
      // newWindow.removeEventListener("load", changeTitle);
    }

    newWindow.addEventListener("load", changeTitle);
  };

  return (
    <div style={{ margin: "20px" }}>
      <Button
        type="primary"
        onClick={() => openNewWindow("flight-log", "Flight Log")}
        style={{ marginRight: "20px" }}
      >
        Flight Log
      </Button>
      <Button
        type="primary"
        onClick={() => openNewWindow("sector-log", "Sector Log")}
      >
        Sector Log
      </Button>
    </div>
  );
}

export default Home;
