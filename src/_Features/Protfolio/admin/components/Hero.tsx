import { Github, Linkedin, Mail, ExternalLink, PenSquare } from "lucide-react";

interface ProfileData {
  name: string;
  tagline: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  customLinks: Array<{ label: string; url: string }>;
}

interface HeroProps {
  profileData: ProfileData;
  onEditClick: () => void;
  showEditButton?: boolean;
}

function MissingNotice({ label }: { label: string }) {
  return (
    <span className="text-sm text-gray-400 italic">
      {`Add ${label} from edit`}
    </span>
  );
}

export default function Hero({
  profileData,
  onEditClick,
  showEditButton = true,
}: HeroProps) {
  const hasCustomLinks = profileData.customLinks.filter(
    (l) => l.label && l.url
  ).length > 0;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-12 relative"
    >
      {showEditButton && (
        <button
          onClick={onEditClick}
          className="absolute top-20 right-4 sm:right-8 text-gray-700 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Edit profile"
          title="Edit profile"
        >
          <PenSquare size={24} />
        </button>
      )}

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">{profileData.name}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
          {profileData.tagline}
        </p>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          {profileData.description}
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center items-center gap-6">
            {profileData.github ? (
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
            ) : (
              <MissingNotice label="GitHub" />
            )}

            {profileData.linkedin ? (
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
            ) : (
              <MissingNotice label="LinkedIn" />
            )}

            {profileData.email ? (
              <a
                href={`mailto:${profileData.email}`}
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            ) : (
              <MissingNotice label="Email" />
            )}
          </div>

          {hasCustomLinks ? (
            <div className="flex justify-center items-center flex-wrap gap-4">
              {profileData.customLinks
                .filter((link) => link.label && link.url)
                .map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                    aria-label={link.label}
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
            </div>
          ) : (
            <MissingNotice label="custom links" />
          )}
        </div>
      </div>
    </section>
  );
}
