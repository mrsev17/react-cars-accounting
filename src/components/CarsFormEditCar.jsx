import { useState, lazy, Suspense } from "react";
import { toast, Flip } from "react-toastify";
import { Spinner, Button, Modal } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
const CarsFormEditCarInputsWrapper = lazy(() =>
    import("./CarsFormEditCarInputsWrapper")
);

const CarsFormEditCar = ({ originalData, car, updateDataLS }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [inputNewCarCompanyEdit, setInputNewCarCompanyEdit] = useState(
        car.car
    );
    const [inputNewCarModelEdit, setInputNewCarModelEdit] = useState(
        car.car_model
    );
    const [inputNewCarVINEdit, setInputNewCarVINEdit] = useState(car.car_vin);
    const [inputNewCarYearEdit, setInputNewCarYearEdit] = useState(
        car.car_model_year
    );
    const [inputNewCarColorEdit, setInputNewCarColorEdit] = useState(
        car.car_color
    );
    const [inputNewCarPriceEdit, setInputNewCarPriceEdit] = useState(car.price);

    const [inputNewCarAvailabilityEdit, setInputNewCarAvailabilityEdit] =
        useState(Boolean(car.availability));

    const handleCloseEdit = () => {
        setShowEdit(false);
    };

    const handleShowEdit = () => {
        setShowEdit(true);
    };

    const controlledInputNewCarCompanyEdit = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9\s]|^\s/g, "");
        const truncatedValue = filteredValue.slice(0, 20);
        setInputNewCarCompanyEdit(truncatedValue);
    };

    const controlledInputNewCarModelEdit = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9\s]|^\s/g, "");
        const truncatedValue = filteredValue.slice(0, 15);
        setInputNewCarModelEdit(truncatedValue);
    };

    const controlledInputNewCarVINEdit = (event) => {
        const value = event.target.value;
        const formattedValue = value
            .replace(/[^A-Za-z0-9]/g, "")
            .toUpperCase()
            .slice(0, 20);
        setInputNewCarVINEdit(formattedValue);
    };

    const controlledInputNewCarYearEdit = (event) => {
        const value = event.target.value;
        const formattedValue = value.replace(/\D/g, "").slice(0, 4);
        setInputNewCarYearEdit(formattedValue);
    };

    const controlledInputNewCarColorEdit = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
        const truncatedValue = filteredValue.slice(0, 15);
        setInputNewCarColorEdit(truncatedValue);
    };

    const controlledInputNewCarPriceEdit = (event) => {
        let value = event.target.value;
        value = value.replace(/\$/g, "");
        let formattedValue = value.replace(/[^0-9.]/g, "");
        if (formattedValue.length === 1 && formattedValue[0] === ".") {
            formattedValue = "";
        }
        if (formattedValue.split(".").length > 2) {
            formattedValue = formattedValue.slice(0, -1);
        }
        setInputNewCarPriceEdit(formattedValue);
    };

    const controlledInputNewCarAvailabilityEdit = () => {
        const value = !inputNewCarAvailabilityEdit;
        setInputNewCarAvailabilityEdit(value);
    };

    const showSuccesEditMessage = () => {
        toast.success("Changes Saved", {
            transition: Flip,
            position: "top-right",
        });
    };

    const editCar = () => {
        if (
            inputNewCarColorEdit.length > 0 &&
            inputNewCarPriceEdit.length > 0
        ) {
            const editedCarObject = {
                id: car.id,
                car: car.car,
                car_model: car.car_model,
                car_color: inputNewCarColorEdit,
                car_model_year: +inputNewCarYearEdit,
                car_vin: car.car_vin,
                availability: inputNewCarAvailabilityEdit ? true : false,
                price:
                    inputNewCarPriceEdit.charAt(0) === "$"
                        ? `$${
                              Math.round(
                                  +inputNewCarPriceEdit.substring(1) * 100
                              ) / 100
                          }`
                        : `$${Math.round(+inputNewCarPriceEdit * 100) / 100}`,
            };
            const indexEditedCar = originalData.cars.findIndex(
                (editedCar) => editedCar.id === car.id
            );
            const updatedArrayAfterEdit = [
                ...originalData.cars.slice(0, indexEditedCar),
                editedCarObject,
                ...originalData.cars.slice(indexEditedCar + 1),
            ];
            updateDataLS({ cars: updatedArrayAfterEdit });
            showSuccesEditMessage();
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShowEdit}>
                Edit Car
            </Button>
            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Suspense
                    fallback={
                        <div className="spinner-lazy-load d-flex justify-content-center align-items-center">
                            <Spinner animation="border" />
                        </div>
                    }
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Car</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CarsFormEditCarInputsWrapper
                            inputNewCarCompanyEdit={inputNewCarCompanyEdit}
                            controlledInputNewCarCompanyEdit={
                                controlledInputNewCarCompanyEdit
                            }
                            inputNewCarModelEdit={inputNewCarModelEdit}
                            controlledInputNewCarModelEdit={
                                controlledInputNewCarModelEdit
                            }
                            inputNewCarVINEdit={inputNewCarVINEdit}
                            controlledInputNewCarVINEdit={
                                controlledInputNewCarVINEdit
                            }
                            inputNewCarYearEdit={inputNewCarYearEdit}
                            controlledInputNewCarYearEdit={
                                controlledInputNewCarYearEdit
                            }
                            inputNewCarColorEdit={inputNewCarColorEdit}
                            controlledInputNewCarColorEdit={
                                controlledInputNewCarColorEdit
                            }
                            inputNewCarPriceEdit={inputNewCarPriceEdit}
                            controlledInputNewCarPriceEdit={
                                controlledInputNewCarPriceEdit
                            }
                            inputNewCarAvailabilityEdit={
                                inputNewCarAvailabilityEdit
                            }
                            controlledInputNewCarAvailabilityEdit={
                                controlledInputNewCarAvailabilityEdit
                            }
                        />
                        {/* <div className="cars-form__new-car-inputs-wrapper d-flex justify-content-around">
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
                                    onChange={
                                        controlledInputNewCarAvailabilityEdit
                                    }
                                >
                                    <option value="false">Unavailable</option>

                                    <option value="true">Available</option>
                                </select>
                            </div>
                        </div>
                    </div> */}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseEdit}>
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() => {
                                handleCloseEdit();
                                editCar();
                            }}
                        >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Suspense>
            </Modal>
        </>
    );
};

export default CarsFormEditCar;
