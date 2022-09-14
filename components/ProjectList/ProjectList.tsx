import React from "react";
import Image from "next/future/image";
import _ from "lodash";
import Link from "next/link";
import { ProjectSummary } from "../../types/Project";

export interface Props {
  className?: string;
  projects: ProjectSummary[];
}

const readTime = (text: string): number => {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time > 0 ? time : 1;
}

const ProjectList = ({projects}: Props): JSX.Element => {
  return (
    <>
      <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">From the blog</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <div className="relative h-48 w-full object-cover">
                    <Image src="/images/project-placeholder.png" alt="project picture" fill/>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-gray-900 p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-400">
                      <Link href={`/projects?category=${project.category}`}>
                        <a className="hover:underline">
                          {_.startCase(_.toLower(project.category))}
                        </a>
                      </Link>
                    </p>
                    <Link href={project.href}>
                      <a className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-100">{project.title}</p>
                        <p className="mt-3 text-base text-gray-500">{project.description}</p>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectList
