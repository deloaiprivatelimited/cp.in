import { GraduationCap } from "lucide-react";
import * as React from "react";

interface EducationItem {
  degree?: string;
  school?: string;
  year?: string;
  details?: string;
}

interface EducationData {
  education?: (EducationItem | null | undefined)[];
}

interface EducationProps {
  educationData?: EducationData;
}

/** Public-friendly Education preview component.
 *  - No edit icons or edit logic.
 *  - Shows a neutral "Content coming soon" message when empty.
 */
export default function EducationPreview({ educationData = {} }: EducationProps) {
  const cleaned = React.useMemo(() => {
    const list = (educationData?.education ?? []).filter(
      (e): e is EducationItem => !!e && typeof e === "object"
    );
    const anyFieldHasContent = (e: EducationItem) =>
      [e.degree, e.school, e.year, e.details].some(
        (v) => typeof v === "string" && v.trim() !== ""
      );

    const withContent = list.filter(anyFieldHasContent);

    const parseYear = (y?: string) => {
      const n = Number((y || "").trim());
      return Number.isFinite(n) ? n : null;
    };

    const withYear: EducationItem[] = [];
    const withoutYear: EducationItem[] = [];
    for (const item of withContent) {
      parseYear(item.year) !== null ? withYear.push(item) : withoutYear.push(item);
    }
    withYear.sort((a, b) => (parseYear(b.year) ?? 0) - (parseYear(a.year) ?? 0));
    return [...withYear, ...withoutYear];
  }, [educationData]);

  const hasEdu = cleaned.length > 0;

  const isNonEmptyStr = (v: unknown): v is string =>
    typeof v === "string" && v.trim() !== "";

  const normalize = (s?: string) => (isNonEmptyStr(s) ? s.trim() : "—");

  const MissingPublic = () => (
 <div/>
  );

  return (
    <section id="education" className="max-w-4xl mx-auto px-4 py-12 relative">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
        <GraduationCap className="mr-3" size={28} />
        Education
      </h3>

      {hasEdu ? (
        <ul className="space-y-4">
          {cleaned.map((edu, index) => {
            const degree = normalize(edu.degree);
            const school = normalize(edu.school);
            const year = normalize(edu.year);
            const details = normalize(edu.details);

            return (
              <li
                key={index}
                className="border-l-2 border-blue-600 pl-4 bg-white p-4 rounded-r-lg"
              >
                <h4 className="font-semibold text-gray-900 text-lg">{degree}</h4>
                <p className="text-gray-600 mb-2">
                  {school} <span aria-hidden="true">|</span> <time>{year}</time>
                </p>
                <p className="text-gray-700">{details}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <MissingPublic />
      )}
    </section>
  );
}
