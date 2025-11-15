import { X, Sparkles, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface WorkExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface WorkExperienceData {
  experience: WorkExperienceItem[];
}

interface EditWorkExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  workData: WorkExperienceData;
  onSave: (data: WorkExperienceData) => void;
}

export default function EditWorkExperienceModal({ isOpen, onClose, workData, onSave }: EditWorkExperienceModalProps) {
  const [formData, setFormData] = useState(workData);
  const [useAI, setUseAI] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleGenerateWithAI = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setFormData({
        experience: [
          {
            title: `Senior ${aiPrompt}`,
            company: 'Tech Innovations Inc.',
            period: '2022 - Present',
            description: `Led development of enterprise applications in ${aiPrompt.toLowerCase()}. Architected scalable solutions and mentored junior developers. Established coding best practices and improved team productivity by 40%.`
          },
          {
            title: aiPrompt,
            company: 'Digital Solutions Co.',
            period: '2020 - 2022',
            description: `Built modern applications using cutting-edge technologies. Collaborated with cross-functional teams to deliver high-quality solutions. Introduced modern tooling and testing practices.`
          },
          {
            title: `Junior ${aiPrompt}`,
            company: 'StartUp Ventures',
            period: '2018 - 2020',
            description: `Developed and maintained multiple projects. Implemented best practices for code quality and accessibility. Managed deployment pipelines and version control workflows.`
          }
        ]
      });
      setIsGenerating(false);
    }, 1500);
  };

  const handleExperienceChange = (index: number, field: keyof WorkExperienceItem, value: string) => {
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setFormData({ experience: newExperience });
  };

  const addExperience = () => {
    setFormData({
      experience: [
        ...formData.experience,
        {
          title: '',
          company: '',
          period: '',
          description: ''
        }
      ]
    });
  };

  const removeExperience = (index: number) => {
    if (formData.experience.length > 1) {
      const newExperience = formData.experience.filter((_, i) => i !== index);
      setFormData({ experience: newExperience });
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
          <h2 className="text-2xl font-bold text-gray-900">Edit Work Experience</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="border-t border-gray-200 pt-6">
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
                      placeholder="e.g., Full Stack Developer"
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
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Work Experience
              </label>
              <button
                onClick={addExperience}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                <Plus size={16} />
                Add Experience
              </button>
            </div>

            {formData.experience.map((job, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900">Experience {index + 1}</h4>
                  {formData.experience.length > 1 && (
                    <button
                      onClick={() => removeExperience(index)}
                      className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-1"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      value={job.title}
                      onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Senior Full Stack Developer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={job.company}
                      onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Tech Innovations Inc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Period
                    </label>
                    <input
                      type="text"
                      value={job.period}
                      onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 2022 - Present"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={job.description}
                    onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your responsibilities and achievements..."
                  />
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
