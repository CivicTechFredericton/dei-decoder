"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function DemoNotification() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Check if notification has been shown before
    const hasSeenNotification = localStorage.getItem("demo-notification-seen");
    
    if (!hasSeenNotification) {
      setShowNotification(true);
    }
  }, []);

  const handleClose = () => {
    setShowNotification(false);
    // Mark as seen in localStorage
    localStorage.setItem("demo-notification-seen", "true");
  };

  if (!showNotification) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md mx-4 p-6 animate-slide-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close notification"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        
        <div className="pr-8">
          <h3 className="text-xl font-bold text-main-color mb-3">
            Demo Application
          </h3>
          <p className="text-sub-color leading-relaxed">
            This is a demo application and there can be unexpected behaviour.
          </p>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-main-color text-white rounded-full hover:bg-opacity-90 transition-colors font-semibold"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}

