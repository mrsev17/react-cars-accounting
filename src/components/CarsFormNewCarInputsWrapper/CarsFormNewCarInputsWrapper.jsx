import "./carsFormNewCarInputsWrapper.css";

const CarsFormNewCarInputsWrapper = ({
    inputNewCarCompany,
    controlledInputNewCarCompany,
    inputNewCarModel,
    controlledInputNewCarModel,
    inputNewCarVIN,
    controlledInputNewCarVIN,
    inputNewCarYear,
    controlledInputNewCarYear,
    inputNewCarColor,
    controlledInputNewCarColor,
    inputNewCarPrice,
    controlledInputNewCarPrice,
    inputNewCarAvailability,
    controlledInputNewCarAvailability,
}) => {
    return (
        <div className="cars-form__new-car-inputs-wrapper d-flex justify-content-around">
            <div className="cars-form__new-car-left-side-inputs d-flex align-items-center flex-column gap-2">
                <div className="cars-form__new-car-input">
                    <input
                        type="text"
                        value={inputNewCarCompany}
                        onChange={controlledInputNewCarCompany}
                        placeholder="Company"
                    />
                </div>
                <div className="cars-form__new-car-input">
                    <input
                        type="text"
                        value={inputNewCarModel}
                        onChange={controlledInputNewCarModel}
                        placeholder="Model"
                    />
                </div>
                <div className="cars-form__new-car-input">
                    <input
                        type="text"
                        value={inputNewCarVIN}
                        onChange={controlledInputNewCarVIN}
                        placeholder="VIN"
                    />
                </div>
                <div className="cars-form__new-car-input">
                    <input
                        type="text"
                        value={inputNewCarYear}
                        onChange={controlledInputNewCarYear}
                        placeholder="Year"
                    />
                </div>
            </div>
            <div className="cars-form__new-car-right-side-inputs d-flex align-items-center flex-column gap-2">
                <div className="cars-form__new-car-input">
                    <input
                        type="text"
                        value={inputNewCarColor}
                        onChange={controlledInputNewCarColor}
                        placeholder="Color"
                    />
                </div>
                <div className="cars-form__new-car-input">
                    <input
                        type="text"
                        value={inputNewCarPrice}
                        onChange={controlledInputNewCarPrice}
                        placeholder="Price"
                    />
                </div>
                <div className="cars-form__new-car-input">
                    <select
                        value={inputNewCarAvailability}
                        onChange={controlledInputNewCarAvailability}
                    >
                        <option value={1}>Unavailable</option>

                        <option value={0}>Available</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CarsFormNewCarInputsWrapper;
