import { useState } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  img: string;
  name: string;
  description?: string;
  tags?: string[];
  link?: string;
}

export default function ProjectsCard({
  img,
  name,
  description = "Project description goes here",
  tags = [],
  link,
  ...props
}: ContainerProps) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxDescriptionLength = 50; //
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shouldTruncate = description.length > maxDescriptionLength;
  const displayDescription = showFullDescription
    ? description
    : shouldTruncate
      ? `${description.substring(0, maxDescriptionLength)}...`
      : description;

  return (
    <div
      className="max-w-sm bg-black-400 dark:bg-black-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-black-200 dark:border-black-700 flex flex-col h-full"
      {...props}
    >
      <div className="p-4 flex justify-center bg-black-100 dark:bg-black-700">
        <img
          className="w-full h-48 object-contain rounded-lg"
          src={img}
          alt={`${name} screenshot`}
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white-800 dark:text-black-400 mb-2">
            {name}
          </h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          )}
        </div>

        <p className="text-white-600 dark:text-white-300 mb-4 ">
          {displayDescription}
        </p>

        {shouldTruncate && (
          <button
            onClick={toggleDescription}
            className="text-gray-400 cursor-pointer dark:text-grey-400 hover:text-grey-800 dark:hover:text-grey-300 text-sm font-medium mb-4 self-start"
          >
            {showFullDescription ? 'Read Less' : 'Read More'}
          </button>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {
          link ? (<a
            href={link}
            target="_blank"
            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-400 hover:to-purple-500 text-white rounded-lg transition-all duration-300 shadow hover:shadow-md w-full"
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>) : (<button
            disabled
            className="inline-flex items-center cursor-not-allowed justify-center px-4 py-2 bg-gray-400 text-gray-700 rounded-lg transition-all duration-300 shadow w-full"
          >
            View Project (In progress)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>)
        }
        <div className="mt-auto">

        </div>
      </div>
    </div>
  );
}