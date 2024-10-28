import React from 'react';

interface LiveChatWidgetProps {
  license: string;
  group?: string;
  appleBusinessChat?: {
    businessId: string;
    buttonId: string;
  };
}

declare global {
  interface Window {
    LiveChatWidget: any;
  }
}

const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({ license, group, appleBusinessChat }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.livechatinc.com/tracking.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.LiveChatWidget.init();
      window.LiveChatWidget.call('set_custom_variables', [
        { name: 'License', value: license },
        { name: 'Group', value: group || 'Default' }
      ]);

      if (appleBusinessChat) {
        window.LiveChatWidget.call('set_apple_business_chat', {
          businessId: appleBusinessChat.businessId,
          buttonId: appleBusinessChat.buttonId
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [license, group, appleBusinessChat]);

  return null;
};

export default LiveChatWidget;