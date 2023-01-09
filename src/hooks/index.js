import { useDisclosure } from '@chakra-ui/react';

export const useVersionHistory = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return {
    isVersionHistoryOpen: isOpen,
    onVersionHistoryOpen: onOpen,
    onVersionHistoryClose: onClose,
  };
};
