import React from "react";
import classNames from "classnames";

export interface Props {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const Article = ({children, className}: Props) => {
  return (
    <>
      <div className={
        classNames(
          "prose prose-invert prose-indigo max-w-4xl",
          "prose-h1:text-4xl prose-h1:text-gray-200 prose-h1:font-bold prose-h1:mb-6",
          "prose-h2:text-3xl prose-h2:text-gray-300 prose-h2:font-semibold prose-h2:mt-8 prose-h2:mb-4",
          "prose-h3:text-indigo-500 prose-h3:font-semibold prose-h3:mt-2 prose-h3:mb-4",
          "prose-p:text-lg prose-p:text-gray-400 prose-p:leading-8 prose-p:my-4",
          "prose-a:font-semibold prose-a:text-indigo-400 prose-a:underline prose-a:cursor-pointer prose-a:mx-1",
          "prose-ul:list-disc prose-ul:my-8",
          "prose-li:text-lg prose-li:text-gray-400 prose-li:ml-12 prose-li:my-2",
          "prose-img:rounded-xl",
          "prose-figcaption:text-gray-300 prose-figcaption:ml-2",
          className
        )
      }
      >
        {children}
      </div>
    </>
  )
}

export default Article;
