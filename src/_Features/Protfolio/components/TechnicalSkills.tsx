import { Code } from "lucide-react";
import * as React from "react";

interface SkillsData {
  normalized?: (string | null | undefined)[];
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
    [key: string]: (string | null | undefined)[] | undefined;
  };
}

interface TechnicalSkillsProps {
  skillsData?: SkillsData;
}

/**
 * Public-friendly TechnicalSkills preview component.
 * - No edit icons or edit logic.
 * - Shows "Content coming soon" when empty.
 */
export default function TechnicalSkillsPreview({ skillsData = {} }: TechnicalSkillsProps) {
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

  const isNonEmptyStr = (v: unknown): v is string =>
    typeof v === "string" && v.trim() !== "";

  const rawCategories = skillsData?.categories ?? {};
  const allCategoryKeys = Object.keys(categoryDisplayNames) as Array<
    keyof NonNullable<SkillsData["categories"]>
  >;

  const categoriesWithSkills = React.useMemo(() => {
    return allCategoryKeys
      .map((key) => {
        const arr = (rawCategories as any)[key] ?? [];
        const cleaned = Array.isArray(arr) ? arr.filter(isNonEmptyStr).map((s) => s.trim()) : [];
        return {
          name: key,
          displayName: categoryDisplayNames[String(key)],
          skills: cleaned,
        };
      })
      .filter((c) => c.skills.length > 0);
  }, [rawCategories]);

  const hasAnySkills = categoriesWithSkills.length > 0;

  const MissingPublic = ({ label }: { label?: string }) => (
        <div/>

  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 relative">
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
        <MissingPublic />
      )}
    </div>
  );
}
