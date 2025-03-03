import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import clsx from 'clsx'
import { setFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch =useDispatch();

    return (
        <div className={clsx(s.searchBoxWrapper)}>
            <label className={clsx(s.lable)}>
                Search contact               
            <input  onChange={(e) => dispatch(setFilter(e.target.value))} type="text" className={clsx(s.input)} placeholder="search by name"></input></label>
        </div>
    )

}

export default SearchBox;