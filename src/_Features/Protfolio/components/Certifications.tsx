import { Award } from "lucide-react";

interface CertificationsData {
  certifications: string[];
}

interface CertificationsProps {
  certificationsData: CertificationsData;
}

/**
 * Public-friendly Certifications preview component.
 * - No edit icons or edit logic.
 * - Shows "Content coming soon" if no certifications are available.
 */
export default function CertificationsPreview({
  certificationsData,
}: CertificationsProps) {
  const cleaned = (certificationsData?.certifications ?? []).filter(
    (c) => c && c.trim() !== ""
  );
  const hasCerts = cleaned.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 relative">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
        <Award className="mr-3" size={28} />
        Certifications
      </h3>

      {hasCerts ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-6 rounded-lg shadow-sm">
          {cleaned.map((cert, index) => (
            <div key={index} className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              {cert}
            </div>
          ))}
        </div>
      ) : (
       <div/>
      )}
    </div>
  );
}
