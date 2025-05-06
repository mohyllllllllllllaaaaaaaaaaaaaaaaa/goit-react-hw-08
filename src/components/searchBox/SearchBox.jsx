import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';


const SearchBox = () => {
   const dispatch = useDispatch();
   const  value = useSelector(selectNameFilter);
const handeleCheange = (event) => {
    dispatch(changeFilter(event.target.value));
};
    return (
        <div className={css.searchbox}>
            <p className={css.text}>Find contact by name</p>
        <input className={css.search}
        type="text"
        placeholder="Serch contacts..."
        onChange={handeleCheange}
        value ={value}/>
        </div>
    )
    };
    export default SearchBox;