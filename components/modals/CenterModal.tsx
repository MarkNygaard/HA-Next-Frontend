import React from 'react';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';

export default function CenterModal({ onClose, children }) {
  if (!open) return null;

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className="fixed inset-0 overflow-y-auto p-4 pl-[9vh] pt-[3vh] sm:pl-[3vh] sm:pt-[10vh]"
    >
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
        className="fixed inset-0 bg-gray-500/75"
        onClick={onClose}
      ></Dialog.Overlay>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
        }}
        className="relative mx-auto flex min-h-[50%] max-w-4xl justify-center rounded-xl bg-zinc-200 ring-1 ring-black/5 dark:bg-darkmode-bg"
      >
        <div className="overflow-y-auto">{children}</div>
      </motion.div>
    </Dialog>
  );
}
