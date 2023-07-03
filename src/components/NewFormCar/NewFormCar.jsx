import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { toast, Flip } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import "./newFormCar.css";
import {
    inputNewCompany,
    inputNewModel,
    inputNewVIN,
    inputNewYear,
    inputNewColor,
    inputNewPrice,
    inputNewAvailability,
} from "./functions";

export const NewFormCar = ({ originalData, updateDataLS }) => {
    const [showNewCar, setShowNewCar] = useState(false);
    const [newCompany, setNewCompany] = useState("");
    const [newModel, setNewModel] = useState("");
    const [newVIN, setNewVIN] = useState("");
    const [newYear, setNewYear] = useState("");
    const [newColor, setNewColor] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newAvailability, setNewAvailability] = useState(false);

    const handleCloseNewCar = () => setShowNewCar(false);
    const handleShowNewCar = () => setShowNewCar(true);

    const newCarEvent = () => {
        handleCloseNewCar();
        addNewCar();
    };

    const checkLengthInputs =
        newCompany.length > 0 &&
        newModel.length > 0 &&
        newColor.length > 0 &&
        newYear.length > 0 &&
        newVIN.length > 0 &&
        newPrice.length > 0;

    const cleanInputsNewCar = () => {
        setNewCompany("");
        setNewModel("");
        setNewColor("");
        setNewYear("");
        setNewVIN("");
        setNewPrice("");
    };

    const showSuccesCreateCar = () => {
        toast.success("Added a new car", {
            transition: Flip,
            position: "top-right",
        });
    };

    const addNewCar = () => {
        if (checkLengthInputs) {
            const newCarObject = {
                id: uuidv4(),
                car: newCompany,
                car_model: newModel,
                car_color: newColor,
                car_model_year: +newYear,
                car_vin: newVIN,
                availability: newAvailability ? true : false,
                price: `$${Math.round(newPrice * 100) / 100}`,
            };
            const addNewCarInData = [newCarObject, ...originalData.cars];
            updateDataLS({ cars: addNewCarInData });
            cleanInputsNewCar();
            showSuccesCreateCar();
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
                                    value={newCompany}
                                    onChange={(e) =>
                                        inputNewCompany(e, setNewCompany)
                                    }
                                    placeholder="Company"
                                />
                            </div>
                            <div className="cars-form__new-car-input">
                                <input
                                    type="text"
                                    value={newModel}
                                    onChange={(e) =>
                                        inputNewModel(e, setNewModel)
                                    }
                                    placeholder="Model"
                                />
                            </div>
                            <div className="cars-form__new-car-input">
                                <input
                                    type="text"
                                    value={newVIN}
                                    onChange={(e) => inputNewVIN(e, setNewVIN)}
                                    placeholder="VIN"
                                />
                            </div>
                            <div className="cars-form__new-car-input">
                                <input
                                    type="text"
                                    value={newYear}
                                    onChange={(e) =>
                                        inputNewYear(e, setNewYear)
                                    }
                                    placeholder="Year"
                                />
                            </div>
                        </div>
                        <div className="cars-form__new-car-right-side-inputs d-flex align-items-center flex-column gap-2">
                            <div className="cars-form__new-car-input">
                                <input
                                    type="text"
                                    value={newColor}
                                    onChange={(e) =>
                                        inputNewColor(e, setNewColor)
                                    }
                                    placeholder="Color"
                                />
                            </div>
                            <div className="cars-form__new-car-input">
                                <input
                                    type="text"
                                    value={newPrice}
                                    onChange={(e) =>
                                        inputNewPrice(e, setNewPrice)
                                    }
                                    placeholder="Price"
                                />
                            </div>
                            <div className="cars-form__new-car-input">
                                <select
                                    value={newAvailability}
                                    onChange={(e) =>
                                        inputNewAvailability(
                                            e,
                                            setNewAvailability
                                        )
                                    }
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
                    <Button variant="primary" onClick={newCarEvent}>
                        Save Car
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
