import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { toast } from "react-toastify";
import { Flip } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CarsFormNewCar = ({ originalData, updateDataLS }) => {
    const [showNewCar, setShowNewCar] = useState(false);
    const [inputNewCarCompany, setInputNewCarCompany] = useState("");
    const [inputNewCarModel, setInputNewCarModel] = useState("");
    const [inputNewCarVIN, setInputNewCarVIN] = useState("");
    const [inputNewCarYear, setInputNewCarYear] = useState("");
    const [inputNewCarColor, setInputNewCarColor] = useState("");
    const [inputNewCarPrice, setInputNewCarPrice] = useState("");
    const [inputNewCarAvailability, setInputNewCarAvailability] =
        useState(false);

    const cleanInputsForNewCar = () => {
        setInputNewCarCompany("");
        setInputNewCarModel("");
        setInputNewCarColor("");
        setInputNewCarYear("");
        setInputNewCarVIN("");
        setInputNewCarPrice("");
    };

    const handleCloseNewCar = () => setShowNewCar(false);
    const handleShowNewCar = () => setShowNewCar(true);

    const controlledInputNewCarCompany = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9\s]|^\s/g, "");
        const truncatedValue = filteredValue.slice(0, 20);
        setInputNewCarCompany(truncatedValue);
    };

    const controlledInputNewCarModel = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9\s]|^\s/g, "");
        const truncatedValue = filteredValue.slice(0, 15);
        setInputNewCarModel(truncatedValue);
    };

    const controlledInputNewCarVIN = (event) => {
        const value = event.target.value;
        const formattedValue = value
            .replace(/[^A-Za-z0-9]/g, "")
            .toUpperCase()
            .slice(0, 20);
        setInputNewCarVIN(formattedValue);
    };

    const controlledInputNewCarYear = (event) => {
        const value = event.target.value;
        const formattedValue = value.replace(/\D/g, "").slice(0, 4);
        setInputNewCarYear(formattedValue);
    };

    const controlledInputNewCarColor = (event) => {
        const inputValue = event.target.value;
        const filteredValue = inputValue.replace(/[^A-Za-z0-9]/g, "");
        const truncatedValue = filteredValue.slice(0, 15);
        setInputNewCarColor(truncatedValue);
    };

    const controlledInputNewCarPrice = (event) => {
        const value = event.target.value;
        let formattedValue = value.replace(/[^0-9.]/g, "");
        if (formattedValue.length === 1 && formattedValue[0] === ".") {
            formattedValue = "";
        }
        if (formattedValue.split(".").length > 2) {
            formattedValue = formattedValue.slice(0, -1);
        }
        setInputNewCarPrice(formattedValue);
    };

    const controlledInputNewCarAvailability = (event) => {
        setInputNewCarAvailability(event.target.value);
    };

    const showSuccesCreateNewCarMessage = () => {
        toast.success("Added a new car", {
            transition: Flip,
            position: "top-right",
        });
    };

    const addNewCar = () => {
        if (
            inputNewCarCompany.length > 0 &&
            inputNewCarModel.length > 0 &&
            inputNewCarColor.length > 0 &&
            inputNewCarYear.length > 0 &&
            inputNewCarVIN.length > 0 &&
            inputNewCarPrice.length > 0
        ) {
            const newCarObject = {
                id: uuidv4(),
                car: inputNewCarCompany,
                car_model: inputNewCarModel,
                car_color: inputNewCarColor,
                car_model_year: +inputNewCarYear,
                car_vin: inputNewCarVIN,
                availability: inputNewCarAvailability ? true : false,
                price: `$${Math.round(inputNewCarPrice * 100) / 100}`,
            };
            const addNewCarInData = [newCarObject, ...originalData.cars];
            updateDataLS({ cars: addNewCarInData });
            cleanInputsForNewCar();
            showSuccesCreateNewCarMessage();
        }
    };

    return (
        <div className="cars-form__panel-add-car">
            <Button variant="primary" onClick={handleShowNewCar}>
                Add Car +
            </Button>

            <Modal show={showNewCar} onHide={handleCloseNewCar}>
                <Modal.Header closeButton>
                    <Modal.Title>New Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseNewCar}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            handleCloseNewCar();
                            addNewCar();
                        }}
                    >
                        Save Car
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CarsFormNewCar;
