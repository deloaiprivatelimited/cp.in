interface FooterProps {
  name?: string | null;
}

const isNonEmpty = (v?: string | null) =>
  typeof v === "string" && v.trim() !== "";

export default function Footer({ name }: FooterProps) {
  const displayName = isNonEmpty(name) ? name!.trim() : "—";

  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} {displayName}. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Built with React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
