
import { SlidePieChartOne, SlidePieChartTwo } from "@/app/slides/pie-chart-slides";
import { SlideDeckInner, SlideDeckOuter } from "@/printshop/SlideDeck";
import { SlideAboutMe } from "../slides/about-me";
import { SlideEducation } from "../slides/education";
import { SlideHero } from "../slides/hero";
import { SlideProjectNaturalDisasters, SlideProjectNaturalDisastersResponsibilities } from "../slides/project-natural-disasters";
import { SlideProjectWebServerLogEvents, SlideProjectWebServerLogEventsResponsibilities } from "../slides/project-web-server-log-events";

function SlideBorder({ children }: { children?: React.ReactNode }) {
  return (
    <div style={{ border: "0.25rem solid #808080", borderRadius: `${0.25 + 0.5}rem` }}>
      {children}
    </div>
  )
}

export function WD() {
  return (
    <SlideDeckOuter>
      <SlideDeckInner>

        <SlideBorder>
          <SlideHero />
        </SlideBorder>

        <SlideBorder>
          <SlideAboutMe />
        </SlideBorder>

        <SlideBorder>
          <SlideEducation />
        </SlideBorder>

        <SlideBorder>
          <SlidePieChartOne />
        </SlideBorder>

        <SlideBorder>
          <SlidePieChartTwo />
        </SlideBorder>

        <SlideBorder>
          <SlideProjectWebServerLogEvents />
        </SlideBorder>

        <SlideBorder>
          <SlideProjectWebServerLogEventsResponsibilities />
        </SlideBorder>

        <SlideBorder>
          <SlideProjectNaturalDisasters />
        </SlideBorder>

        <SlideBorder>
          <SlideProjectNaturalDisastersResponsibilities />
        </SlideBorder>

      </SlideDeckInner>
    </SlideDeckOuter>
  )
}
