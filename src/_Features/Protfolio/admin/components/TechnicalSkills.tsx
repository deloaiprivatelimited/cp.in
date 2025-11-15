import { Code, PenSquare } from "lucide-react";
import * as React from "react";

interface SkillsData {
  normalized?: (string | null | undefined)[]; // optional + tolerant
  categories?: {
    Languages?: (string | null | undefined)[];
    Frameworks?: (string | null | undefined)[];
    Libraries?: (string | null | undefined)[];
    Databases?: (string | null | undefined)[];
    DevOps?: (string | null | undefined)[];
    Cloud?: (string | null | undefined)[];
    Testing?: (string | null | undefined)[];
    DataAI?: (string | null | undefined)[];
    Tools?: (string | null | undefined)[];
    Other?: (string | null | undefined)[];
  };
}

interface TechnicalSkillsProps {
  skillsData: SkillsData;
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

export default function TechnicalSkills({
  skillsData,
  onEditClick,
  showEditButton = true,
}: TechnicalSkillsProps) {
  const categoryDisplayNames: Record<string, string> = {
    Languages: "Languages",
    Frameworks: "Frameworks",
    Libraries: "Libraries",
    Databases: "Databases",
    DevOps: "DevOps",
    Cloud: "Cloud",
    Testing: "Testing",
    DataAI: "Data & AI",
    Tools: "Tools",
    Other: "Other",
  };

  // Normalize the categories object so all expected keys exist
  const rawCategories = skillsData?.categories ?? {};
  const allCategoryKeys = Object.keys(categoryDisplayNames) as Array<
    keyof NonNullable<SkillsData["categories"]>
  >;

  const categoriesWithSkills = React.useMemo(() => {
    return allCategoryKeys
      .map((key) => {
        const arr = rawCategories[key] ?? [];
        const cleaned = arr.filter(isNonEmptyStr).map((s) => s.trim());
        return {
          name: key,
          displayName: categoryDisplayNames[String(key)],
          skills: cleaned,
        };
      })
      .filter((c) => c.skills.length > 0);
  }, [rawCategories]);

  const hasAnySkills = categoriesWithSkills.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 relative">
      {showEditButton && (
        <button
          onClick={onEditClick}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Edit technical skills"
          title="Edit technical skills"
        >
          <PenSquare size={24} />
        </button>
      )}

      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
        <Code className="mr-3" size={28} />
        Technical Skills
      </h3>

      {hasAnySkills ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesWithSkills.map(({ name, displayName, skills }) => (
            <div key={String(name)}>
              <h4 className="font-semibold text-gray-900 mb-3">{displayName}</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={`${skill}-${i}`}
                    className="px-3 py-1.5 bg-white text-gray-800 rounded-lg text-sm font-medium border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <MissingNotice label="technical skills" />
      )}
    </div>
  );
}
