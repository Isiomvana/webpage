
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-brand-blue text-white py-16 sm:py-20 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
