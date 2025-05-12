import { setNameFilter, setPhoneFilter } from '../../redux/filters/slice';
import { selectNameFilter, selectPhoneFilter } from '../../redux/filters/selectors';
import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';


const SearchBox = () => {
   const dispatch = useDispatch();
   const nameFilteredValue = useSelector(selectNameFilter);
   const phoneFilteredValue = useSelector(selectPhoneFilter);
  
const handeleCheange = (event) => {
    dispatch(setNameFilter(event.target.value));
};
const handelePhoneChange = (event) => {
    dispatch(setPhoneFilter(event.target.value));
};
    return (
        <div className={css.searchbox}>
            <p className={css.text}>Find contact by name</p>
        <input className={css.search}
        type="text"
        placeholder="Serch contacts..."
        onChange={handeleCheange}
        value ={nameFilteredValue}/>
         <p className={css.text}>Find contact by phone</p>
        <input className={css.search}
        type="phone"
        placeholder="Serch contacts..."
        onChange={handelePhoneChange}
        value ={phoneFilteredValue}/>
        </div>
    )
    };
    export default SearchBox;