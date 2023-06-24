import React from "react";
import Gallery from "./Gallery/Gallery";
import { Layer } from "@iso/fp_components/utility/utility";

import { Input } from "antd";

const ImageLibrary = () => {
  return (
    <div className="flex justify-center">
      <div>
        <Header />
        <Layer height="20px" />
        <SearchBar />
        <Layer height="20px" />
        <Notification />
        <Layer height="20px" />
        <Gallery />
      </div>
    </div>
  );
};

export default ImageLibrary;

function Header() {
  return <div>Free Library</div>;
}
function SearchBar() {
  return <Input style={{ width: "400px" }} />;
}
function Notification() {
  return (
    <div
      style={{
        backgroundColor: "#fff4db",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <span>
        Starting April 21, PSD, AI, and TIFF files will no longer be accepted
      </span>
    </div>
  );
}
