import React from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

export default function SlideUpModal({ onClose, children }) {
  if (!open) return null;

  return (
    <Dialog open={true} onClose={onClose} className="fixed inset-0">
      <div className="flex h-full flex-col justify-center px-1 pt-4 text-center">
        <Dialog.Overlay
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
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
          className="z-0 flex h-full w-full flex-col rounded-t-lg bg-zinc-200 shadow-xl"
        >
          <div className="flex w-full justify-end p-2" onClick={onClose}>
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
          {children}
        </motion.div>
      </div>
    </Dialog>
  );
}
