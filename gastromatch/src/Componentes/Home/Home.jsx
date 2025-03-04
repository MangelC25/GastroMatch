import React, { Suspense, lazy, useMemo } from "react";
import FadeInOnScroll from "./Subcomponentes/FadeInOnScroll";

// 🔹 Cargamos los componentes de forma diferida (Lazy Loading)
const HomeSection = lazy(() => import("./Sections/HomeSection"));
const ServicesSection = lazy(() => import("./Sections/ServicesSection"));
const TopRestaurantsSection = lazy(() =>
  import("./Sections/TopRestaurantsSection")
);
const TopFoodWeek = lazy(() => import("./Sections/TopFoodWeek"));

export default function Home() {
  // 🔹 Usamos useMemo para evitar que estos arrays se reconstruyan en cada render
  const Sections = useMemo(
    () => [
      { name: "HomeSection", component: HomeSection },
      { name: "ServicesSection", component: ServicesSection },
      { name: "TopRestaurantsSection", component: TopRestaurantsSection },
      { name: "TopFoodWeek", component: TopFoodWeek },
    ],
    []
  );

  const ShapeDividers = useMemo(
    () => [
      { name: "shapedividers_com-4450" },
      { name: "shapedividers_com-117" },
      { name: "shapedividers_com-8372" },
      { name: "shapedividers_com-2215" },
    ],
    []
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Sections.map((section, index) => {
        const SectionComponent = section.component;
        return (
          <React.Fragment key={section.name}>
            <FadeInOnScroll>
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
    </Suspense>
  );
}
