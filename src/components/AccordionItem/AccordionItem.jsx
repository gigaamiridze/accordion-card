import React from 'react';
import styles from './_AccordionItem.module.scss';
import arrowIcon from '../../assets/images/arrow-icon.svg';

function AccordionItem(props) {
  const { toggleAccordion, activeAccordionNumber, boldFont, iconRotate, itemNumber, question, answer } = props;
  // Bold font and icon rotate conditional renderings
  const boldWeight = (activeAccordionNumber === itemNumber && boldFont) ? styles.boldWeight : null;
  const rotate = (activeAccordionNumber === itemNumber && iconRotate) ? styles.iconRotate : null;

  return (
    <>
      <div className={styles.accordionItem}>
        <div className={styles.questionBox} onClick={() => toggleAccordion(itemNumber)}>
          <p className={`${styles.question} ${boldWeight}`}>{question}</p>
          <button type='button'>
            <img className={rotate} src={arrowIcon} alt="Arrow Icon" />
          </button>
        </div>
        {activeAccordionNumber === itemNumber ? <p className={styles.answer}>{answer}</p> : null}
      </div>
    </>
  );
}

export default AccordionItem;
