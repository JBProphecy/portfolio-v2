
import { Slide } from "@/printshop/Slide";

const TITLE = "Web Server Logs Pipeline"

const DATE = "Feb 2026 - Apr 2026"

const CONTRIBUTORS = ["Jack Piatt", "Nathan Ince"]

const DESCRIPTION = "This project focuses on processing a high volume of http logs and order events. From generating synthetic yet realistic logs, sending them to Kafka from several virtual machines, consuming them with PySpark Structured Streaming, storing the raw data in Amazon S3, loading the raw data in Snowflake, building a dimensional model in Snowflake with DBT, and finally using the gold standard data to create visualizations with Power BI, this project becomes a full ELT pipeline orchestrated entirely with Airflow and containerized with Docker."

const TECH = ["Python", "Kafka", "PySpark", "Amazon S3", "Snowflake", "DBT", "Power BI", "Airflow", "Docker", "Git", "GitHub"]

const REPO = "https://github.com/TRG00002366/Jack_Nathan_Logs_Project"

const RESPONSIBILITIES = [
  "Created a producer to generate synthetic logs.",
  "Created a Markov chain to simulate realistic API navigation.",
  "Built several Dockerfiles and compose files to containerize the project.",
  "Created a consumer to read data from Kafka topics in parallel with PySpark.",
  "Configured S3 bucket to serve as our data lake.",
  "Configured Snowflake to connect to AWS and load data from S3",
  "Modeled staging, fact, dimension, and tailored mart tables to complete the medallion architecture.",
  "Used Streamlit to create a developer-friendly dashboard to monitor the quality of our transformations.",
  "Used Power BI to create in-depth visuals to provide insights and support busines descisions"
]

function TextOuter({
  children,
  horizontalPadding = 2,
  justifyContent = "center",
  alignItems = "center",
  gap = 0
}: {
  children?: React.ReactNode,
  horizontalPadding?: number
  justifyContent?: string,
  alignItems?: string,
  gap?: number
}) {
  return (
    <div
      style={{
        width: "100%",
        padding: `0 ${horizontalPadding}rem`,
        display: "flex",
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: `${gap}rem`
      }}
    >
      {children}
    </div>
  )
}

function TextInner({
  text,
  color = "#eee",
  fontSize = 1,
  lineHeight = 1,
  fontWeight = 700
}: {
  text: string
  color?: string,
  fontSize?: number,
  lineHeight?: number
  fontWeight?: number
}) {
  return (
    <span
      style={{
        width: "max-content",
        maxWidth: "100%",
        lineHeight: `${lineHeight}`,
        fontSize: `${fontSize}rem`,
        fontWeight: fontWeight,
        color: color
      }}
    >{text}</span>
  )
}

export function SlideProjectWebServerLogEvents() {
  return (
    <Slide>
      <div style={{ height: "3rem"}} />
      <TextOuter horizontalPadding={3} justifyContent="space-between">
        <TextInner text={TITLE} color="#eee" fontSize={2} lineHeight={1} />
        <TextInner text={DATE} color="#bbf" fontSize={1.375} lineHeight={1} />
      </TextOuter>
      <div style={{ height: "2rem"}} />
      <TextOuter horizontalPadding={3} justifyContent="flex-start">
        <TextInner text="Description" color="#eee" fontSize={1.25} lineHeight={1} />
      </TextOuter>
      <div style={{ height: "0.75rem" }} />
      <TextOuter horizontalPadding={3} justifyContent="center">
        <TextInner text={DESCRIPTION} color="#bbb" fontSize={1.125} lineHeight={1.5} />
      </TextOuter>
      <div style={{ height: "2rem" }} />
      <TextOuter horizontalPadding={3} justifyContent="flex-start">
        <TextInner text="Technology" color="#eee" fontSize={1.25} lineHeight={1} />
      </TextOuter>
      <div style={{ height: "0.75rem" }} />
      <TextOuter horizontalPadding={3} justifyContent="flex-start">
        <TextInner text={TECH.join(", ")} color="#bbb" fontSize={1.125} lineHeight={1.5} />
      </TextOuter>
      <div style={{ height: "2rem" }} />
      <TextOuter horizontalPadding={3} justifyContent="flex-start">
        <TextInner text="Repository" color="#eee" fontSize={1.25} lineHeight={1} />
      </TextOuter>
      <div style={{ height: "0.75rem" }} />
      <TextOuter horizontalPadding={3} justifyContent="flex-start">
        <TextInner text={REPO} color="#bbb" fontSize={1.125} lineHeight={1.5} />
      </TextOuter>
    </Slide>
  )
}

export function SlideProjectWebServerLogEventsResponsibilities() {
  return (
    <Slide>
      <div style={{ height: "3rem"}} />
      <TextOuter horizontalPadding={3} justifyContent="space-between">
        <TextInner text={TITLE} color="#eee" fontSize={2} lineHeight={1} />
        <TextInner text={DATE} color="#bbf" fontSize={1.375} lineHeight={1} />
      </TextOuter>
      <div style={{ height: "2rem"}} />
      <TextOuter horizontalPadding={3} justifyContent="flex-start">
        <TextInner text="Contributors" color="#eee" fontSize={1.25} lineHeight={1} />
      </TextOuter>
      <div style={{ height: "0.75rem" }} />
      <TextOuter horizontalPadding={3} justifyContent="flex-start">
        <TextInner text={CONTRIBUTORS.join(", ")} color="#bbb" fontSize={1.125} lineHeight={1.5} />
      </TextOuter>
      <div style={{ height: "2rem"}} />
      <TextOuter horizontalPadding={3} justifyContent="flex-start">
        <TextInner text="Responsibilities" color="#eee" fontSize={1.25} lineHeight={1} />
      </TextOuter>
      <div style={{ height: "0.75rem" }} />
      <ul style={{ listStylePosition: "outside", paddingLeft: "4.25rem", paddingRight: "3rem", gap: "0.25rem", display: "flex", flexDirection: "column" }}>
        {RESPONSIBILITIES.map((r, i) => (
          <li key={i} style={{ width: "100%", color: "#ccc", fontWeight: 700 }}>
            <TextInner text={r} color="#ccc" fontSize={1.125} lineHeight={1.5} />
          </li>
        ))}
      </ul>
    </Slide>
  )
}
