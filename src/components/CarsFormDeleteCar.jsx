import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CarsFormDeleteCar = ({ originalData, updateDataLS, car }) => {
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => {
        setShowDelete(false);
    };
    const handleShowDelete = () => setShowDelete(true);
    const removeCar = (id) => {
        const newDataRemove = originalData.cars.filter(
            (item) => item.id !== id
        );
        updateDataLS({ cars: newDataRemove });
    };
    return (
        <>
            <Button
                className="cars-form__actions-delete-car"
                variant="primary"
                onClick={handleShowDelete}
            >
                Delete Car
            </Button>

            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>You will not be able to recover car</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Cancel
                    </Button>
                    <Button
                        className="cars-form__actions-delete-car"
                        variant="primary"
                        onClick={() => {
                            handleCloseDelete();
                            removeCar(car.id);
                        }}
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CarsFormDeleteCar;
