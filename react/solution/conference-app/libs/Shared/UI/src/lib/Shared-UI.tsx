import styles from './Shared-UI.module.scss';

/* eslint-disable-next-line */
export interface SharedUIProps {}

export function SharedUI(props: SharedUIProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedUI!</h1>
    </div>
  );
}

export default SharedUI;
