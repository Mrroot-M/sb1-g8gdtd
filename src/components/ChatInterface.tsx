import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';

export function ChatInterface() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setMessages(prev => [...prev, { text: message, isUser: true }]);
    setMessage('');
    
    // Simuler une réponse de l'IA
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Je suis en train d'analyser votre demande...", 
        isUser: false 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[500px] border rounded-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-4 py-2 ${
                msg.isUser
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="border-t p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Posez votre question..."
            className="flex-1 rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}