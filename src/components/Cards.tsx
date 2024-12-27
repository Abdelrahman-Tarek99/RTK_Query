// components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  body: string;
}

export const Card: React.FC<CardProps> = ({ title, body }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden m-4 max-w-sm hover:scale-105 transition-transform">
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-700 text-base mt-2">{body}</p>
      </div>
    </div>
  );
};
