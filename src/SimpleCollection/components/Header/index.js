import React from "react";
import clsx from "clsx";


export default (props) => {

  let className = "";
  let isInsideMobileNavigation = false;
  let mobileNavIsOpen = false;
  

  return (
    <div

      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
        !isInsideMobileNavigation &&
          'backdrop-blur-sm lg:left-72 xl:left-80 dark:backdrop-blur',
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]',
      )}

    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5',
        )}
      />
      
      {/* <Search /> */}
      {/* <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div> */}

      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <a href="/">API</a>
            <a href="#">Documentation</a>
            <a href="#">Support</a>
          </ul>
        </nav>
        {/* <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
          <ThemeToggle />
        </div> */}

      </div>
    </div>
  );

};