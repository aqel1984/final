import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface AppleBusinessChatProps {
  businessId: string;
  buttonId: string;
}

const AppleBusinessChat: React.FC<AppleBusinessChatProps> = ({ businessId, buttonId }) => {
  const initiateChat = () => {
    const url = `https://bcrw.apple.com/business/api/chat/0/${businessId}/${buttonId}`;
    window.open(url, '_blank');
  };

  return (
    <Card>
      <CardContent>
        <div className="apple-business-chat">
          <h2 className="text-lg font-semibold mb-2">Contact Us via Apple Business Chat</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={initiateChat}
          >
            Start Chat
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppleBusinessChat;