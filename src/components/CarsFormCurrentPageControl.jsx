import Pagination from "react-bootstrap/Pagination";

const CarsFormCurrentPageControl = ({
    currentPage,
    goToPreviousPage,
    goToNextPage,
    totalPages,
    setCurrentPage,
}) => {
    const handleFirstPageClick = () => {
        setCurrentPage(1);
    };

    const handleLastPageClick = () => {
        setCurrentPage(totalPages);
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className="cars-form__change-page-btns-and-counter-pages d-flex justify-content-center align-items-center gap-3">
            <div className="cars-form__change-page-btns d-flex justify-content-center align-items-center gap-3">
                <Pagination>
                    <Pagination.First onClick={handleFirstPageClick} />
                    <Pagination.Prev onClick={goToPreviousPage} />

                    <Pagination.Item
                        active={currentPage === 1}
                        onClick={() => handlePageClick(1)}
                    >
                        1
                    </Pagination.Item>

                    {currentPage > 3 && <Pagination.Ellipsis disabled />}

                    {currentPage > 2 && (
                        <Pagination.Item
                            onClick={() => handlePageClick(currentPage - 1)}
                        >
                            {currentPage - 1}
                        </Pagination.Item>
                    )}

                    {currentPage !== 1 && currentPage !== totalPages && (
                        <Pagination.Item active>{currentPage}</Pagination.Item>
                    )}

                    {currentPage < totalPages - 1 && (
                        <Pagination.Item
                            onClick={() => handlePageClick(currentPage + 1)}
                        >
                            {currentPage + 1}
                        </Pagination.Item>
                    )}

                    {currentPage < totalPages - 2 && (
                        <Pagination.Ellipsis disabled />
                    )}

                    <Pagination.Item
                        active={currentPage === totalPages}
                        onClick={() => handlePageClick(totalPages)}
                    >
                        {totalPages}
                    </Pagination.Item>

                    <Pagination.Next onClick={goToNextPage} />
                    <Pagination.Last onClick={handleLastPageClick} />
                </Pagination>
            </div>
            {/* <div className="cars-form__show-current-page">
                <h6>Current Page: {currentPage}</h6>
            </div> */}
        </div>
    );
};

export default CarsFormCurrentPageControl;
