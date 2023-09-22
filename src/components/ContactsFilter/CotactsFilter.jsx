import { FilterInput, LabelSearchContact } from './CotactsFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { foundContacts } from 'redux/actions/actions';
import { getFilter } from 'redux/selectors/selectors';

export const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const searchQuery = e.target.value;
    return dispatch(foundContacts(searchQuery));
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
