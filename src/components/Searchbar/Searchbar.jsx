
// import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ handleSubmit }) => {
    return (
        <header className={css.searchbar}>
            <form className={css.searchForm} onSubmit={handleSubmit}>
                <button type="submit" className={css.searchFormButton}>
                    <span className={css.searchFormButtonLabel}></span>
                </button>

                <input
                    className={css.searchFormInput}
                    type="text"
                    name="query"
                    // autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
}

export default Searchbar;