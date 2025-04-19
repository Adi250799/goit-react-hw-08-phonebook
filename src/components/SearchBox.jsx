import { useId } from "react"
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../redux/filtersSlice';

const SearchBox = () => {
    const filter = useSelector((state) => state.filters.name);
    const dispatch = useDispatch();
    const id = useId();

    return (
        <div className={css.SearchContainer}>
            <label htmlFor={id}>Find contacts by name</label>
            <input type="text"
                   name="search"
                   id={id}
                   value={filter}
                   onChange={(e) => dispatch(filterContacts(e.target.value))}  
            />
        </div>
    );
} 

export default SearchBox;