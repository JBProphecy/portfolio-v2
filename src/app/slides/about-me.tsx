
import { Slide } from "@/printshop/Slide"

const ABOUT_ME_P1 = `
Acquired a bachelor's degree in computer science from the University of North Carolina at Wilmington. Experience working with various data engineering tools including as Python, Pandas, Spark, Snowflake, DBT, Kafka, Airflow, Docker, and more. Worked on multiple projects where my team and I built ETL pipelines and ELT pipelines, performed both batch and stream processing, and harnessed the power of cloud resources to process large-scale data.
`

const ABOUT_ME_P2 = `
I really enjoy programming and digital architecture. From web development to mobile development and now data engineering, I want the systems I build to be simple, functional, efficient, and reliable, no matter how involved or complex they are in nature. In light of my interests, I believe data engineering is the field where I can truly apply myself and see those things to fruition. I'm both competitive and cooperative. I'll compete with myself to improve my skills and we can work together to get the job done.
`

export function Title({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        padding: "0 3rem"
      }}
    >
      <span
        style={{
          width: "max-content",
          maxWidth: "100%",
          fontSize: "2.25rem",
          lineHeight: 1,
          color: "#eee",
          fontWeight: 700
        }}
      >{children}</span>
    </div>
  )
}

function Paragraph({ children}: { children?: React.ReactNode }) {
  return (
    <p
      style={{
        width: "100%",
        padding: "0 3rem",
        fontSize: "1.125rem",
        lineHeight: 1.5,
        color: "#eee",
        fontWeight: 700
      }}
    >
      {children}
    </p>
  )
}

export function SlideAboutMe() {
  return (
    <Slide>
      <div style={{ height: "3rem"}} />
      <Title>About Me</Title>
      <div style={{ height: "2rem"}} />
      <Paragraph>{ABOUT_ME_P1}</Paragraph>
      <div style={{ height: "0.25rem"}} />
      <Paragraph>{ABOUT_ME_P2}</Paragraph>
    </Slide>
  )
}
