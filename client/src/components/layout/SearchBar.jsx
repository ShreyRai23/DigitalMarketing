const SearchBar = () => {
    const closeSearch = () => {
        document.querySelector('.search-bar').classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="search-bar">
            <i className="fa fa-close" onClick={closeSearch}></i>
            <form className="search-bar-fixed" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="search..." />
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
