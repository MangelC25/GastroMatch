import React, { Suspense, lazy, useMemo } from "react";
import FadeInOnScroll from "./Subcomponentes/FadeInOnScroll";

// 🔹 Cargamos los componentes de forma diferida (Lazy Loading)
const HomeSection = lazy(() => import("./Sections/HomeSection"));
const ServicesSection = lazy(() => import("./Sections/ServicesSection"));
const TopRestaurantsSection = lazy(() =>
  import("./Sections/TopRestaurantsSection")
);
const TopFoodWeek = lazy(() => import("./Sections/TopFoodWeek"));
const EventsFoodSection = lazy(()=> import("./Sections/EventsFoodSection"));
const ChefsSection = lazy(()=> import("./Sections/ChefsSections"));
const TestimonialsSection = lazy(()=> import("./Sections/TestimonialsSection"));


export default function Home() {
  // 🔹 Usamos useMemo para evitar que estos arrays se reconstruyan en cada render
  const Sections = useMemo(
    () => [
      { name: "HomeSection", component: HomeSection },
      { name: "ServicesSection", component: ServicesSection },
      { name: "TopRestaurantsSection", component: TopRestaurantsSection },
      { name: "TopFoodWeek", component: TopFoodWeek },
      { name: "EventsFoodSection", component: EventsFoodSection },
      { name: "ChefsSection", component: ChefsSection  },
      { name: "TestimonialsSection", component: TestimonialsSection  },
    ],
    []
  );

  const ShapeDividers = useMemo(
    () => [
      { name: "shapedividers_com-4450" },
      { name: "shapedividers_com-117" },
      { name: "shapedividers_com-8372" },
      { name: "shapedividers_com-2215" },
      { name: "shapedividers_com-2042" },
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
