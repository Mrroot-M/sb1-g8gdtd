import React from 'react';
import { FileUpload } from './components/FileUpload';
import { ChatInterface } from './components/ChatInterface';
import { Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">Analysis 2.0 IA</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Importez vos documents
            </h2>
            <FileUpload />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Posez vos questions
            </h2>
            <ChatInterface />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;