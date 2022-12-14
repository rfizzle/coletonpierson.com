import type { NextPage } from 'next'
import ProjectList  from "../../components/ProjectList/ProjectList";
import {useRouter} from "next/router";
import _ from "lodash";
import { ProjectSummary } from "../../types/Project";

const projects: ProjectSummary[] = [
  {
    title: "Terraform Management Automation",
    description: "While contracting for Modern Stack, my partner and I developed a correlation and " +
      "infrastructure-as-code engine to generate terraform configurations and group them into logical files based " +
      "on cloud resources and relationships.",
    image: "",
    href: "/projects/",
    date: "2022-05-01",
    category: "development",
  },
  {
    title: "Security Alert and Event Pipeline",
    description: "One of the most important aspects of a Security Operations and Incident Response team is the alerting " +
      "pipeline. There is where you archive, filter, escalate, and action on security events and alerts sent out " +
      "by the aggregate of your security products.",
    image: "/images/alerting-pipeline_project-list.png",
    href: "/projects/security-alert-and-event-pipeline",
    date: "2022-09-14",
    category: "security",
  }
]

const Index: NextPage = () => {
  const router = useRouter()
  const { category } = router.query
  const categoryValue = _.lowerCase(Array.isArray(category) ? category[0] : (category || ""))

  const filterCategory = (value: string): ProjectSummary[] => {
    return _.filter(projects, (p) => _.lowerCase(p.category) === _.lowerCase(value))
  }

  return (
    <>
      <ProjectList projects={categoryValue !== "" ? filterCategory(categoryValue) : projects} />
    </>
  )
}

export default Index
