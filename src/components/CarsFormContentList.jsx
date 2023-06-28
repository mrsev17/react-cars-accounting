import { useState } from "react";

const CarsFormContentList = ({ originalData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(originalData.cars.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const slicedData = originalData.cars.slice(startIndex, endIndex);

    const goToNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="cars-form__content-list d-flex flex-column">
            {slicedData.map((car) => {
                return (
                    <div
                        key={car.id}
                        className="cars-form__content-card-wrapper d-flex justify-content-between"
                    >
                        <div className="cars-form__car-list-company">
                            <h6>{car.car}</h6>
                        </div>
                        <div className="cars-form__car-list-model">
                            <h6>{car.car_model}</h6>
                        </div>
                        <div className="cars-form__car-list-vin">
                            <h6>{car.car_vin}</h6>
                        </div>
                        <div className="cars-form__car-list-color">
                            <h6>{car.car_color}</h6>
                        </div>
                        <div className="cars-form__car-list-year">
                            <h6>{car.car_model_year}</h6>
                        </div>
                        <div className="cars-form__car-list-price">
                            <h6>{car.price}</h6>
                        </div>
                        <div className="cars-form__car-list-availability">
                            <h6>
                                {car.availability ? `Available` : `Unavailable`}
                            </h6>
                        </div>
                        <div className="cars-form__car-list-actions-columns">
                            <h6>Actions</h6>
                        </div>
                    </div>
                );
            })}
            <div className="cars-form__change-page-btns d-flex justify-content-center align-items-center gap-3">
                <button
                    className={currentPage === 1 ? `disabled-btn` : ""}
                    disabled={currentPage === 1}
                    onClick={goToPreviousPage}
                >
                    Previous Page
                </button>
                <div className="cars-form__show-current-page">
                    <h6>
                        Current Page: <span>{currentPage}</span>
                    </h6>
                </div>
                <button
                    className={currentPage === totalPages ? `disabled-btn` : ""}
                    disabled={currentPage === totalPages}
                    onClick={goToNextPage}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default CarsFormContentList;

// import { useState } from "react";

// const CarsFormContentList = ({ originalData }) => {
//     const [currentList, setCurrentList] = useState(1);
//     const itemsPerList = 20;
//     const startIndex = (currentList - 1) * itemsPerList;
//     const endIndex = startIndex + itemsPerList;
//     const slicedData = originalData.cars.slice(startIndex, endIndex);
//     const handlePageChange = (listNumber) => {
//         setCurrentList(listNumber);
//     };
//     return (
//         <div className="cars-form__content-list d-flex flex-column">
//             {slicedData.map((car) => {
//                 return (
//                     <div>
//                         <div
//                             key={car.id}
//                             className="cars-form__content-card-wrapper d-flex justify-content-between"
//                         >
//                             <div className="cars-form__car-list-company">
//                                 <h6>{car.car}</h6>
//                             </div>
//                             <div className="cars-form__car-list-model">
//                                 <h6>{car.car_model}</h6>
//                             </div>
//                             <div className="cars-form__car-list-vin">
//                                 <h6>{car.car_vin}</h6>
//                             </div>
//                             <div className="cars-form__car-list-color">
//                                 <h6>{car.car_color}</h6>
//                             </div>
//                             <div className="cars-form__car-list-year">
//                                 <h6>{car.car_model_year}</h6>
//                             </div>
//                             <div className="cars-form__car-list-price">
//                                 <h6>{car.price}</h6>
//                             </div>
//                             <div className="cars-form__car-list-availability">
//                                 <h6>
//                                     {car.availability
//                                         ? `Available`
//                                         : `Unavailable`}
//                                 </h6>
//                             </div>
//                             <div className="cars-form__car-list-actions-columns">
//                                 <h6>Actions</h6>
//                             </div>
//                         </div>
//                     </div>
//                 );
//             })}

//             <div className="pagination-buttons">
//                 {Array(Math.ceil(originalData.cars.length / itemsPerList))
//                     .fill(0)
//                     .map((_, index) => {
//                         const pageNumber = index + 1;
//                         return (
//                             <button
//                                 key={pageNumber}
//                                 className={
//                                     currentList === pageNumber ? "active" : ""
//                                 }
//                                 onClick={() => handlePageChange(pageNumber)}
//                             >
//                                 {pageNumber}
//                             </button>
//                         );
//                     })}
//             </div>
//         </div>
//     );
// };

// export default CarsFormContentList;
