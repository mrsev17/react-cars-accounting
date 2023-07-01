const CarsFormCurrentPageControl = ({
    currentPage,
    goToPreviousPage,
    goToNextPage,
    totalPages,
}) => {
    return (
        <div className="cars-form__change-page-btns-and-counter-pages d-flex justify-content-between align-items-center gap-3">
            <div className="cars-form__change-page-btns d-flex justify-content-center align-items-center gap-3">
                <button
                    className={currentPage === 1 ? `disabled-btn` : ""}
                    disabled={currentPage === 1}
                    onClick={goToPreviousPage}
                >
                    Previous Page
                </button>
                <button
                    className={currentPage === totalPages ? `disabled-btn` : ""}
                    disabled={currentPage === totalPages}
                    onClick={goToNextPage}
                >
                    Next Page
                </button>
            </div>
            <div className="cars-form__show-current-page">
                <h6>Current Page: {currentPage}</h6>
            </div>
        </div>
    );
};

export default CarsFormCurrentPageControl;
