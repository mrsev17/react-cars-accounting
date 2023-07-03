import CarsFormActionsDropdown from "../CarsFormActionsDropdown";
import "./carsFormCarItem.css";

const CarsFormCarItem = ({
    slicedData,
    originalData,
    setOriginalData,
    updateDataLS,
    setCurrentPage,
    totalPages,
}) => {
    return (
        <>
            {slicedData.map((car) => {
                return (
                    <div
                        key={car.id}
                        className="cars-form__content-card-wrapper d-flex justify-content-between"
                    >
                        <div className="cars-form__car-list-company d-flex align-items-center justify-content-center">
                            <h6>{car.car}</h6>
                        </div>
                        <div className="cars-form__car-list-model d-flex align-items-center justify-content-center">
                            <h6>{car.car_model}</h6>
                        </div>
                        <div className="cars-form__car-list-vin d-flex align-items-center justify-content-center">
                            <h6>{car.car_vin}</h6>
                        </div>
                        <div className="cars-form__car-list-color d-flex align-items-center justify-content-center">
                            <h6>{car.car_color}</h6>
                        </div>
                        <div className="cars-form__car-list-year d-flex align-items-center justify-content-center">
                            <h6>{car.car_model_year}</h6>
                        </div>
                        <div className="cars-form__car-list-price d-flex align-items-center justify-content-center">
                            <h6>{car.price}</h6>
                        </div>
                        <div className="cars-form__car-list-availability d-flex align-items-center justify-content-center">
                            <h6 className="cars-form__availability-car-check">
                                {car.availability ? `Available` : `Unavailable`}
                            </h6>
                        </div>
                        <div className="cars-form__car-list-actions-columns">
                            <CarsFormActionsDropdown
                                originalData={originalData}
                                setOriginalData={setOriginalData}
                                car={car}
                                updateDataLS={updateDataLS}
                                slicedData={slicedData}
                                setCurrentPage={setCurrentPage}
                                totalPages={totalPages}
                            />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CarsFormCarItem;
