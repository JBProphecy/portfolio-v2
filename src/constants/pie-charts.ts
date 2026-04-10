
import { assembleRevStyle } from "../workspace/logic";

export const PIE_CHART_PYTHON = assembleRevStyle({
  title: "Python",
  colorOffset: 0,
  colorSpread: 135,
  slices: [
    { label: "Pandas", months: 2 },
    { label: "PySpark", months: 2 },
    { label: "Logging", months: 3 },
    { label: "Unit Testing", months: 3 },
    { label: "Error Handling", months: 3 },
    { label: "Streamlit", months: 1 },
  ]
})

export const PIE_CHART_SQL = assembleRevStyle({
  title: "SQL",
  colorOffset: 180,
  colorSpread: 180,
  slices: [
    { label: "Sublanguages", months: 6 },
    { label: "Transactions", months: 6 },
    { label: "Constraints", months: 6 },
    { label: "Functions", months: 6 },
    { label: "Queries", months: 6 },
    { label: "Joins", months: 6 }
  ]
})

export const PIE_CHART_APACHE_SPARK = assembleRevStyle({
  title: "Spark",
  colorOffset: 90,
  colorSpread: 200,
  slices: [
    { label: "Spark SQL", months: 2 },
    { label: "Structured Streaming", months: 2 },
    { label: "Spark Core/Architecture", months: 2 },
    { label: "Parallel Processing", months: 2 },
    { label: "Transformations", months: 2 },
    { label: "Lazy Operations", months: 2 },
    { label: "DAG Execution Plan", months: 2 },
    { label: "Catalyst Optimization", months: 2 },
    { label: "Spark Submit", months: 2 },
  ]
})

export const PIE_CHART_APACHE_KAFKA = assembleRevStyle({
  title: "Apache Kafka",
  colorOffset: 60,
  colorSpread: 220,
  slices: [
    { label: "Topics", months: 2 },
    { label: "Brokers", months: 2 },
    { label: "Producers", months: 2 },
    { label: "Consumers & Groups", months: 2 },
    { label: "Partitions", months: 2 },
    { label: "Replication", months: 2 }
  ]
})

export const PIE_CHART_CLOUD_DEV = assembleRevStyle({
  title: "DevOps / Tools",
  colorOffset: 90,
  colorSpread: 360,
  slices: [
    { label: "CI/CD", months: 1 },
    { label: "Git + GitHub", months: 9 },
    { label: "GitHub Actions", months: 1 },
    { label: "Docker Images", months: 3 },
    { label: "Docker Containers", months: 3 },
    { label: "Power BI", months: 1 },
  ]
})

export const PIE_CHART_MORE_APACHE = assembleRevStyle({
  title: "More Apache",
  colorOffset: 180,
  colorSpread: 225,
  slices: [
    { label: "Airflow DAGs", months: 2 },
    { label: "Airflow Tasks", months: 2 },
    { label: "Airflow Operators", months: 2 },
    { label: "Airflow Connections", months: 2 },
    { label: "Airflow Hooks", months: 2 },
    { label: "Kafka Topics", months: 2 },
    { label: "Kafka Partitions", months: 2 },
    { label: "Kafka Producers", months: 2 },
    { label: "Kafka Consumers", months: 2 },
    { label: "Kafka Replication", months: 2 },
    { label: "Kafka Brokers", months: 2 },
  ]
})

export const PIE_CHART_SNOWFLAKE = assembleRevStyle({
  title: "Cloud / Data",
  colorOffset: 250,
  colorSpread: 270,
  slices: [
    { label: "Snowflake", months: 1 },
    { label: "Data Lakes", months: 2 },
    { label: "Data Warehouses", months: 2 },
    { label: "Data Marts", months: 1 },
    { label: "AWS Ecosystem", months: 2 },
    { label: "Medallion Architecture", months: 1 },
    { label: "Facts & Dimensions", months: 1 },
    { label: "Data Modeling", months: 3 },
    { label: "Star Schema", months: 1 },
    { label: "DBT", months: 1 },
  ]
})