import { useState, useEffect } from "react";
import Nigeria from "../assets/icons/Nigeria.svg";
import germany from ".././assets/icons/germany.png";
import ghana from ".././assets/icons/ghana.png";
import finland from ".././assets/icons/finland.png";
import google from ".././assets/icons/google.png";
import instagram from ".././assets/icons/Instag.svg";
import facebook from ".././assets/icons/fbk.svg";
import linkedin from ".././assets/icons/linked.svg";

import Uk from ".././assets/icons/UK.png";
import axios from "axios";

const UseDatas = () => {
  const [graphData, setGraphData] = useState([]);
  const [location, setLocation] = useState([]);
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMainData();
  }, []);

  const URL = "https://fe-task-api.mainstack.io/";

  const fetchMainData = () => {
    setLoading(true);
    axios
      .get(URL)
      .then((res) => {
        setGraphData(res.data?.graph_data?.views);
        setLocation(res.data?.top_locations);
        setSources(res.data?.top_sources);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const flags = [Nigeria, germany, ghana, finland, Uk];
  const socials = [google, instagram, facebook, linkedin];
  // console.log("location", location);
  // console.log("sources", sources);
  // console.log("graph", graphData);

  return {
    graphData,
    location,
    sources,
    flags,
    socials,
  };
};

export default UseDatas;
