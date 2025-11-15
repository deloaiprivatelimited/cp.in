import { X, Sparkles, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

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

interface EditProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectsData: ProjectsData;
  onSave: (data: ProjectsData) => void;
}

export default function EditProjectsModal({ isOpen, onClose, projectsData, onSave }: EditProjectsModalProps) {
  const [formData, setFormData] = useState(projectsData);
  // const [useAI, setUseAI] = useState(false);
  // const [aiPrompt, setAiPrompt] = useState('');
  // const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  // const handleGenerateWithAI = () => {
  //   setIsGenerating(true);
  //   setTimeout(() => {
  //     setFormData({
  //       projects: [
  //         {
  //           title: `${aiPrompt} Platform`,
  //           description: `A full-featured ${aiPrompt.toLowerCase()} platform with modern features and integrations. Built with cutting-edge technologies and best practices.`,
  //           technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  //           github: 'https://github.com/yourusername/project-1',
  //           demo: 'https://demo.example.com'
  //         },
  //         {
  //           title: `${aiPrompt} Dashboard`,
  //           description: `Interactive dashboard for ${aiPrompt.toLowerCase()} with real-time updates, data visualization, and analytics capabilities.`,
  //           technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
  //           github: 'https://github.com/yourusername/project-2',
  //           demo: 'https://dashboard.example.com'
  //         },
  //         {
  //           title: `${aiPrompt} Mobile App`,
  //           description: `Mobile-first application for ${aiPrompt.toLowerCase()} featuring responsive design, offline support, and seamless user experience.`,
  //           technologies: ['React', 'PWA', 'Firebase', 'Material UI'],
  //           github: 'https://github.com/yourusername/project-3',
  //           demo: 'https://app.example.com'
  //         }
  //       ]
  //     });
  //     setIsGenerating(false);
  //   }, 1500);
  // };

  const handleProjectChange = (index: number, field: keyof ProjectItem, value: string | string[]) => {
    const newProjects = [...formData.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    setFormData({ projects: newProjects });
  };

  const handleTechnologiesChange = (index: number, value: string) => {
    const technologies = value.split(',').map(t => t.trim()).filter(t => t);
    handleProjectChange(index, 'technologies', technologies);
  };

  const addProject = () => {
    setFormData({
      projects: [
        ...formData.projects,
        {
          title: '',
          description: '',
          technologies: [],
          github: '',
          demo: ''
        }
      ]
    });
  };

  const removeProject = (index: number) => {
    if (formData.projects.length > 1) {
      const newProjects = formData.projects.filter((_, i) => i !== index);
      setFormData({ projects: newProjects });
    }
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Edit Projects</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-gray-700">
                Use AI to Generate
              </label>
              <button
                onClick={() => setUseAI(!useAI)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  useAI ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    useAI ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {useAI && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    AI Prompt
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., E-Commerce, Social Media, Analytics"
                    />
                    <button
                      onClick={handleGenerateWithAI}
                      disabled={!aiPrompt || isGenerating}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Sparkles size={16} />
                      {isGenerating ? 'Generating...' : 'Generate'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div> */}

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Projects
              </label>
              <button
                onClick={addProject}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                <Plus size={16} />
                Add Project
              </button>
            </div>

            {formData.projects.map((project, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900">Project {index + 1}</h4>
                  {formData.projects.length > 1 && (
                    <button
                      onClick={() => removeProject(index)}
                      className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-1"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., E-Commerce Platform"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={project.description}
                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe the project..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technologies (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={project.technologies.join(', ')}
                    onChange={(e) => handleTechnologiesChange(index, e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., React, TypeScript, Tailwind CSS"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GitHub URL
                    </label>
                    <input
                      type="url"
                      value={project.github}
                      onChange={(e) => handleProjectChange(index, 'github', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://github.com/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Demo URL
                    </label>
                    <input
                      type="url"
                      value={project.demo}
                      onChange={(e) => handleProjectChange(index, 'demo', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://demo.example.com"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
