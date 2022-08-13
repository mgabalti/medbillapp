import React from "react";
import BannerLeft from "../components/BannerLeft";
import Counter from "../sections/Counter";
import ServiesSection from "../sections/ServicesSection";
function Career() {
  return (
    <div>
      <BannerLeft heading="Career" />
      <ServiesSection />
      <Counter />
      {/* <Footer /> */}
    </div>
  );
}

export default Career;
