import React from "react";
import CooperativeHeader from "../components/CooperativePage/CooperativeHeader";
import CooperativeProducts from "../components/CooperativePage/CooperativeProducts";
import CooperativeReviews from "../components/CooperativePage/CooperativeReviews";
import LocaDesc from "../components/CooperativePage/LocaDesc";

const CooperativePage =  () => {
  return (
    <>
    <CooperativeHeader/>
    <LocaDesc/>
    <CooperativeProducts/>
    <CooperativeReviews/>
    </>
  )
}

export default CooperativePage;