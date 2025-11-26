'use client';

import { Button } from '@/components/ui/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { CodeCake } from '@/components/layout/CodeCake';
import { useModal } from '@/hooks/useModal';

export const ClientButton = () => {
  const { openSystemModal } = useModal();

  return (
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
        onClick={() => openSystemModal('callback')}
      >
        Связаться
      </Button>
      <div className="adaptive-container">
        <p>
          <Link href="/privacy-policy" className="footer__privacy-policy-link" aria-label="Политика конфиденциальности">
            Политика конфиденциальности
          </Link>
        </p>
        <CodeCake />
      </div>
    </div>
  );
};
