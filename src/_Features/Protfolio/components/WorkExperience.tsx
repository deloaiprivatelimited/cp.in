import { Briefcase } from "lucide-react";

interface WorkExperienceItem {
  title?: string;
  company?: string;
  period?: string;
  description?: string;
}

interface WorkExperienceData {
  experience?: (WorkExperienceItem | null | undefined)[];
}

interface WorkExperienceProps {
  workData?: WorkExperienceData;
}

/**
 * Public-friendly WorkExperience preview component.
 * - No edit icons or edit logic.
 * - Shows a neutral "Content coming soon" message when empty.
 */
export default function WorkExperiencePreview({ workData = {} }: WorkExperienceProps) {
  const isNonEmptyStr = (v: unknown): v is string =>
    typeof v === "string" && v.trim() !== "";

  const normalize = (v?: string) => (isNonEmptyStr(v) ? v.trim() : "—");

  const cleaned = (workData?.experience ?? [])
    .filter((e): e is WorkExperienceItem => !!e && typeof e === "object")
    .filter((e) =>
      [e.title, e.company, e.period, e.description].some(isNonEmptyStr)
    );

  const hasExp = cleaned.length > 0;

  const MissingPublic = ({ label }: { label?: string }) => (
       <div/>

  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 relative">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
        <Briefcase className="mr-3" size={28} />
        Work Experience
      </h3>

      {hasExp ? (
        <div className="space-y-6">
          {cleaned.map((job, index) => {
            const title = normalize(job.title);
            const company = normalize(job.company);
            const period = normalize(job.period);
            const desc = normalize(job.description);

            return (
              <div
                key={index}
                className="border-l-2 border-blue-600 pl-4 bg-white p-4 rounded-r-lg"
              >
                <h4 className="font-semibold text-gray-900 text-lg">{title}</h4>
                <p className="text-gray-600 mb-2">
                  {company} <span aria-hidden="true">|</span> <span>{period}</span>
                </p>
                <p className="text-gray-700">{desc}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <MissingPublic label="work experience" />
      )}
    </div>
  );
}
