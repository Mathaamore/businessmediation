import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";
import Prog from "../components/Prog";

const About = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  });

  return (
    <>
      {visible && <Loading />}
      {!visible && <Prog />}
    </>
  );
};

export default About;
