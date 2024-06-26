import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from "/css/components/project/projectItems/OrderedList.module.scss"

OrderedList.propTypes = {
  listItems: PropTypes.array,
};

export default function OrderedList( { listItems } ){

  const list = listItems.map(value => <li className={styles.listItem} key={ uuidv4() }>{value}</li>);

  return (
    <ol>
      {list}
    </ol>
  )
}