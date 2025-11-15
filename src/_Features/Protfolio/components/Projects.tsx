import * as React from "react";
import { Github, ExternalLink } from "lucide-react";

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
  projectsData?: ProjectsData;
}

/**
 * Public-friendly Projects preview component.
 * - No edit icons or edit logic.
 * - Displays "Content coming soon" for missing fields.
 */
export default function ProjectsPreview({ projectsData = {} }: ProjectsProps) {
  const isNonEmptyStr = (v: unknown): v is string =>
    typeof v === "string" && v.trim() !== "";

  const normalize = (s?: string) => (isNonEmptyStr(s) ? s.trim() : "—");

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

  const MissingPublic = ({ text = "Content coming soon" }: { text?: string }) => (
    <div/>
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20 relative"
    >
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
                      <MissingPublic text="Content coming soon" />
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
                      <MissingPublic text="Content coming soon" />
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
                      <MissingPublic text="Content coming soon" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <MissingPublic />
          </div>
        )}
      </div>
    </section>
  );
}
