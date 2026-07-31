import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-3">
            <Logo className="h-6 w-6" />
            <span className="text-sm text-subtle font-medium">
              Northern AI Systems
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="text-sm text-muted">
              Indigenous-owned and operated
            </span>
            <span className="hidden md:inline text-muted">|</span>
            <span className="text-sm text-muted">
              <a
                href="mailto:systemsnorthernai@gmail.com"
                className="hover:text-accent transition-colors"
              >
                systemsnorthernai@gmail.com
              </a>
              <span className="mx-3">&middot;</span>
              Halifax, Nova Scotia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
