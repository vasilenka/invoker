import styles from './Navbar.module.scss';
import React from 'react';
import cx from 'classnames';

import NavbarBrand from '../NavbarBrand/NavbarBrand';
import NavbarSecondary from '../NavbarSecondary/NavbarSecondary';
import NavbarPrimary from '../NavbarPrimary/NavbarPrimary';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import NavbarAvatar from '../NavbarAvatar/NavbarAvatar';

const Navbar = ({ children, className, ...restProps }) => {
  return (
    <div
      className={cx({
        [styles.root]: true,
        [className]: className
      })}
      {...restProps}
    >
      <NavbarPrimary>
        <NavbarBrand />
        <NavbarMenu to="/button">Button</NavbarMenu>
        <NavbarMenu to="/sandbox">Sandbox</NavbarMenu>
        <NavbarMenu to="/checkbox">Checkbox</NavbarMenu>
        <NavbarMenu to="/dropdown">Dropdown</NavbarMenu>
      </NavbarPrimary>
      <NavbarSecondary>
        <NavbarAvatar
          src={
            'https://cdn-images-1.medium.com/max/2600/1*oBDMtanZ-TZl12cuR6CfFg.png'
          }
        />
      </NavbarSecondary>
    </div>
  );
};

export default Navbar;
