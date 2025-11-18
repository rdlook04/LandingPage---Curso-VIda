
import React from 'react';

type IconProps = {
  className?: string;
};

export const DumbbellIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.4 14.4 9.6 9.6" />
    <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
    <path d="m21.5 21.5-1.4-1.4" />
    <path d="M3.9 3.9 2.5 2.5" />
    <path d="M6.808 6.808 4.95 4.95" />
    <path d="M12.7 12.7 11.25 11.25" />
    <path d="M5.343 18.657a2 2 0 1 1 2.829-2.829l1.767 1.768a2 2 0 1 1 2.829-2.829l-6.364-6.364a2 2 0 1 1-2.829 2.829l1.768 1.767a2 2 0 1 1-2.828 2.829z" />
  </svg>
);

export const AppleIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20.94c1.5 0 2.75 1.06 4 0" />
    <path d="M12 20.94c-1.5 0-2.75 1.06-4 0" />
    <path d="M12 20.94V12.5A2.5 2.5 0 0 1 14.5 10h0A2.5 2.5 0 0 1 17 12.5v0A2.5 2.5 0 0 1 14.5 15h-5A2.5 2.5 0 0 1 7 12.5v0A2.5 2.5 0 0 1 9.5 10h0a2.5 2.5 0 0 1 2.5 2.5V20.94z" />
    <path d="M12 10.5V6.5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
  </svg>
);

export const HeartPulseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M3.22 12H9.5l.7-1 2.1 4.4 2.1-4.4.7 1h6.28" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-9.7 1.2-12.8-5.2-12.8-5.2s-2.8 2.2-5.2 3.3c-2.2 1.1-4.8 2.2-7.2 2.2 2.3 2.5 6 3.8 9.8 3.8 8.8 0 13.5-7.2 13.5-13.5 0-.2 0-.4 0-.6.9-1.3 2.3-2.6 3.8-3.8z"/></svg>
);
