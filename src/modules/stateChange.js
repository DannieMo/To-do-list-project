import { storeItems } from './storage';

/* ======== Checks helper ============= */
const currState = (list, state, e) => {
  const currItem = list.map((el) => {
    if (el.index === +e.target.id.replace('id', '')) {
      return { ...el, completed: state };
    }
    return el;
  });
  storeItems(currItem);
  location.reload();
};

/* ======== Handles checks ============= */
const handleState = (list, e) => {
  const checked = e.target.checked;
  if (checked) {
    currState(list, true, e);
  } else {
    currState(list, false, e);
  }
};

/* ======== Renders DOM visuals ============= */
const visual = (parent, state) => {
  state
    ? (parent.style.backgroundColor = 'red')
    : (parent.style.backgroundColor = 'white');
};

export default handleState;
export { visual };
