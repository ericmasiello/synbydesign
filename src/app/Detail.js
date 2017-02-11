/* @flow */
import React from 'react';
import styles from './detail.css';
import type { DetailComponentProps } from '../../types';

export default function Detail({ params }: DetailComponentProps) {
  return (
    <div className={styles.detail}>
      This is the detail view! {params.id}
    </div>
  );
}
