import { PenSquare ,Pen} from "lucide-react";

interface AboutData {
  paragraphs: string[];
}

interface AboutProps {
  aboutData: AboutData;
  onEditClick: () => void;
  showEditButton?: boolean;
}

function MissingNotice({ label }: { label: string }) {
  return (
    <p className="text-center text-gray-400 italic text-base sm:text-lg">
      {`Add ${label} from edit`}
    </p>
  );
}

export default function About({
  aboutData,
  onEditClick,
  showEditButton = true,
}: AboutProps) {
  const paragraphs = aboutData.paragraphs.filter((p) => p && p.trim() !== "");
  const hasParagraphs = paragraphs.length > 0;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50 relative"
    >
      {showEditButton && (
        <button
          onClick={onEditClick}
          className="absolute top-24 right-4 sm:right-8 text-gray-700 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Edit about section"
          title="Edit about section"
        >
          <PenSquare   size={24} />
        </button>
      )}

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>

        {hasParagraphs ? (
          <div className="space-y-8 text-gray-700 text-base sm:text-lg leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <MissingNotice label="about content" />
        )}
      </div>
    </section>
  );
}
