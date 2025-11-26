'use client';

import { useModal } from '@/hooks/useModal';
import ContactModal from '@/components/ui/ContactModal/ContactModal';
import CallbackModal from '@/components/ui/CallbackModal/CallbackModal';
import { EventDetailModal } from '@/components/ui/EventDetailModal/EventDetailModal';


export const GlobalModals: React.FC = () => {
  const {
    activeSystemModal,
    openSystemModal,
    closeSystemModal,
    isEventDetailOpen,
    eventDetailData,
    closeEventDetail,
  } = useModal();

  return (
    <>
      <ContactModal
        isOpen={activeSystemModal === 'contact'}
        onClose={closeSystemModal}
        onOpenCallback={() => openSystemModal('callback')}
      />

      <CallbackModal isOpen={activeSystemModal === 'callback'} onClose={closeSystemModal} />

      {/* EventDetailModal - независимая модалка */}
      <EventDetailModal
        isOpen={isEventDetailOpen}
        onClose={closeEventDetail}
        title={eventDetailData?.title}
        description={eventDetailData?.description}
        date={eventDetailData?.date}
        slides={eventDetailData?.slides}
      />
    </>
  );
};
