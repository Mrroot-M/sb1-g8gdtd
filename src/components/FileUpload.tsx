import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { Button } from './ui/button';

export function FileUpload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Handle file upload logic here
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc', '.docx'],
      'application/vnd.ms-powerpoint': ['.ppt', '.pptx'],
      'application/zip': ['.zip']
    }
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary cursor-pointer transition-colors"
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">
        {isDragActive ? "Déposez les fichiers ici" : "Glissez-déposez vos fichiers"}
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        PDF, Word, PowerPoint, ou ZIP jusqu'à 10MB
      </p>
      <Button className="mt-4" variant="outline" size="sm">
        Sélectionner des fichiers
      </Button>
    </div>
  );
}