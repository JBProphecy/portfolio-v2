
import { Slide } from "@/printshop/Slide";

import me from "@/assets/me.jpg";

function Grid({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {children}
    </div>
  )
}

function GridCellLeft({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {children}
    </div>
  )
}

function GridCellRight({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "4.5rem 2rem", // extra spce so text is "between" image bounds
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  )
}

export function SlideHero() {
  return (
    <Slide>
      <Grid>
        <GridCellLeft>
          <div style={{ width: "100%", height: "100%", display: "flex", border: "3px solid #eee" }}>
            <img src={me} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </GridCellLeft>
        <GridCellRight>
          <div style={{ width: "100%", display: "flex" }}><span style={{ fontSize: "4rem", lineHeight: 1, fontWeight: 700, color: "#eee" }}>Jack Piatt</span></div>
          <div style={{ height: "1rem" }} />
          <div style={{ width: "100%", display: "flex" }}><span style={{ fontSize: "2rem", lineHeight: 1, fontWeight: 700, color: "#bbb" }}>Data Engineer</span></div>
        </GridCellRight>
      </Grid>
    </Slide>
  )
}
