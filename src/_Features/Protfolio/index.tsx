// PublicPortfolio.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicAxios } from "../../utils/axios";
import { showError, showInfo } from "../../utils/toast";
import NavbarPreview from "./components/Navbar";
import HeroPreview from "./components/Hero";
import AboutPreview from "./components/About";
import TechnicalSkillsPreview from "./components/TechnicalSkills";
import WorkExperiencePreview from "./components/WorkExperience";
import EducationPreview from "./components/Education";
import CertificationsPreview from "./components/Certifications";
import ProjectsPreview from "./components/Projects";
import ContactPreview from "./components/Contact";
import Footer from "./components/Footer";

interface SkillsCategories {
  Languages?: string[];
  Frameworks?: string[];
  Libraries?: string[];
  Databases?: string[];
  DevOps?: string[];
  Cloud?: string[];
  Testing?: string[];
  DataAI?: string[];
  Tools?: string[];
  Other?: string[];
  [k: string]: string[] | undefined;
}

interface PortfolioData {
  profileData: any;
  aboutData: any;
  skillsData: {
    normalized: string[];
    categories: SkillsCategories;
  };
  workData: any;
  projectsData: any;
  educationData: any;
  contactData: any;
  certificationsData: any;
}

/* ------------------------- helpers: content checks ------------------------- */

const DEFAULT_SKILL_CATEGORIES: SkillsCategories = {
  Languages: [],
  Frameworks: [],
  Libraries: [],
  Databases: [],
  DevOps: [],
  Cloud: [],
  Testing: [],
  DataAI: [],
  Tools: [],
  Other: [],
};

const isNonEmptyString = (v: unknown) =>
  typeof v === "string" && v.trim().length > 0;

const cleanStringArray = (arr: unknown): string[] => {
  if (!Array.isArray(arr)) return [];
  return arr
    .map((s) => (typeof s === "string" ? s.trim() : String(s ?? "").trim()))
    .filter((s) => s.length > 0);
};

const normalizeSkillCategories = (input?: SkillsCategories): SkillsCategories => {
  const src = input || {};
  const base: SkillsCategories = { ...DEFAULT_SKILL_CATEGORIES };
  // copy known buckets
  for (const k of Object.keys(DEFAULT_SKILL_CATEGORIES)) {
    base[k] = cleanStringArray(src[k] ?? []);
  }
  // pass through additional custom buckets, cleaned
  for (const k of Object.keys(src)) {
    if (!(k in base)) {
      base[k] = cleanStringArray(src[k]);
    }
  }
  return base;
};

const hasAnyNonEmptyCategoryValue = (cats?: SkillsCategories): boolean => {
  if (!cats || typeof cats !== "object") return false;
  for (const key of Object.keys(cats)) {
    const arr = cats[key];
    if (Array.isArray(arr) && arr.some(isNonEmptyString)) return true;
  }
  return false;
};

const hasContent = (val: any) => {
  if (!val) return false;
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === "object") return Object.keys(val).length > 0;
  if (typeof val === "string") return val.trim() !== "";
  return false;
};

/* -------------------------------------------------------------------------- */

export default function PublicPortfolio() {
  const { username } = useParams();

  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!username) return;

    const fetchPortfolio = async () => {
      try {
        setLoading(true);

        const res = await publicAxios.get(`/portfolio/${username}`);
        const data = res.data?.data || res.data || {};

        if (!data || Object.keys(data).length === 0) {
          showInfo(`No public portfolio found for “${username}”.`);
          setPortfolio(null);
          return;
        }

        // Clean skills on ingest
        const normalizedSkills = cleanStringArray(data.skills_normalized || []);
        const categories = normalizeSkillCategories(data.skills_categories);

        setPortfolio({
          profileData: {
            name: data.name || "Your Name",
            tagline: data.tagline || "",
            description: data.description || "",
            github: data.github || "",
            linkedin: data.linkedin || "",
            email: data.email || "",
            customLinks: data.custom_links || [],
          },
          aboutData: { paragraphs: data.about_paragraphs || [] },
          skillsData: {
            normalized: normalizedSkills,
            categories,
          },
          workData: { experience: data.work_experience || [] },
          projectsData: { projects: data.projects || [] },
          educationData: { education: data.education || [] },
          contactData: {
            heading: data.contact_heading || "",
            message1: data.contact_message1 || "",
            message2: data.contact_message2 || "",
          },
          certificationsData: { certifications: data.certifications || [] },
        });
      } catch (err: any) {
        console.error("❌ Error fetching portfolio:", err);

        if (err.response?.status === 404) {
          showError(`No public portfolio found for “${username}”.`);
        } else if (err.response?.status === 401 || err.response?.status === 403) {
          showError("This portfolio is private or access is restricted.");
        } else if (err.message?.includes("Network")) {
          showError("Network error — check your internet connection.");
        } else {
          showError("Unable to load portfolio. Please try again later.");
        }

        setPortfolio(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-lg">
        Loading portfolio…
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Portfolio Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          No public portfolio available for this user.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => window.location.reload()}
            className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Retry
          </button>

          <a
            href="https://careerper.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-gray-800"
          >
            Create your portfolio on careerper.in
          </a>
        </div>
      </div>
    );
  }

  const {
    profileData,
    aboutData,
    skillsData,
    workData,
    projectsData,
    educationData,
    contactData,
    certificationsData,
  } = portfolio;

  // Compute once for rendering decision
  const showSkills =
    (Array.isArray(skillsData?.normalized) &&
      skillsData.normalized.length > 0) ||
    hasAnyNonEmptyCategoryValue(skillsData?.categories);

  return (
    <div className="min-h-screen bg-white">
      <NavbarPreview
        activeSection="home"
        scrollToSection={(id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        siteName={profileData?.name}
        social={{
          github: profileData?.github || "",
          linkedin: profileData?.linkedin || "",
          email: profileData?.email || "",
        }}
      />

      <main>
        {/* Hero */}
        {(hasContent(profileData?.name) ||
          hasContent(profileData?.tagline) ||
          hasContent(profileData?.description)) && (
          <HeroPreview profileData={profileData} />
        )}

        {/* About */}
        {hasContent(aboutData?.paragraphs) && (
          <AboutPreview aboutData={aboutData} />
        )}

        {/* Technical Skills */}
        {showSkills && (
          <section className="bg-gray-50">
            <TechnicalSkillsPreview skillsData={skillsData} />
          </section>
        )}

        {/* Work Experience */}
        {hasContent(workData?.experience) && (
          <section className="bg-gray-50">
            <WorkExperiencePreview workData={workData} />
          </section>
        )}

        {/* Education */}
        {hasContent(educationData?.education) && (
          <section className="bg-gray-50">
            <EducationPreview educationData={educationData} />
          </section>
        )}

        {/* Certifications */}
        {hasContent(certificationsData?.certifications) && (
          <section className="bg-gray-50">
            <CertificationsPreview certificationsData={certificationsData} />
          </section>
        )}

        {/* Projects */}
        {hasContent(projectsData?.projects) && (
          <ProjectsPreview projectsData={projectsData} />
        )}

        {/* Contact */}
        {(hasContent(contactData?.heading) ||
          hasContent(contactData?.message1) ||
          hasContent(contactData?.message2)) && (
          <ContactPreview contactData={contactData} profileData={profileData} />
        )}
      </main>

      <Footer name={profileData?.name || ""} />
    </div>
  );
}
