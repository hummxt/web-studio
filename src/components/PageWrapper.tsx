import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function PageWrapper({ children, className = "" }: Props) {
  return (
    <main className={`w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${className}`}>
      {children}
    </main>
  );
}
