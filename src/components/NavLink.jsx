import React from 'react'
import Link from 'next/link';

const NavLink = ({ href, children }) => {
    return (
      <Link className="px-6 py-4 font-medium border-main hover:border-b-4  duration-75" href={href}>
        {children}
      </Link>
    );
  };

export default NavLink