import React from 'react';
import Styles from './SubTilte.module.css';

const SubTilte = ({SubTilte}) => {
  return (
    <section className={Styles.subTilte}>
        <h2 className={Styles.h2}>{SubTilte}</h2>
    </section>
  )
}

export default SubTilte