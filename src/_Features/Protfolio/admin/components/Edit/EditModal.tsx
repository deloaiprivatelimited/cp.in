import { X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { privateAxios } from '../../../../../utils/axios';
import { showError, showSuccess } from '../../../../../utils/toast';

interface ProfileData {
  name: string;
  tagline: string;
  description: string;
  github: string;
  linkedin: string;
  email: string;
  customLinks: Array<{ label: string; url: string }>;
}

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileData: ProfileData;
  onSave: (data: ProfileData) => void;
}

// API response types from Flask utils.response()
type ApiSuccess<T> = {
  success: true;
  message: string;
  data: T;
};

type ApiError = {
  success: false;
  message: string;
  data?: any;
};

type EnhanceHeroData = {
  improved: string; // 1–2 short sentences
  tagline: string;  // 2–6 words
};

export default function EditModal({ isOpen, onClose, profileData, onSave }: EditModalProps) {
  const [formData, setFormData] = useState(profileData);
  // const [useAI, setUseAI] = useState(false);
  // const [aiPrompt, setAiPrompt] = useState('');
  // const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  // const handleGenerateWithAI = async () => {
  //   const payload = (aiPrompt || formData.description || '').trim();
  //   if (!payload) {
  //     showError('Please provide an AI prompt or fill the Description field first');
  //     return;
  //   }

  //   setIsGenerating(true);

  //   try {
  //     const response = await privateAxios.post<ApiSuccess<EnhanceHeroData> | ApiError>(
  //       '/openai/api/hero/description/enhance',
  //       { description: payload }
  //     );

  //     if ('success' in response.data && response.data.success) {
  //       const { improved, tagline } = response.data.data;
  //       setFormData(prev => ({
  //         ...prev,
  //         tagline,
  //         description: improved,
  //       }));
  //       showSuccess('AI enhancement completed successfully');
  //     } else {
  //       showError((response.data as ApiError).message || 'Failed to enhance with AI');
  //     }
  //   } catch (error: any) {
  //     const errorMessage = error?.response?.data?.message || error?.message || 'Failed to generate with AI';
  //     showError(errorMessage);
  //   } finally {
  //     setIsGenerating(false);
  //   }
  // };

  const handleCustomLinkChange = (index: number, field: 'label' | 'url', value: string) => {
    const newLinks = [...formData.customLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setFormData({ ...formData, customLinks: newLinks });
  };

  const addCustomLink = () => {
    if (formData.customLinks.length < 3) {
      setFormData({
        ...formData,
        customLinks: [...formData.customLinks, { label: '', url: '' }],
      });
    }
  };

  const removeCustomLink = (index: number) => {
    const newLinks = formData.customLinks.filter((_, i) => i !== index);
    setFormData({ ...formData, customLinks: newLinks });
  };

  const handleSave = async () => {
    try {
      // Validate required fields
      if (!formData.name || !formData.email) {
        showError('Name and email are required fields');
        return;
      }

      await onSave(formData);
      onClose();
    } catch (error: any) {
      showError(error?.message || 'Failed to save profile');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          {/* <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-medium text-gray-700">Use AI to Generate</label>
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
      <label className="block text-sm font-medium text-gray-700 mb-2">AI Prompt</label>
      <div className="flex flex-col gap-2">
        <textarea
          value={aiPrompt}
          onChange={(e) => setAiPrompt(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describe your role or goals. AI will generate a tagline and a short description."
        />
        <button
          onClick={handleGenerateWithAI}
          disabled={isGenerating}
          className="self-start px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Sparkles size={16} />
          {isGenerating ? 'Generating…' : 'Generate'}
        </button>
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Tip: Leave the prompt empty to use your current Description as context. AI will generate both Tagline and Description.
      </p>
    </div>
  </div>
)}

          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="2 to 6 words. Can be AI-generated."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="1 to 2 short sentences. Can be AI-generated."
            />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Links</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GitHub URL</label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://github.com/username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Custom Links</h3>
              {formData.customLinks.length < 3 && (
                <button
                  onClick={addCustomLink}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  + Add Link
                </button>
              )}
            </div>

            <div className="space-y-4">
              {formData.customLinks.map((link, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={link.label}
                    onChange={(e) => handleCustomLinkChange(index, 'label', e.target.value)}
                    className="w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Label"
                  />
                  <input
                    type="url"
                    value={link.url}
                    onChange={(e) => handleCustomLinkChange(index, 'url', e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="URL"
                  />
                  <button
                    onClick={() => removeCustomLink(index)}
                    className="px-3 py-2 text-red-600 hover:text-red-700 transition-colors"
                    aria-label="Remove link"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
              {formData.customLinks.length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">
                  No custom links added. Click "Add Link" to add up to 3 custom links.
                </p>
              )}
            </div>
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
