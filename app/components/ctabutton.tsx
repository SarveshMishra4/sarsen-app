import Link from 'next/link';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export default function CTAButton({
  href,
  text,
  variant = 'primary',
  icon,
  className = '',
  onClick,
  external = false,
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25',
    secondary: 'bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg hover:shadow-xl hover:shadow-gray-900/25',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700',
    white: 'bg-white text-gray-900 shadow-lg hover:shadow-xl hover:shadow-white/25 hover:bg-gray-50',
  };

  const iconSpacing = icon ? 'space-x-3' : '';

  const buttonContent = (
    <>
      {icon && <span className="text-xl">{icon}</span>}
      <span>{text}</span>
    </>
  );

  const buttonClasses = `${baseStyles} ${variants[variant]} ${iconSpacing} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses} onClick={onClick}>
      {buttonContent}
    </Link>
  );
}