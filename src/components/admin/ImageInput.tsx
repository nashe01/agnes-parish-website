
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FileUpload from "./FileUpload";

interface ImageInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
}

const ImageInput: React.FC<ImageInputProps> = ({ label, value, onChange }) => {
  const [mode, setMode] = useState<"url" | "file">(value ? (value.startsWith("http") ? "url" : "file") : "url");

  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      <div className="flex gap-2 mb-2">
        <button
          type="button"
          className={`px-3 py-1 rounded ${mode === "url" ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-700"}`}
          onClick={() => setMode("url")}
        >
          Paste image URL
        </button>
        <button
          type="button"
          className={`px-3 py-1 rounded ${mode === "file" ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-700"}`}
          onClick={() => setMode("file")}
        >
          Upload file
        </button>
      </div>
      {mode === "url" ? (
        <Input
          placeholder="https://images.unsplash.com/..."
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      ) : (
        <FileUpload onFileUpload={onChange} currentFile={value} />
      )}
    </div>
  );
};
export default ImageInput;
