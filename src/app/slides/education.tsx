
import { Slide } from "@/printshop/Slide";
import uncwLogo from "@/assets/uncw.svg";
import { Title } from "./about-me";

const LOGO_SIZE = 256;

function SpanOuter({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex"
      }}
    >
      {children}
    </div>
  )
}

function Row() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem"
      }}
    >
      <img src={uncwLogo} className="uncw" alt="UNCW logo" width={LOGO_SIZE} height="auto" />
      <div
        style={{
          width: "auto",
          height: LOGO_SIZE,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0.5rem"
        }}
      >
        <SpanOuter><span style={{ fontSize: "1.5rem", color: "#eee", fontWeight: 700}}>Bachelor's Degree - Computer Science</span></SpanOuter>
        <SpanOuter><span style={{ fontSize: "1.25rem", color: "#bbb", fontWeight: 700}}>University of North Carolina at Wilminton</span></SpanOuter>
        <SpanOuter><span style={{ fontSize: "1.25rem", color: "#bbb", fontWeight: 700}}>December 2024</span></SpanOuter>
      </div>
    </div>
  )
}

export function SlideEducation() {
  return (
    <Slide>
      <div style={{ height: "3rem"}} />
      <Title>Education</Title>
      <div style={{ height: "4.5rem"}} />
      <Row />
    </Slide>
  )
}
