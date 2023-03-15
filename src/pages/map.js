import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Map from "../components/Map";

const Mappage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  });

  return (
    <>
      {visible && <Loading />}
      {!visible && <Map />}
    </>
  );
};

export default Mappage;
