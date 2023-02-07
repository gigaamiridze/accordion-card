import React, { useState } from 'react';
import styles from './_AccordionCard.module.scss';
import { ITEMS_DATA } from '../../data/data';
// Importing components
import Title from '../Title/Title';
import AccordionItem from '../AccordionItem/AccordionItem';

function AccordionCard() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);
  const [boldFont, setBoldFont] = useState(false);
  const [iconRotate, setIconRotate] = useState(false);

  const toggleAccordion = (accordionNumber) => {
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null);
      setBoldFont(false);
      setIconRotate(false);
    } else {
      setActiveAccordionNumber(accordionNumber);
      setBoldFont(true);
      setIconRotate(true);
    }
  }

  return (
    <div className={styles.cardContainer}>
      <div className={styles.questions}>
        <Title title="faq" />
        {ITEMS_DATA.map((item) => (
          <AccordionItem key={item.itemNumber}
            toggleAccordion={toggleAccordion}
            activeAccordionNumber={activeAccordionNumber}
            boldFont={boldFont}
            iconRotate={iconRotate}
            itemNumber={item.itemNumber}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default AccordionCard;
