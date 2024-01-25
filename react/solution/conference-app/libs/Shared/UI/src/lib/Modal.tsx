import React from 'react';
import styles from './Modal.module.scss';

export interface ModalProps {
    isOpen: boolean;
    children?: React.ReactNode;
}

export function Modal(props: ModalProps) {
  return props.isOpen ? (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {props.children}
      </div>
    </div>
  ) : null;
};
