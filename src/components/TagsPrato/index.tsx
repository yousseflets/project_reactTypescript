import classNames from 'classnames';
import { Prato } from 'types/Prato';
import styles from './TagsPrato.module.scss';

export default function TagsPrato({
  category
}: Prato) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
      })}>{category.label}</div>

    </div>
  );
}