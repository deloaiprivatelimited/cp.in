// EditSkillsModal.tsx
import { X, Sparkles, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { privateAxios } from '../../../../../utils/axios';
import { showError, showSuccess } from '../../../../../utils/toast';

interface SkillsData {
  normalized?: string[];
  categories?: {
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
  };
}

interface EditSkillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  skillsData: SkillsData;
  onSave: (data: SkillsData) => void;
}

export default function EditSkillsModal({ isOpen, onClose, skillsData, onSave }: EditSkillsModalProps) {
  const [formData, setFormData] = useState<SkillsData>({
    normalized: skillsData.normalized ?? [],
    categories: {
      Languages: skillsData.categories?.Languages ?? [],
      Frameworks: skillsData.categories?.Frameworks ?? [],
      Libraries: skillsData.categories?.Libraries ?? [],
      Databases: skillsData.categories?.Databases ?? [],
      DevOps: skillsData.categories?.DevOps ?? [],
      Cloud: skillsData.categories?.Cloud ?? [],
      Testing: skillsData.categories?.Testing ?? [],
      DataAI: skillsData.categories?.DataAI ?? [],
      Tools: skillsData.categories?.Tools ?? [],
      Other: skillsData.categories?.Other ?? [],
    },
  });

  const [useAI, setUseAI] = useState(false);
  const [skillsInput, setSkillsInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const categoryLabels = {
    Languages: 'Languages',
    Frameworks: 'Frameworks',
    Libraries: 'Libraries',
    Databases: 'Databases',
    DevOps: 'DevOps',
    Cloud: 'Cloud',
    Testing: 'Testing',
    DataAI: 'Data & AI',
    Tools: 'Tools',
    Other: 'Other',
  } as const;

  const handleOrganizeWithAI = async () => {
    const raw = skillsInput.trim();
    if (!raw) {
      showError('Enter at least one skill to organize');
      return;
    }
    setIsGenerating(true);
    try {
      // The backend accepts either CSV or newline text under "skills"
      const resp = await privateAxios.post('/openai/api/skills/organize', { skills: raw });

      // Align to your standard envelope
      if (resp?.data?.success !== true) {
        throw new Error(resp?.data?.message || 'Failed to organize skills');
      }

      const data = resp.data.data as SkillsData;

      // Defensive defaults
      const next: SkillsData = {
        normalized: data.normalized ?? [],
        categories: {
          Languages: data.categories?.Languages ?? [],
          Frameworks: data.categories?.Frameworks ?? [],
          Libraries: data.categories?.Libraries ?? [],
          Databases: data.categories?.Databases ?? [],
          DevOps: data.categories?.DevOps ?? [],
          Cloud: data.categories?.Cloud ?? [],
          Testing: data.categories?.Testing ?? [],
          DataAI: data.categories?.DataAI ?? [],
          Tools: data.categories?.Tools ?? [],
          Other: data.categories?.Other ?? [],
        },
      };

      setFormData(next);
      showSuccess('Organized skills with AI');
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        'Failed to organize skills';
      showError(message);
    } finally {
      setIsGenerating(false);
    }
  };

  const addSkillToCategory = (category: keyof NonNullable<SkillsData['categories']>) => {
    const newSkill = prompt(`Enter new skill for ${categoryLabels[category]}:`);
    if (!newSkill?.trim()) return;
    const skill = newSkill.trim();
    const categories = { ...(formData.categories ?? {}) };
    categories[category] = [...(categories[category] ?? []), skill];

    // Derive normalized from categories to avoid drift
    const normalized = Array.from(new Set(Object.values(categories).flat()));

    setFormData({ normalized, categories });
  };

  const removeSkillFromCategory = (category: keyof NonNullable<SkillsData['categories']>, skillIndex: number) => {
    const categories = { ...(formData.categories ?? {}) };
    categories[category] = (categories[category] ?? []).filter((_, i) => i !== skillIndex);
    const normalized = Array.from(new Set(Object.values(categories).flat()));
    setFormData({ normalized, categories });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Edit Technical Skills</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-gray-700">Use AI to Organize</label>
              <button
                onClick={() => !isGenerating && setUseAI(!useAI)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${useAI ? 'bg-blue-600' : 'bg-gray-300'}`}
                disabled={isGenerating}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${useAI ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            {useAI && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enter Skills (comma or newline separated)</label>
                  <div className="space-y-2">
                    <textarea
                      value={skillsInput}
                      onChange={(e) => setSkillsInput(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., react, typescript, python&#10;aws&#10;docker, postgresql, jest"
                    />
                    <button
                      onClick={handleOrganizeWithAI}
                      disabled={isGenerating || skillsInput.trim().length === 0}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Sparkles size={16} />
                      {isGenerating ? 'Organizing…' : 'Organize with AI'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Skills by Category</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(Object.keys(formData.categories ?? {}) as Array<keyof NonNullable<SkillsData['categories']>>).map((category) => (
                <div key={String(category)} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">{categoryLabels[category]}</h4>
                    <button onClick={() => addSkillToCategory(category)} className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                      <Plus size={16} /> Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(formData.categories?.[category] ?? []).length === 0 ? (
                      <span className="text-sm text-gray-400 italic">No skills yet</span>
                    ) : (
                      (formData.categories?.[category] ?? []).map((skill, index) => (
                        <div key={`${skill}-${index}`} className="group px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium border border-gray-200 flex items-center gap-2">
                          <span>{skill}</span>
                          <button
                            onClick={() => removeSkillFromCategory(category, index)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity text-red-600 hover:text-red-700"
                            aria-label="Remove skill"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end gap-4">
          <button onClick={onClose} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
            Cancel
          </button>
          <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
