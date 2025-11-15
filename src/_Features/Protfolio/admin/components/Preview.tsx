import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import TechnicalSkills from './TechnicalSkills';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Certifications from './Certifications';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

interface ProfileData {
  name: string;
  tagline: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  customLinks: Array<{ label: string; url: string }>;
}

interface AboutData {
  paragraphs: string[];
}

interface SkillsData {
  normalized: string[];
  categories: {
    Languages: string[];
    Frameworks: string[];
    Libraries: string[];
    Databases: string[];
    DevOps: string[];
    Cloud: string[];
    Testing: string[];
    DataAI: string[];
    Tools: string[];
    Other: string[];
  };
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
  github: string;
  demo: string;
}

interface ProjectsData {
  projects: ProjectItem[];
}

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  details: string;
}

interface EducationData {
  education: EducationItem[];
}

interface ContactData {
  heading: string;
  message1: string;
  message2: string;
}

interface CertificationsData {
  certifications: string[];
}

interface PreviewProps {
  profileData: ProfileData;
  aboutData: AboutData;
  skillsData: SkillsData;
  workData: WorkExperienceData;
  projectsData: ProjectsData;
  educationData: EducationData;
  contactData: ContactData;
  certificationsData: CertificationsData;
}

export default function Preview({
  profileData,
  aboutData,
  skillsData,
  workData,
  projectsData,
  educationData,
  contactData,
  certificationsData
}: PreviewProps) {
  const [activeSection, setActiveSection] = useState('home');

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
    if (element) {
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero
          profileData={profileData}
          onEditClick={() => {}}
          showEditButton={false}
        />

        <About
          aboutData={aboutData}
          onEditClick={() => {}}
          showEditButton={false}
        />

        <section className="bg-gray-50">
          <TechnicalSkills
            skillsData={skillsData}
            onEditClick={() => {}}
            showEditButton={false}
          />
          <WorkExperience
            workData={workData}
            onEditClick={() => {}}
            showEditButton={false}
          />
          <Education
            educationData={educationData}
            onEditClick={() => {}}
            showEditButton={false}
          />
          <Certifications
            certificationsData={certificationsData}
            onEditClick={() => {}}
            showEditButton={false}
          />
        </section>

        <Projects
          projectsData={projectsData}
          onEditClick={() => {}}
          showEditButton={false}
        />

        <Contact
          contactData={contactData}
          profileData={profileData}
          onEditClick={() => {}}
          showEditButton={false}
        />
      </main>

      <Footer />
    </div>
  );
}
