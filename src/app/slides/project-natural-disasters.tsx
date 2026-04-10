
import { Slide } from "@/printshop/Slide";

const TITLE = "Natural Disasters Pipeline"

const DATE = "Jan 2026 - Feb 2026"

const CONTRIBUTORS = ["Jack Piatt", "Nathan Ince"]

const DESCRIPTION = "The requirements for this project were to build an ETL pipeline using Python. The pipeline was config-driven with YAML. We extracted data from multiple sources in various formats, including CSV and JSON. We transformed that data with Pandas. We loaded that data into a PostgresSQL database hosted with AWS. Finally, we analyzed the data and created visualizations to showcase our results. In addition to the core features of this project, we implemented structured logging and database migrations for future scalability."

const TECH = ["Python", "Pandas", "PostgreSQL", "Amazon EC2", "Amazon RDS", "Seaborn", "Git", "GitHub"]

const REPO = "https://github.com/jackpiatt/natural-disasters-pipeline"

const RESPONSIBILITIES = [
  "Selected multiple datasets to work with, including both CSV and JSON formats.",
  "Configured environment variables and YAML files to make the pipeline secure and scalable.",
  "Designed schemas for storing both accepted and rejected data.",
  "Used SQLAlchemy and psycopg2 to connect to the PostgresSQL database.",
  "Used Pandas to read the data from our sources, perform various transformations to clean and standardize it, and then load it into our database.",
  "Used Seaborn to create visualizations from our clean data and showcase results.",
  "Added a content hashing feature to make the deduplication process more robust.",
  "Added a process tracking feature to map records to specific batches and processes for analysis."
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

export function SlideProjectNaturalDisasters() {
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

export function SlideProjectNaturalDisastersResponsibilities() {
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
          <li key={i} style={{ width: "100%", color: "#bbb", fontWeight: 700 }}>
            <TextInner text={r} color="#bbb" fontSize={1.125} lineHeight={1.5} />
          </li>
        ))}
      </ul>
    </Slide>
  )
}
