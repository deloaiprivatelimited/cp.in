import { GraduationCap, PenSquare } from "lucide-react";
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
  educationData: EducationData;
  onEditClick: () => void;
  showEditButton?: boolean;
}

function MissingNotice({
  label,
  onEditClick,
}: {
  label: string;
  onEditClick: () => void;
}) {
  return (
    <div className="text-center text-gray-400 italic text-base sm:text-lg py-6">
      {`Add ${label} from edit`}
     
    </div>
  );
}

const isNonEmptyStr = (v: unknown): v is string =>
  typeof v === "string" && v.trim() !== "";

const anyFieldHasContent = (e: EducationItem) =>
  [e.degree, e.school, e.year, e.details].some(isNonEmptyStr);

const normalize = (s?: string) => (isNonEmptyStr(s) ? s.trim() : "—");

const parseYear = (y?: string) => {
  const n = Number((y || "").trim());
  return Number.isFinite(n) ? n : null;
};

export default function Education({
  educationData,
  onEditClick,
  showEditButton = true,
}: EducationProps) {
  const cleaned = React.useMemo(() => {
    const list = (educationData?.education ?? []).filter(
      (e): e is EducationItem => !!e && typeof e === "object"
    );
    const withContent = list.filter(anyFieldHasContent);

    // Optional: sort by numeric year desc when possible.
    // Items without a numeric year stay in original relative order after those with years.
    const withYear: EducationItem[] = [];
    const withoutYear: EducationItem[] = [];
    for (const item of withContent) {
      parseYear(item.year) !== null ? withYear.push(item) : withoutYear.push(item);
    }
    withYear.sort(
      (a, b) => (parseYear(b.year) ?? 0) - (parseYear(a.year) ?? 0)
    );
    return [...withYear, ...withoutYear];
  }, [educationData]);

  const hasEdu = cleaned.length > 0;

  return (
    <section id="education" className="max-w-4xl mx-auto px-4 py-12 relative">
      {showEditButton && (
        <button
          onClick={onEditClick}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Edit education"
          title="Edit education"
        >
          <PenSquare size={24} />
        </button>
      )}

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
                  {school}{" "}
                  <span aria-hidden="true">|</span>{" "}
                  <time>{year}</time>
                </p>
                <p className="text-gray-700">{details}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <MissingNotice label="education" onEditClick={onEditClick} />
      )}
    </section>
  );
}
