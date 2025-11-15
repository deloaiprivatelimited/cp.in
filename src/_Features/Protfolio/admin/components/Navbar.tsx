// src/pages/portfolio/edit/components/Navbar.tsx
import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
// import PublishToggle from "./PublishToggle";
import PublishToggle from "./Edit/PublishToggle";
interface SocialLinks {
  github?: string | null;
  linkedin?: string | null;
  email?: string | null;
}

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  siteName?: string | null;
  social?: SocialLinks;
  // NEW props for publish toggle
  published?: boolean;
  onTogglePublished?: (next: boolean) => void;
  publishDisabled?: boolean;
}

const isNonEmpty = (v?: string | null) =>
  typeof v === "string" && v.trim() !== "";

export default function Navbar({
  activeSection,
  scrollToSection,
  siteName = "Your Name",
  social = {},
  published = false,
  onTogglePublished,
  publishDisabled = false,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const github = social.github?.trim() ?? "";
  const linkedin = social.linkedin?.trim() ?? "";
  const email = social.email?.trim() ?? "";

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleScrollToSection("home")}
            className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            {isNonEmpty(siteName) ? siteName : "—"}
          </button>

          <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleScrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section
                    ? "text-gray-900 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop social icons */}
            {isNonEmpty(github) && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors hidden md:block"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
            {isNonEmpty(linkedin) && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors hidden md:block"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            )}
            {isNonEmpty(email) && (
              <a
                href={`mailto:${email}`}
                className="text-gray-700 hover:text-gray-900 transition-colors hidden md:block"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            )}

            {/* Publish toggle - visible on md+ */}
            {onTogglePublished && (
              <div className="hidden md:block">
                <PublishToggle
                  published={published}
                  onToggle={(next) => onTogglePublished(next)}
                  disabled={publishDisabled}
                  label="Published"
                />
              </div>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => handleScrollToSection(section)}
                className={`block w-full text-left capitalize py-2 ${
                  activeSection === section ? "text-gray-900 font-semibold" : "text-gray-600"
                }`}
              >
                {section}
              </button>
            ))}

            {/* Mobile social row */}
            <div className="flex items-center space-x-4 pt-2">
              {isNonEmpty(github) && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              )}
              {isNonEmpty(linkedin) && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {isNonEmpty(email) && (
                <a
                  href={`mailto:${email}`}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              )}
            </div>

            {/* Mobile Publish toggle */}
            {onTogglePublished && (
              <div className="pt-2">
                <PublishToggle
                  published={published}
                  onToggle={(next) => {
                    // close menu for better UX
                    setMobileMenuOpen(false);
                    onTogglePublished(next);
                  }}
                  disabled={publishDisabled}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
