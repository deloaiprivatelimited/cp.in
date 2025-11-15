import { X, Sparkles, Plus, Trash2 } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { privateAxios } from '../../../../../utils/axios';
import { showError, showSuccess } from '../../../../../utils/toast';

interface AboutData {
  paragraphs: string[];
}

// Align with your backend response envelope
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

interface EditAboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  aboutData: AboutData;
  onSave: (data: AboutData) => void | Promise<void>;
}

export default function EditAboutModal({ isOpen, onClose, aboutData, onSave }: EditAboutModalProps) {
  const [formData, setFormData] = useState<AboutData>(aboutData);
  // const [useAI, setUseAI] = useState(false);
  // const [aiPrompt, setAiPrompt] = useState('');
  // const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Sync incoming props when the modal opens or the payload changes
  useEffect(() => {
    if (isOpen) setFormData(aboutData);
  }, [isOpen, aboutData]);

  const cleanedParagraphs = useMemo(
    () => (formData.paragraphs || []).map(p => (p ?? '').trim()),
    [formData.paragraphs]
  );

  if (!isOpen) return null;

  // const handleGenerateWithAI = async () => {
  //   const payloadPrompt = aiPrompt.trim();
  //   const context = cleanedParagraphs.filter(Boolean);

  //   if (!payloadPrompt && context.length === 0) {
  //     showError('Provide an AI prompt or at least one existing paragraph as context');
  //     return;
  //   }

  //   setIsGenerating(true);
  //   try {
  //     const resp = await privateAxios.post<ApiSuccess<AboutData> | ApiError>(
  //       '/openai/api/about/generate',
  //       {
  //         prompt: payloadPrompt || undefined,
  //         context: context.length ? context : undefined,
  //       }
  //     );

  //     if ('success' in resp.data && resp.data.success) {
  //       const next = resp.data.data;
  //       setFormData({ paragraphs: next.paragraphs });
  //       showSuccess('AI generated the About section successfully');
  //     } else {
  //       showError((resp.data as ApiError).message || 'Failed to generate About with AI');
  //     }
  //   } catch (err: any) {
  //     const message = err?.response?.data?.message || err?.message || 'Failed to generate About with AI';
  //     showError(message);
  //   } finally {
  //     setIsGenerating(false);
  //   }
  // };

  const handleParagraphChange = (index: number, value: string) => {
    const next = [...formData.paragraphs];
    next[index] = value;
    setFormData({ paragraphs: next });
  };

  const addParagraph = () => {
    setFormData({ paragraphs: [...formData.paragraphs, ''] });
  };

  const removeParagraph = (index: number) => {
    if (formData.paragraphs.length <= 1) return;
    const next = formData.paragraphs.filter((_, i) => i !== index);
    setFormData({ paragraphs: next });
  };

  const handleSave = async () => {
    const nonEmpty = cleanedParagraphs.filter(Boolean);
    if (nonEmpty.length === 0) {
      showError('Please add at least one About paragraph');
      return;
    }

    setIsSaving(true);
    try {
      await onSave({ paragraphs: cleanedParagraphs });
      onClose();
    } catch (err: any) {
      showError(err?.message || 'Failed to save About');
    } finally {
      setIsSaving(false);
    }
  };

  // const generateDisabled = isGenerating || (aiPrompt.trim().length === 0 && cleanedParagraphs.every(p => p.length === 0));

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Edit About Section</h2>
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
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Full Stack Web Development"
                    />
                    <button
                      onClick={handleGenerateWithAI}
                      disabled={generateDisabled}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Sparkles size={16} />
                      {isGenerating ? 'Generating…' : 'Generate'}
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Tip: Leave the prompt empty if you want the AI to refine your current paragraphs. It will use them as context.
                  </p>
                </div>
              </div>
            )}
          </div> */}

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">About Paragraphs</label>
              <button
                onClick={addParagraph}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                <Plus size={16} />
                Add Paragraph
              </button>
            </div>

            {formData.paragraphs.map((paragraph, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-700">Paragraph {index + 1}</label>
                  {formData.paragraphs.length > 1 && (
                    <button
                      onClick={() => removeParagraph(index)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                      aria-label="Remove paragraph"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
                <textarea
                  value={paragraph}
                  onChange={(e) => handleParagraphChange(index, e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write about yourself..."
                />
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
            disabled={isSaving}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Saving…' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
