import { TOP_OFFICIALS } from '@/components/constants/TOP_OFFICIALS';
import './top-officials.section.scss';
import Image from 'next/image';

export const TopOfficialsSection: React.FC = () => {
  return (
    <section id="top-officials" className="top-officials-section" aria-labelledby="top-officials-title">
      <div className="top-officials-section__container">
        <div className="top-officials-section__title-wrapper">
          <h2 id="top-officials-title" className="top-officials-section__title">
            Первые лица федерации
          </h2>
          <p className="top-officials-section__description">
            Президент, вице-президенты и секретариат, входящие в руководство федерации, занимаются стратегическим
            управлением и принимают ключевые решения по развитию Кхмерского бокса.
          </p>
        </div>
        <div className="top-officials-section__officials-container">
          {TOP_OFFICIALS.map((official) => (
            <div key={official.id} className="top-officials-section__official-content">
              <Image
                src={official.image}
                alt={official.name}
                width={590}
                height={420}
                loading="lazy"
                className="top-officials-section__official-image"
              />
              <h3 className="top-officials-section__official-title">{official.name}</h3>
              <ul className="top-officials-section__official-list">
                {official.positions.map((position, index) => (
                  <li key={index} className="top-officials-section__official-list-item">
                    {position}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
