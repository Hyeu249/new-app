import React from "react";
import { Layer, Center, Line } from "@iso/fp_components/utility/utility";

const data = [
  {
    id: 1,
    name: "Snake_Pattern_1",
    type: "image/jpeg",
    size: "17.39 MB",
    resolution: "6000 x 6000 @ 72 dpi",
  },
  {
    id: 1,
    name: "Snake_Pattern_2",
    type: "image/jpeg",
    size: "17.39 MB",
    resolution: "6000 x 6000 @ 72 dpi",
  },
  {
    id: 1,
    name: "Snake_Pattern_3",
    type: "image/jpeg",
    size: "17.39 MB",
    resolution: "6000 x 6000 @ 72 dpi",
  },
  {
    id: 1,
    name: "Snake_Pattern_4",
    type: "image/jpeg",
    size: "17.39 MB",
    resolution: "6000 x 6000 @ 72 dpi",
  },
  {
    id: 1,
    name: "Snake_Pattern_5",
    type: "image/jpeg",
    size: "17.39 MB",
    resolution: "6000 x 6000 @ 72 dpi",
  },
];

function Gallery() {
  const imageWidth = 254;
  const width = imageWidth * 4 + 40;

  return (
    <div>
      <Total about="78" />
      <Line />
      <Layer height="20px" />
      <Center>
        <Paginate />
      </Center>
      <Layer height="20px" />
      <div className="flex justify-between flex-wrap" style={{ width }}>
        {data.map((item, index) => (
          <ImageFrame key={item.id} {...item} width={imageWidth} />
        ))}
      </div>
    </div>
  );

  function Total({ about }) {
    return <div>Files in Sample files ({about})</div>;
  }

  function ImageFrame({ width }) {
    return (
      <div
        style={{
          width: width + "px",
          height: "354px",
          borderRadius: "5px",
          border: "1px solid #d0d0d0",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        <Exposer />
        <Spec />
      </div>
    );
    function Exposer() {
      return (
        <div
          style={{
            height: "210px",
            backgroundColor: "orange",
            borderRadius: "5px",
          }}
        >
          Exposer
        </div>
      );
    }
    function Spec() {
      return <div>Spec</div>;
    }
  }
}

export default Gallery;

function Paginate() {
  return (
    <div className="flex">
      <Square page="1" />
      <Square page="2" />
      <Square page="3" />
      <Square page="4" />
    </div>
  );

  function Square({ page }) {
    const [isHover, setIssHover] = React.useState(false);
    return (
      <div
        className="pointer"
        style={{
          width: "35px",
          height: "35px",
          lineHeight: "35px",
          textAlign: "center",
          marginRight: "3px",
          borderRadius: "5px",
          border: `1px solid ${isHover ? "black" : "grey"}`,
        }}
        onMouseEnter={() => setIssHover(true)}
        onMouseLeave={() => setIssHover(false)}
      >
        {page}
      </div>
    );
  }
}
