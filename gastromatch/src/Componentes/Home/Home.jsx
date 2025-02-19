import HomeSection from "./Sections/HomeSection";
import ServicesSection from "./Sections/ServicesSection";
import TopRestaurantsSection from "./Sections/TopRestaurantsSection";
import FadeInOnScroll from "./Subcomponentes/FadeInOnScroll";
import React from "react";

export default function Home() {
  const Sections = [
    { name: "HomeSection", component: HomeSection },
    { name: "ServicesSection", component: ServicesSection },
    { name: "TopRestaurantsSection", component: TopRestaurantsSection },
  ];

  const ShapeDividers = [
    { name: "shapedividers_com-4450" },
    { name: "shapedividers_com-117" },
    { name: "shapedividers_com-8372" },
  ];

  return (
    <>
      {Sections.map((section, index) => {
        const SectionComponent = section.component;
        return (
          <React.Fragment key={section.name}>
            <FadeInOnScroll key={section.name}>
              <SectionComponent />
            </FadeInOnScroll>

            {index < ShapeDividers.length && (
              <FadeInOnScroll>
                <div className={ShapeDividers[index].name}></div>
              </FadeInOnScroll>
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}
