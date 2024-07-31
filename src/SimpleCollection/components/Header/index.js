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

      style={{
          '--bg-opacity-light': '0.9',
          '--bg-opacity-dark': '0.9',
        }}      
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5',
        )}
      />
      
      <Search />
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
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        
        <div className="flex gap-4">
          {/* <MobileSearch /> */}
          <ThemeToggle />
        </div>

      </div>
    </div>
  );

};

const Search = () => {
  return (
    <div className="hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        className="items-center hidden w-full h-8 gap-2 pl-2 pr-3 text-sm transition bg-white rounded-full text-zinc-500 ring-1 ring-zinc-900/10 hover:ring-zinc-900/20 ui-not-focus-visible:outline-none lg:flex dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20"
      >
        Find something...
        <kbd className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">⌘</kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>

    </div>
  )
}




import { useEffect, useState } from 'react'

function SunIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path
        strokeLinecap="round"
        d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
      />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z" />
    </svg>
  )
}

export function ThemeToggle() {
  let { resolvedTheme, setTheme } = 'light' 
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      className="flex items-center justify-center w-6 h-6 transition rounded-md hover:bg-zinc-900/5 dark:hover:bg-white/5"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="w-5 h-5 stroke-zinc-900 dark:hidden" />
      <MoonIcon className="hidden w-5 h-5 stroke-white dark:block" />
    </button>
  )
}
