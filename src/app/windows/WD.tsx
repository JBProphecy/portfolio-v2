
import { SlidePieChartOne, SlidePieChartTwo } from "@/app/slides/pie-chart-slides";
import { SlideDeckInner, SlideDeckOuter } from "@/printshop/SlideDeck";
import { SlideAboutMe } from "../slides/about-me";
import { SlideEducation } from "../slides/education";
import { SlideHero } from "../slides/hero";
import { SlideProjectNaturalDisasters, SlideProjectNaturalDisastersResponsibilities } from "../slides/project-natural-disasters";
import { SlideProjectWebServerLogEvents, SlideProjectWebServerLogEventsResponsibilities } from "../slides/project-web-server-log-events";

export function WD() {
  return (
    <SlideDeckOuter>
      <SlideDeckInner>
        <SlideHero />
        <SlideAboutMe />
        <SlideEducation />
        <SlidePieChartOne />
        <SlidePieChartTwo />
        <SlideProjectWebServerLogEvents />
        <SlideProjectWebServerLogEventsResponsibilities />
        <SlideProjectNaturalDisasters />
        <SlideProjectNaturalDisastersResponsibilities />
      </SlideDeckInner>
    </SlideDeckOuter>
  )
}
