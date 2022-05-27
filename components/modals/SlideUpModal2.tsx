import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import React from 'react';
import Add from '../primitives/buttons/Add';

export default function SlideUpModal2({ onClose, children, add, heading }) {
  // if (!open) return null;

  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0">
      <div className="flex h-full flex-col justify-center px-1 text-center standalone:pt-12">
        <Dialog.Overlay
          as={motion.div}
          variants={{
            open: {
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: [0.36, 0.66, 0.04, 1],
              },
            },
            closed: {
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: [0.36, 0.66, 0.04, 1],
              },
            },
          }}
          initial="closed"
          animate="open"
          exit="closed"
          onAnimationStart={(variant) => {
            if (variant === 'open') {
              set(document.documentElement, {
                background: 'black',
                height: '100vh',
              });
              set(document.body, { position: 'fixed', inset: '0' });
              set(document.getElementById('SlideUpModal1'), {
                borderRadius: '8px',
                overflow: 'hidden',
                transform:
                  'scale(0.97) translateY(calc(env(safe-area-inset-top) + -13px)',
                tranformOrigin: 'top',
                transitionProperty: 'transform',
                transitionDuration: '0.3s',
                transitionTimingFunction: 'cubic-bezier(0.36, 0.66, 0.04, 1)',
              });
            } else {
              reset(document.getElementById('SlideUpModal1'), 'transform');
              reset(document.body);
            }
          }}
          onAnimationComplete={(variant) => {
            if (variant === 'closed') {
              reset(document.documentElement);
              reset(document.getElementById('SlideUpModal1'));
              reset(document.body);
            }
          }}
          className="fixed inset-0 bg-black/40"
          onClick={onClose}
        ></Dialog.Overlay>
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
          }}
          exit={{
            y: '100%',
            opacity: 0,
            transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
          }}
          className="z-0 mt-6 flex h-full w-full flex-col rounded-t-lg bg-zinc-100 shadow-xl"
        >
          <div className="flex">
            {add ? <Add /> : <div className="px-[26px]"></div>}
            <div className="flex w-full items-center justify-center text-xl font-medium">
              {heading ? heading : null}
            </div>
            <div
              className="flex justify-end p-3 hover:cursor-pointer"
              onClick={onClose}
            >
              <svg
                className="block h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
                <title>Close Menu</title>
              </svg>
            </div>
          </div>
          <div className="overflow-y-auto">{children}</div>
        </motion.div>
      </div>
    </Dialog>
  );
}

let cache2 = new Map();

function set(el, styles) {
  let originalStyles = {};

  Object.entries(styles).forEach(([key, value]) => {
    originalStyles[key] = el.style[key];
    el.style[key] = value;
  });

  cache2.set(el, originalStyles);
}

function reset(el, prop?) {
  let originalStyles = cache2.get(el);

  if (prop) {
    el.style[prop] = originalStyles[prop];
  } else {
    Object.entries(originalStyles).forEach(([key, value]) => {
      originalStyles[key] = el.style[key];
      el.style[key] = value;
    });
  }
}
