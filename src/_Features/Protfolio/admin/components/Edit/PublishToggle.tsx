// src/pages/portfolio/edit/components/PublishToggle.tsx
import React from 'react';

interface PublishToggleProps {
  published: boolean;
  disabled?: boolean;
  onToggle: (next: boolean) => void;
  label?: string;
}

export default function PublishToggle({
  published,
  disabled = false,
  onToggle,
  label = 'Published'
}: PublishToggleProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button
        onClick={() => onToggle(!published)}
        disabled={disabled}
        aria-pressed={published}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
          published ? 'bg-green-600' : 'bg-gray-300'
        } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            published ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}
