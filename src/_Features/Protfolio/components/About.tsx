interface AboutData {
  paragraphs: string[];
}

interface AboutProps {
  aboutData: AboutData;
}

/**
 * Public-friendly About preview component.
 * - No edit icons or save options.
 * - If no content, displays a generic "Content coming soon" message.
 */
export default function AboutPreview({ aboutData }: AboutProps) {
  const paragraphs = (aboutData?.paragraphs ?? []).filter(
    (p) => p && p.trim() !== ""
  );
  const hasParagraphs = paragraphs.length > 0;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50 relative"
    >
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
          <div/>
        )}
      </div>
    </section>
  );
}
