// src/pages/portfolio/edit/PortfolioEdit.tsx
import { useState, useEffect } from 'react';
import { getPortfolio, updatePortfolio } from '../../../utils/portfolioApi';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EditModal from './components/Edit/EditModal';
import EditAboutModal from './components/Edit/EditAboutModal';
import EditSkillsModal from './components/Edit/EditSkillsModal';
import EditWorkExperienceModal from './components/Edit/EditWorkExperienceModal';
import EditProjectsModal from './components/Edit/EditProjectsModal';
import EditEducationModal from './components/Edit/EditEducationModal';
import EditContactModal from './components/Edit/EditContactModal';
import EditCertificationsModal from './components/Edit/EditCertificationsModal';
import { showError, showSuccess } from '../../../utils/toast';

interface ProfileData {
  name: string;
  tagline?: string;
  description?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  customLinks?: Array<{ label: string; url: string }>;
}

interface AboutData {
  paragraphs: string[];
}

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

interface SkillsData {
  normalized: string[];
  categories: SkillsCategories;
}

interface WorkExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface WorkExperienceData {
  experience: WorkExperienceItem[];
}

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

interface ProjectsData {
  projects: ProjectItem[];
}

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  details?: string;
}

interface EducationData {
  education: EducationItem[];
}

interface ContactData {
  heading?: string;
  message1?: string;
  message2?: string;
}

interface CertificationsData {
  certifications: string[];
}

function PortfolioEdit() {
  const [activeSection, setActiveSection] = useState('home');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
// add near your other state declarations
const [published, setPublished] = useState<boolean>(false);

  // modals
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditAboutModalOpen, setIsEditAboutModalOpen] = useState(false);
  const [isEditSkillsModalOpen, setIsEditSkillsModalOpen] = useState(false);
  const [isEditWorkModalOpen, setIsEditWorkModalOpen] = useState(false);
  const [isEditProjectsModalOpen, setIsEditProjectsModalOpen] = useState(false);
  const [isEditEducationModalOpen, setIsEditEducationModalOpen] = useState(false);
  const [isEditContactModalOpen, setIsEditContactModalOpen] = useState(false);
  const [isEditCertificationsModalOpen, setIsEditCertificationsModalOpen] = useState(false);

  // data
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [skillsData, setSkillsData] = useState<SkillsData | null>(null);
  const [workData, setWorkData] = useState<WorkExperienceData | null>(null);
  const [projectsData, setProjectsData] = useState<ProjectsData | null>(null);
  const [educationData, setEducationData] = useState<EducationData | null>(null);
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [certificationsData, setCertificationsData] = useState<CertificationsData | null>(null);

  // ui state
  const [loading, setLoading] = useState(true); // initial fetch
  const [saving, setSaving] = useState(false); // general saving guard

  useEffect(() => {
    async function fetchPortfolio() {
      setLoading(true);
      try {
        const res = await getPortfolio();
        // handle backend shape variations:
        const payload = res?.data ?? (res?.success && res) ? res : res;
        // If your getPortfolio returns just the data directly, handle that too
        const data = res?.data ?? (res?.success ? res.data : res);

        // Robust fallback: attempt to find portfolio object
        const portfolio = data || res || {};

        setProfileData({
          name: portfolio.name || 'Your Name',
          tagline: portfolio.tagline || '',
          description: portfolio.description || '',
          github: portfolio.github || '',
          linkedin: portfolio.linkedin || '',
          email: portfolio.email || '',
          customLinks: portfolio.custom_links || []
        });
setPublished(Boolean(portfolio.published));

        setAboutData({ paragraphs: portfolio.about_paragraphs || [] });
        setSkillsData({
          normalized: portfolio.skills_normalized || [],
          categories: portfolio.skills_categories || {}
        });
        setWorkData({ experience: portfolio.work_experience || [] });
        setProjectsData({ projects: portfolio.projects || [] });
        setEducationData({ education: portfolio.education || [] });
        setContactData({
          heading: portfolio.contact_heading || '',
          message1: portfolio.contact_message1 || '',
          message2: portfolio.contact_message2 || ''
        });
        setCertificationsData({ certifications: portfolio.certifications || [] });
      } catch (err: any) {
        console.error('Failed to load portfolio', err);
        // Try to parse known shapes
        if (err?.status === 401) {
          showError('Authentication required. Please sign in again.');
          // optional: redirect handled by interceptor
        } else if (err?.status === 404) {
          showError('No portfolio found — a default will be created when you save.');
        } else {
          showError(err?.message || 'Unable to load portfolio. Check your connection.');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchPortfolio();
  }, []);
const handleTogglePublished = async (next: boolean) => {
  if (saving) {
    showError('Save already in progress. Please wait.');
    return;
  }

  // snapshot profileData for rollback
  const snapshotProfile = profileData;

  try {
    setSaving(true);
    // optimistic update
    setPublished(next);

    // also keep profileData in sync (optional)
    setProfileData(prev => prev ? { ...prev } : prev);

    // call backend: update only the published field
    const res = await updatePortfolio({ published: next });
    const message = res?.message ?? (res?.data && res.data.message) ?? 'Saved successfully';
    showSuccess(message);
    return res;
  } catch (error) {
    const err = normalizeError(error);
    console.error('Publish toggle failed', err);
    // rollback
    setPublished(Boolean(snapshotProfile ? ( (snapshotProfile as any).published ?? false) : false));
    // show error messages
    if (err.status === 400 && err.data) {
      const fieldErrors = err.data.field_errors || err.data.errors || err.data;
      const human = typeof fieldErrors === 'string' ? fieldErrors : JSON.stringify(fieldErrors);
      showError(human || err.message || 'Validation failed');
    } else if (err.status === 401) {
      showError('Authentication required. Please sign in again.');
    } else {
      showError(err.message || 'Save failed. Try again later.');
    }
    throw err;
  } finally {
    setSaving(false);
  }
};

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Helper: standardize error from backend or thrown Error
  const normalizeError = (err: any) => {
    // if API helpers throw an Error with .status and .data
    if (err instanceof Error) {
      return {
        message: err.message || 'An error occurred',
        status: (err as any).status ?? 0,
        data: (err as any).data ?? null
      };
    }
    // if axios-like error object
    if (err?.response) {
      const payload = err.response.data || {};
      return {
        message: payload.message || err.response.statusText || 'Server error',
        status: err.response.status,
        data: payload.data || payload || null
      };
    }
    // fallback
    return { message: err?.message || String(err) || 'Unknown error', status: err?.status ?? 0, data: err?.data ?? null };
  };

  // Generic save helper: optimistic update with rollback
  const saveAndHandle = async <T,>(
    key: string,
    newValue: T,
    setter: (v: T) => void,
    apiPayload: Record<string, any>
  ) => {
    if (saving) {
      showError('Save already in progress. Please wait.');
      return;
    }

    // snapshot
    const snapshots: Record<string, any> = {
      profileData,
      aboutData,
      skillsData,
      workData,
      projectsData,
      educationData,
      contactData,
      certificationsData
    };

    try {
      setSaving(true);
      // optimistic UI update
      setter(newValue);
      // call backend
      const res = await updatePortfolio(apiPayload);
      // handle backend shapes:
      const message = res?.message ?? (res?.data && res.data.message) ?? 'Saved successfully';
      showSuccess(message);
      return res;
    } catch (error) {
      const err = normalizeError(error);
      console.error('Save failed', err);
      // rollback
      // @ts-ignore
      switch (key) {
        case 'profile':
          setProfileData(snapshots.profileData);
          break;
        case 'about':
          setAboutData(snapshots.aboutData);
          break;
        case 'skills':
          setSkillsData(snapshots.skillsData);
          break;
        case 'work':
          setWorkData(snapshots.workData);
          break;
        case 'projects':
          setProjectsData(snapshots.projectsData);
          break;
        case 'education':
          setEducationData(snapshots.educationData);
          break;
        case 'contact':
          setContactData(snapshots.contactData);
          break;
        case 'certifications':
          setCertificationsData(snapshots.certificationsData);
          break;
        default:
          break;
      }

      // show detailed validation errors if present
      if (err.status === 400 && err.data) {
        const fieldErrors = err.data.field_errors || err.data.errors || err.data;
        const human = typeof fieldErrors === 'string' ? fieldErrors : JSON.stringify(fieldErrors);
        showError(human || err.message || 'Validation failed');
      } else if (err.status === 401) {
        showError('Authentication required. Please sign in again.');
        // optional: redirect; interceptor may already do it
      } else {
        showError(err.message || 'Save failed. Try again later.');
      }
      throw err; // rethrow so callers can react if they want
    } finally {
      setSaving(false);
    }
  };

  // Save handlers that use saveAndHandle
  const handleSaveProfile = async (data: ProfileData) => {
    await saveAndHandle<ProfileData>('profile', data, setProfileData, {
      name: data.name,
      tagline: data.tagline,
      description: data.description,
      github: data.github,
      linkedin: data.linkedin,
      email: data.email,
      custom_links: data.customLinks ?? []
    });
  };

  const handleSaveAbout = async (data: AboutData) => {
    await saveAndHandle<AboutData>('about', data, setAboutData, {
      about_paragraphs: data.paragraphs
    });
  };

  const handleSaveSkills = async (data: SkillsData) => {
    await saveAndHandle<SkillsData>('skills', data, setSkillsData, {
      skills_normalized: data.normalized,
      skills_categories: data.categories
    });
  };

  const handleSaveWork = async (data: WorkExperienceData) => {
    await saveAndHandle<WorkExperienceData>('work', data, setWorkData, {
      work_experience: data.experience
    });
  };

  const handleSaveProjects = async (data: ProjectsData) => {
    await saveAndHandle<ProjectsData>('projects', data, setProjectsData, {
      projects: data.projects
    });
  };

  const handleSaveEducation = async (data: EducationData) => {
    await saveAndHandle<EducationData>('education', data, setEducationData, {
      education: data.education
    });
  };

  const handleSaveContact = async (data: ContactData) => {
    await saveAndHandle<ContactData>('contact', data, setContactData, {
      contact_heading: data.heading,
      contact_message1: data.message1,
      contact_message2: data.message2
    });
  };

  const handleSaveCertifications = async (data: CertificationsData) => {
    await saveAndHandle<CertificationsData>('certifications', data, setCertificationsData, {
      certifications: data.certifications
    });
  };

  // only render loader while initial load
  if (loading || !profileData || !aboutData || !skillsData || !workData || !projectsData || !educationData || !contactData || !certificationsData) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <button
        onClick={() => setIsPreviewMode(!isPreviewMode)}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg font-medium"
      >
        {isPreviewMode ? 'Edit Mode' : 'Preview Mode'}
      </button>

<Navbar
  activeSection={activeSection}
  scrollToSection={scrollToSection}
  siteName={profileData.name}
  social={{
    github: profileData.github || '',
    linkedin: profileData.linkedin || '',
    email: profileData.email || ''
  }}
  published={published}
  onTogglePublished={handleTogglePublished}
  publishDisabled={saving}
/>


      <main>
        <Hero
          profileData={profileData}
          onEditClick={() => setIsEditModalOpen(true)}
          showEditButton={!isPreviewMode}
        />

        <About
          aboutData={aboutData}
          onEditClick={() => setIsEditAboutModalOpen(true)}
          showEditButton={!isPreviewMode}
        />

        <section className="bg-gray-50">
          <TechnicalSkills
            skillsData={skillsData}
            onEditClick={() => setIsEditSkillsModalOpen(true)}
            showEditButton={!isPreviewMode}
          />
          <WorkExperience
            workData={workData}
            onEditClick={() => setIsEditWorkModalOpen(true)}
            showEditButton={!isPreviewMode}
          />
          <Education
            educationData={educationData}
            onEditClick={() => setIsEditEducationModalOpen(true)}
            showEditButton={!isPreviewMode}
          />
          <Certifications
            certificationsData={certificationsData}
            onEditClick={() => setIsEditCertificationsModalOpen(true)}
            showEditButton={!isPreviewMode}
          />
        </section>

        <Projects
          projectsData={projectsData}
          onEditClick={() => setIsEditProjectsModalOpen(true)}
          showEditButton={!isPreviewMode}
        />

        <Contact
          contactData={contactData}
          profileData={profileData}
          onEditClick={() => setIsEditContactModalOpen(true)}
          showEditButton={!isPreviewMode}
        />
      </main>

      <Footer name={profileData.name} />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        profileData={profileData}
        onSave={handleSaveProfile}
        saving={saving}
      />

      <EditAboutModal
        isOpen={isEditAboutModalOpen}
        onClose={() => setIsEditAboutModalOpen(false)}
        aboutData={aboutData}
        onSave={handleSaveAbout}
        saving={saving}
      />

      <EditSkillsModal
        isOpen={isEditSkillsModalOpen}
        onClose={() => setIsEditSkillsModalOpen(false)}
        skillsData={skillsData}
        onSave={handleSaveSkills}
        saving={saving}
      />

      <EditWorkExperienceModal
        isOpen={isEditWorkModalOpen}
        onClose={() => setIsEditWorkModalOpen(false)}
        workData={workData}
        onSave={handleSaveWork}
        saving={saving}
      />

      <EditProjectsModal
        isOpen={isEditProjectsModalOpen}
        onClose={() => setIsEditProjectsModalOpen(false)}
        projectsData={projectsData}
        onSave={handleSaveProjects}
        saving={saving}
      />

      <EditEducationModal
        isOpen={isEditEducationModalOpen}
        onClose={() => setIsEditEducationModalOpen(false)}
        educationData={educationData}
        onSave={handleSaveEducation}
        saving={saving}
      />

      <EditContactModal
        isOpen={isEditContactModalOpen}
        onClose={() => setIsEditContactModalOpen(false)}
        contactData={contactData}
        onSave={handleSaveContact}
        saving={saving}
      />

      <EditCertificationsModal
        isOpen={isEditCertificationsModalOpen}
        onClose={() => setIsEditCertificationsModalOpen(false)}
        certificationsData={certificationsData}
        onSave={handleSaveCertifications}
        saving={saving}
      />
    </div>
  );
}

export default PortfolioEdit;
