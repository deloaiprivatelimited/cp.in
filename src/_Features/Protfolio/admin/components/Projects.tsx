import { Github, ExternalLink, PenSquare } from "lucide-react";
import * as React from "react";

interface ProjectItem {
  title?: string;
  description?: string;
  technologies?: (string | null | undefined)[];
  github?: string;
  demo?: string;
}

interface ProjectsData {
  projects?: (ProjectItem | null | undefined)[];
}

interface ProjectsProps {
  projectsData: ProjectsData;
  onEditClick: () => void;
  showEditButton?: boolean;
}

function MissingNotice({ label }: { label: string }) {
  return (
    <p className="text-center text-gray-400 italic text-base sm:text-lg py-6">
      {`Add ${label} from edit`}
    </p>
  );
}

const isNonEmptyStr = (v: unknown): v is string =>
  typeof v === "string" && v.trim() !== "";

const normalize = (s?: string) => (isNonEmptyStr(s) ? s.trim() : "—");

export default function Projects({
  projectsData,
  onEditClick,
  showEditButton = true,
}: ProjectsProps) {
  const cleaned = React.useMemo(() => {
    const list = (projectsData?.projects ?? []).filter(
      (p): p is ProjectItem => !!p && typeof p === "object"
    );

    // keep projects that have at least one meaningful field
    return list.filter((p) => {
      const hasTitle = isNonEmptyStr(p.title);
      const hasDesc = isNonEmptyStr(p.description);
      const hasTech =
        Array.isArray(p.technologies) &&
        p.technologies.some((t) => isNonEmptyStr(t));
      const hasGithub = isNonEmptyStr(p.github);
      const hasDemo = isNonEmptyStr(p.demo);
      return hasTitle || hasDesc || hasTech || hasGithub || hasDemo;
    });
  }, [projectsData]);

  const hasProjects = cleaned.length > 0;

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
      {showEditButton && (
        <button
          onClick={onEditClick}
          className="absolute top-24 right-4 sm:right-8 text-gray-700 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg z-10"
          aria-label="Edit projects"
          title="Edit projects"
        >
          <PenSquare size={24} />
        </button>
      )}

      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A collection of projects showcasing my skills in web development, design, and problem-solving
        </p>

        {hasProjects ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cleaned.map((project, index) => {
              const title = normalize(project.title);
              const description = normalize(project.description);

              const techs = (project.technologies ?? []).filter(isNonEmptyStr);
              const hasTechs = techs.length > 0;

              const github = project?.github?.trim?.() ?? "";
              const demo = project?.demo?.trim?.() ?? "";
              const hasGithub = github !== "";
              const hasDemo = demo !== "";

              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed min-h-[80px]">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 min-h-[28px]">
                    {hasTechs ? (
                      techs.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-gray-400 italic">
                        Add technologies from edit
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                    {hasGithub ? (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <Github size={20} className="mr-2" />
                        Code
                      </a>
                    ) : (
                      <span className="text-sm text-gray-400 italic">
                        Add GitHub link from edit
                      </span>
                    )}

                    {hasDemo ? (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <ExternalLink size={20} className="mr-2" />
                        Demo
                      </a>
                    ) : (
                      <span className="text-sm text-gray-400 italic">
                        Add demo link from edit
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <MissingNotice label="projects" />
        )}
      </div>
    </section>
  );
}
