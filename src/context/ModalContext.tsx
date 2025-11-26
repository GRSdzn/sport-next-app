'use client';

import { createContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import type { EventDescription } from '@/types/event-list/event-list.type';

export type SystemModalType = 'contact' | 'callback' | null;

export interface EventDetailData {
  title?: string;
  description?: EventDescription;
  date?: string;
  slides?: string[];
}

interface ModalContextType {
  // Системные модалки (contact, callback)
  activeSystemModal: SystemModalType;
  openSystemModal: (modalType: Exclude<SystemModalType, null>) => void;
  closeSystemModal: () => void;

  // EventDetailModal
  isEventDetailOpen: boolean;
  eventDetailData: EventDetailData | null;
  openEventDetail: (data: EventDetailData) => void;
  closeEventDetail: () => void;

  closeAllModals: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [activeSystemModal, setActiveSystemModal] = useState<SystemModalType>(null);

  // независимая модалка
  const [isEventDetailOpen, setIsEventDetailOpen] = useState(false);
  const [eventDetailData, setEventDetailData] = useState<EventDetailData | null>(null);

  const pathname = usePathname();

  const openSystemModal = useCallback((modalType: Exclude<SystemModalType, null>) => {
    setActiveSystemModal(modalType);
  }, []);

  const closeSystemModal = useCallback(() => {
    setActiveSystemModal(null);
  }, []);

  const openEventDetail = useCallback((data: EventDetailData) => {
    setEventDetailData(data);
    setIsEventDetailOpen(true);
  }, []);

  const closeEventDetail = useCallback(() => {
    setIsEventDetailOpen(false);
    setEventDetailData(null);
  }, []);

  const closeAllModals = useCallback(() => {
    setActiveSystemModal(null);
    setIsEventDetailOpen(false);
    setEventDetailData(null);
  }, []);

  useEffect(() => {
    closeAllModals();
  }, [pathname, closeAllModals]);

  const value: ModalContextType = {
    activeSystemModal,
    openSystemModal,
    closeSystemModal,
    isEventDetailOpen,
    eventDetailData,
    openEventDetail,
    closeEventDetail,
    closeAllModals,
  };

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
