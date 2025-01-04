import React from "react";
import ApiTest from "./_components/ApiTest";
import { Geolocation } from "./_components/Geolocation";

const page = () => {
  return (
    <>
      <ApiTest />
      <Geolocation />
    </>
  );
};

export default page;
