import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface ProfileData {
  name?: string;
  tagline?: string;
  description?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  customLinks?: Array<{ label?: string; url?: string }>;
}

/**
 * Public-friendly Hero preview component.
 * - No edit icons or edit logic.
 * - Displays "Content coming soon" when data is missing.
 */
export default function HeroPreview({ profileData = {} }: { profileData?: ProfileData }) {
  const name = profileData.name?.trim?.() ?? "";
  const tagline = profileData.tagline?.trim?.() ?? "";
  const description = profileData.description?.trim?.() ?? "";

  const github = profileData.github?.trim?.() ?? "";
  const linkedin = profileData.linkedin?.trim?.() ?? "";
  const email = profileData.email?.trim?.() ?? "";
  const customLinks = profileData.customLinks ?? [];

  const hasCustomLinks = customLinks.filter(
    (l) => l?.label && l?.url
  ).length > 0;

  const MissingPublic = () => (
  <div></div>
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-12 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        {name ? (
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">{name}</span>
          </h1>
        ) : (
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <MissingPublic />
          </h1>
        )}

        {tagline ? (
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
            {tagline}
          </p>
        ) : (
          <MissingPublic />
        )}

        {description ? (
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-12">
            {description}
          </p>
        ) : (
          <MissingPublic />
        )}

        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center items-center gap-6">
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
            ) : (
              <MissingPublic />
            )}

            {linkedin ? (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
            ) : (
              <MissingPublic />
            )}

            {email ? (
              <a
                href={`mailto:${email}`}
                className="text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            ) : (
              <MissingPublic />
            )}
          </div>

          {hasCustomLinks ? (
            <div className="flex justify-center items-center flex-wrap gap-4">
              {customLinks
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
            <MissingPublic />
          )}
        </div>
      </div>
    </section>
  );
}
