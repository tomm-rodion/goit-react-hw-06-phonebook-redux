import { FilterInput, LabelSearchContact } from './CotactsFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { foundContacts } from 'redux/store';

export const ContactsFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = e => {
    return dispatch(foundContacts({ name: e.target.value }));
  };
  return (
    <>
      <LabelSearchContact htmlFor="filter">
        Search contact by name
      </LabelSearchContact>
      <FilterInput
        type="text"
        placeholder="Name"
        autoComplete="off"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};
