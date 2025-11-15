import { Award, PenSquare } from "lucide-react";

interface CertificationsData {
  certifications: string[];
}

interface CertificationsProps {
  certificationsData: CertificationsData;
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

export default function Certifications({
  certificationsData,
  onEditClick,
  showEditButton = true,
}: CertificationsProps) {
  const cleaned = certificationsData.certifications.filter(
    (c) => c && c.trim() !== ""
  );
  const hasCerts = cleaned.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 relative">
      {showEditButton && (
        <button
          onClick={onEditClick}
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Edit certifications"
          title="Edit certifications"
        >
          <PenSquare size={24} />
        </button>
      )}

      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
        <Award className="mr-3" size={28} />
        Certifications
      </h3>

      {hasCerts ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-6 rounded-lg">
          {cleaned.map((cert, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              {cert}
            </div>
          ))}
        </div>
      ) : (
        <MissingNotice label="certifications" />
      )}
    </div>
  );
}
