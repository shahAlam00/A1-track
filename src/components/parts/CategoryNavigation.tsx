import React from 'react';
import { NavLink } from 'react-router-dom';
import { PARTS_DROPDOWN } from '../../data/navigation';

export const CategoryNavigation: React.FC = () => {
  return (
    <div className="w-full bg-carbon-900 border-b border-white/10 sticky top-[70px] z-30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-3 scrollbar-none">
          {PARTS_DROPDOWN.map((cat) => (
            <NavLink
              key={cat.slug}
              to={cat.href}
              className={({ isActive }) =>
                `px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-racing-500 text-white border-racing-500 shadow-md shadow-racing-500/20'
                    : 'bg-carbon-950 text-metallic-400 border-white/10 hover:text-white hover:border-white/25'
                }`
              }
            >
              {cat.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
