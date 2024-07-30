import React from 'react'
import NavItem from '@/modules/Nav/NavItem';

const NavSection = ({ items, location }) => {
  return (
    <div className="border-t border-gray-100">
    <div className="px-2">
        <ul className="space-y-1 border-t border-gray-100 pt-4">
            {items.map((item) => {
                return <NavItem item={item} location={location} />;
            })}
        </ul>
    </div>
</div>
  )
}

export default NavSection