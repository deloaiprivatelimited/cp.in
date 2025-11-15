import { X, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface ContactData {
  heading: string;
  message1: string;
  message2: string;
}

interface EditContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactData: ContactData;
  onSave: (data: ContactData) => void;
}

export default function EditContactModal({ isOpen, onClose, contactData, onSave }: EditContactModalProps) {
  const [formData, setFormData] = useState(contactData);
  // const [useAI, setUseAI] = useState(false);
  // const [aiPrompt, setAiPrompt] = useState('');
  // const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  // const handleGenerateWithAI = () => {
  //   setIsGenerating(true);
  //   setTimeout(() => {
  //     setFormData({
  //       heading: `Let's ${aiPrompt} Together`,
  //       message1: `I'm always excited to ${aiPrompt.toLowerCase()} and explore new opportunities. Whether you're looking to collaborate on innovative projects or discuss ideas, I'm here to help.`,
  //       message2: `Feel free to reach out through any of the channels below. I'll do my best to get back to you as soon as possible!`
  //     });
  //     setIsGenerating(false);
  //   }, 1500);
  // };

  const handleChange = (field: keyof ContactData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Edit Contact Section</h2>
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
                      placeholder="e.g., Build Something, Collaborate, Connect"
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Heading
              </label>
              <input
                type="text"
                value={formData.heading}
                onChange={(e) => handleChange('heading', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Get In Touch"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Message
              </label>
              <textarea
                value={formData.message1}
                onChange={(e) => handleChange('message1', e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Introduce yourself and what you're open to..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Second Message
              </label>
              <textarea
                value={formData.message2}
                onChange={(e) => handleChange('message2', e.target.value)}
                rows={2}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Add a call to action or additional information..."
              />
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
