import CarsFormActionsDropdown from "./CarsFormActionsDropdown";

const CarsFormCarItem = ({ slicedData, originalData, setOriginalData }) => {
    return (
        <>
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
                            <CarsFormActionsDropdown
                                originalData={originalData}
                                setOriginalData={setOriginalData}
                                car={car}
                            />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CarsFormCarItem;
