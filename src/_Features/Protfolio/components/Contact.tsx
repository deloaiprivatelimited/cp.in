import { Mail, Github, Linkedin } from "lucide-react";

interface ContactData {
  heading?: string;
  message1?: string;
  message2?: string;
}

interface ContactProps {
  contactData: ContactData;
  profileData?: {
    email?: string;
    github?: string;
    linkedin?: string;
  };
}

/**
 * Public-friendly Contact preview component.
 * - No edit icons or edit logic.
 * - Shows "Content coming soon" for any missing fields.
 */
export default function ContactPreview({
  contactData = {},
  profileData = {},
}: ContactProps) {
  // Safely normalize strings (handle undefined/null)
  const heading = contactData?.heading?.trim?.() ?? "";
  const message1 = contactData?.message1?.trim?.() ?? "";
  const message2 = contactData?.message2?.trim?.() ?? "";

  const email = profileData?.email?.trim?.() ?? "";
  const github = profileData?.github?.trim?.() ?? "";
  const linkedin = profileData?.linkedin?.trim?.() ?? "";

  const hasHeading = heading !== "";
  const hasMsg1 = message1 !== "";
  const hasMsg2 = message2 !== "";
  const hasEmail = email !== "";
  const hasGit = github !== "";
  const hasLinked = linkedin !== "";

  const MissingPublic = () => (
 <div/>
  );

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-50 relative"
    >
      <div className="max-w-2xl mx-auto text-center">
        {hasHeading ? (
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            {heading}
          </h2>
        ) : (
          <MissingPublic />
        )}

        {hasMsg1 ? (
          <p className="text-lg text-gray-600 mb-8">{message1}</p>
        ) : (
          <MissingPublic />
        )}

        {hasMsg2 ? (
          <p className="text-base text-gray-600 mb-12">{message2}</p>
        ) : (
          <MissingPublic />
        )}

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {hasEmail ? (
            <a
              href={`mailto:${email}`}
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Mail size={20} className="mr-2" />
              Send Email
            </a>
          ) : (
            <div className="w-full sm:w-auto">
              <MissingPublic />
            </div>
          )}

          {hasGit ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-white transition-colors font-medium"
            >
              <Github size={20} className="mr-2" />
              GitHub
            </a>
          ) : (
            <div className="w-full sm:w-auto">
              <MissingPublic />
            </div>
          )}

          {hasLinked ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-white transition-colors font-medium"
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
          ) : (
            <div className="w-full sm:w-auto">
              <MissingPublic />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
