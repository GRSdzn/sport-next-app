'use client'

import React, {useCallback, useState} from 'react';
import {Button} from "@/components/ui/Button/Button";
import Image from "next/image";
import Link from "next/link";
import {CodeCake} from "@/components/layout/CodeCake";
import ContactModal from "@/components/ui/ContactModal/ContactModal";
import CallbackModal from "@/components/ui/CallbackModal";

type ModalType = 'contact' | 'callback' | null;

export const ClientButton = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = useCallback((modalType: ModalType) => {
    setActiveModal(modalType);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);
  return (
    <>
      <div className="footer__button-container">
        {/* BUTTON - СВЯЗАТЬСЯ */}
        <Button
          type="button"
          aria-label="Связаться с нами"
          variant="primary"
          size="lg"
          fullWidth
          icon={<Image src="/images/icons/icon-arrow.svg" alt="Иконка стрелки" width={18} height={18} />}
          iconPosition="right"
          onClick={() => openModal('callback')}
        >
          Связаться
        </Button>
        <div className="adaptive-container">
          <p>
            <Link
              href="/privacy-policy"
              className="footer__privacy-policy-link"
              aria-label="Политика конфиденциальности"
            >
              Политика конфиденциальности
            </Link>
          </p>
          <CodeCake />
        </div>
      </div>
      <ContactModal
        isOpen={activeModal === 'contact'}
        onClose={closeModal}
        onOpenCallback={() => openModal('callback')}
      />
      <CallbackModal isOpen={activeModal === 'callback'} onClose={closeModal} />
    </>
  );
};