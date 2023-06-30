import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CarsFormDeleteButton from "./CarsFormDeleteButton";

const CarsFormActionsDropdown = ({ originalData, setOriginalData, car, updateDataLS }) => {
    const [show, setShow] = useState(false);

    // const updateDataLS = (updatedData) => {
    //     setOriginalData(updatedData);
    //     localStorage.setItem("myData", JSON.stringify(updatedData));
    // };

    // const removeCar = (id) => {
    //     const newDataRemove = originalData.cars.filter(
    //         (item) => item.id !== id
    //     );
    //     updateDataLS({ cars: newDataRemove });
    // };

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => setShow(true);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success">Actions</Dropdown.Toggle>

            <Dropdown.Menu>
                {/* Action for edit car */}

                <Dropdown.Item href="">Edit Car</Dropdown.Item>

                {/* = = = = = = = = = = */}

                {/* Action for delete car from list */}

                <Dropdown.Item href="">
                    <>
                        <Button
                            className="cars-form__actions-delete-car"
                            variant="primary"
                            onClick={handleShow}
                        >
                            Delete Car
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Are you sure?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                You will not be able to recover car
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    variant="secondary"
                                    onClick={handleClose}
                                >
                                    Cancel
                                </Button>

                                <CarsFormDeleteButton
                                    originalData={originalData}
                                    setOriginalData={setOriginalData}
                                    car={car}
                                    setShow={setShow}
                                    updateDataLS={updateDataLS}
                                />
                            </Modal.Footer>
                        </Modal>
                    </>
                </Dropdown.Item>

                {/* = = = = = = = = = = = = = = = = */}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CarsFormActionsDropdown;
