import { Button } from '@/components/ui/Button/Button';
import './detail.scss';
import Image from 'next/image';

export const DetailSection: React.FC = () => {
    return (
      <section className="detail-section">
        <div className="detail-section__images detail-section__part">
          <div className='detail-section__item'>
            <img src="images/detail-img/img1.png" alt="img1" className='detail_img'/>
          </div>
          <div className='detail-section__item'>
            <img src="images/detail-img/img2.png" alt="img2" className='detail__img'/>
          </div>
          <div className='detail-section__item'>
            <img src="images/detail-img/img3.png" alt="img3" className='detail_img'/>
          </div>
          <div className='detail-section__item'>
            <img src="images/detail-img/img4.png" alt="img4" className='detail_img'/>
          </div>
        </div>
        <div className='detail-section__text detail-section__part'>
        <h2 className="detail-section__title">КУН КХМЕР</h2>
        <p className="detail-section__description">
        Kun Khmer ( គុន ខ្មែរ ) или Прадал Серей ( ប្រដាល់សេរី )
         - это боевое искусство и спортивное единоборство
          из Камбоджи. «Прадал» означает борьбу 
          или бокс и «Серей» означает свободный 
          или «вольная борьба». Спортивный вариант 
          единоборства состоит из ударов в стойке
           кулаками в боксерских перчатках, локтями,
            ногами, и захватов. Задача бойца Kun Khmer
             состоит в том, чтобы повергнуть противника
              - технический нокаут, нокаут или выиграть по очкам. Очень похож на современный Муай Тай.
        </p>
          <Button
            type="button"
            className="detail-section__button"
            aria-label="подробнее"
            variant="primary"
            size="lg"
            icon={<Image src="/images/icons/icon-arrow.svg" alt="Иконка стрелки" width={18} height={18} />}
            iconPosition="right"
          >
            ПОДРОБНЕЕ
          </Button>
        </div>
      </section>
    );
  };
