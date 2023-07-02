const CarsFormEditCarInputsWrapper = ({
    inputNewCarCompanyEdit,
    controlledInputNewCarCompanyEdit,
    inputNewCarModelEdit,
    controlledInputNewCarModelEdit,
    inputNewCarVINEdit,
    controlledInputNewCarVINEdit,
    inputNewCarYearEdit,
    controlledInputNewCarYearEdit,
    inputNewCarColorEdit,
    controlledInputNewCarColorEdit,
    inputNewCarPriceEdit,
    controlledInputNewCarPriceEdit,
    inputNewCarAvailabilityEdit,
    controlledInputNewCarAvailabilityEdit,
}) => {
    return (
        <div className="cars-form__new-car-inputs-wrapper d-flex justify-content-around">
            <div className="cars-form__new-car-left-side-inputs d-flex align-items-center flex-column gap-2">
                <div className="cars-form__new-car-input">
                    <input
                        className="disabled-input"
                        type="text"
                        value={inputNewCarCompanyEdit}
                        onChange={controlledInputNewCarCompanyEdit}
                        placeholder="Company"
                        disabled={true}
                    />
                </div>
                <div className="cars-form__new-car-input">
                    <input
                        className="disabled-input"
                        type="text"
                        value={inputNewCarModelEdit}
                        onChange={controlledInputNewCarModelEdit}
                        placeholder="Model"
                        disabled={true}
                    />
                </div>
                <div className="cars-form__new-car-input">
                    <input
                        className="disabled-input"
                        type="text"
                        value={inputNewCarVINEdit}
                        onChange={controlledInputNewCarVINEdit}
                        placeholder="VIN"
                        disabled={true}
                    />
                </div>
                <div className="cars-form__new-car-input">
                    <input
                        className="disabled-input"
                        type="text"
                        value={inputNewCarYearEdit}
                        onChange={controlledInputNewCarYearEdit}
                        placeholder="Year"
                        disabled={true}
                    />
                </div>
            </div>
            <div className="cars-form__new-car-right-side-inputs d-flex align-items-center flex-column gap-2">
                <div className="cars-form__new-car-input">
                    <input
                        type="text"
                        value={inputNewCarColorEdit}
                        onChange={controlledInputNewCarColorEdit}
                        placeholder="Color"
                    />
                </div>
                <div className="cars-form__new-car-input">
                    <input
                        type="text"
                        value={inputNewCarPriceEdit}
                        onChange={controlledInputNewCarPriceEdit}
                        placeholder="Price"
                    />
                </div>
                <div className="cars-form__new-car-input">
                    <select
                        value={inputNewCarAvailabilityEdit.toString()}
                        onChange={controlledInputNewCarAvailabilityEdit}
                    >
                        <option value="false">Unavailable</option>

                        <option value="true">Available</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CarsFormEditCarInputsWrapper;
