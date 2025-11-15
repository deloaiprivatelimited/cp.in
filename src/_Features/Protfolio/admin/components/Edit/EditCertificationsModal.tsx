import { X, Sparkles, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface CertificationsData {
  certifications: string[];
}

interface EditCertificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificationsData: CertificationsData;
  onSave: (data: CertificationsData) => void;
}

export default function EditCertificationsModal({ isOpen, onClose, certificationsData, onSave }: EditCertificationsModalProps) {
  const [formData, setFormData] = useState(certificationsData);
  // const [useAI, setUseAI] = useState(false);
  // const [aiPrompt, setAiPrompt] = useState('');
  // const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  // const handleGenerateWithAI = () => {
  //   setIsGenerating(true);
  //   setTimeout(() => {
  //     setFormData({
  //       certifications: [
  //         `${aiPrompt} Professional Certification`,
  //         `Advanced ${aiPrompt} Specialist`,
  //         `${aiPrompt} Expert Certification`,
  //         `Certified ${aiPrompt} Developer`
  //       ]
  //     });
  //     setIsGenerating(false);
  //   }, 1500);
  // };

  const handleCertificationChange = (index: number, value: string) => {
    const newCertifications = [...formData.certifications];
    newCertifications[index] = value;
    setFormData({ certifications: newCertifications });
  };

  const addCertification = () => {
    setFormData({
      certifications: [...formData.certifications, '']
    });
  };

  const removeCertification = (index: number) => {
    if (formData.certifications.length > 1) {
      const newCertifications = formData.certifications.filter((_, i) => i !== index);
      setFormData({ certifications: newCertifications });
    }
  };

  const handleSave = () => {
    const filteredCertifications = formData.certifications.filter(cert => cert.trim() !== '');
    onSave({ certifications: filteredCertifications });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Edit Certifications</h2>
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
                      placeholder="e.g., AWS, React, Cloud"
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
                Certifications
              </label>
              <button
                onClick={addCertification}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                <Plus size={16} />
                Add Certification
              </button>
            </div>

            <div className="space-y-3">
              {formData.certifications.map((cert, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={cert}
                    onChange={(e) => handleCertificationChange(index, e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., AWS Certified Developer"
                  />
                  {formData.certifications.length > 1 && (
                    <button
                      onClick={() => removeCertification(index)}
                      className="px-3 text-red-600 hover:text-red-700 transition-colors"
                      aria-label="Remove certification"
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              ))}
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
