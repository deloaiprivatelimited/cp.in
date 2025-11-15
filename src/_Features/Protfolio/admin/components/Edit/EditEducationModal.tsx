import { X, Plus, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface EducationItem {
  degree: string;
  school: string;
  year: string;
  details: string;
}

interface EducationData {
  education: EducationItem[];
}

interface EditEducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  educationData: EducationData;
  onSave: (data: EducationData) => void;
}

export default function EditEducationModal({ isOpen, onClose, educationData, onSave }: EditEducationModalProps) {
  const [formData, setFormData] = useState<EducationData>(educationData);

  // Keep local state in sync if parent provides new data while open
  useEffect(() => {
    setFormData(educationData);
  }, [educationData]);

  if (!isOpen) return null;

  const handleEducationChange = (index: number, field: keyof EducationItem, value: string) => {
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [field]: value } as EducationItem;
    setFormData({ education: newEducation });
  };

  const addEducation = () => {
    setFormData((prev) => ({
      education: [
        ...prev.education,
        { degree: '', school: '', year: '', details: '' }
      ]
    }));
  };

  const removeEducation = (index: number) => {
    if (formData.education.length > 1) {
      const newEducation = formData.education.filter((_, i) => i !== index);
      setFormData({ education: newEducation });
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
          <h2 className="text-2xl font-bold text-gray-900">Edit Education</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Education
              </label>
              <button
                onClick={addEducation}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              >
                <Plus size={16} />
                Add Education
              </button>
            </div>

            {formData.education.map((edu, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-gray-900">Education {index + 1}</h4>
                  {formData.education.length > 1 && (
                    <button
                      onClick={() => removeEducation(index)}
                      className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-1"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  )}
                </div>

                {/* Program / Degree */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program / Degree
                  </label>
                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., B.Sc. in Computer Science - 8.5 CGPA"
                    aria-label="Program or Degree"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Institution */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Institution (School / College / University)
                    </label>
                    <input
                      type="text"
                      value={edu.school}
                      onChange={(e) => handleEducationChange(index, 'school', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., National Institute of Technology"
                      aria-label="Institution"
                    />
                  </div>

                  {/* Graduation Year */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year of Graduation
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]{4}"
                      value={edu.year}
                      onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 2018"
                      aria-label="Year of Graduation"
                    />
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Education Details (include institution, program, year, and highlights if you prefer one field)
                  </label>
                  <textarea
                    value={edu.details}
                    onChange={(e) => handleEducationChange(index, 'details', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe achievements, specializations, GPA, relevant coursework, honors, or include all details in this single field."
                    aria-label="Education Details"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Tip: If you plan to keep everything in one field, you can leave the individual inputs above blank.
                  </p>
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