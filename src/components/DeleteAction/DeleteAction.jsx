import { useState } from "react";
import { toast, Flip } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import "./deleteAction.css";

export const DeleteAction = ({
    originalData,
    updateDataLS,
    car,
    slicedData,
    setCurrentPage,
    totalPages,
}) => {
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => {
        setShowDelete(false);
    };
    const handleShowDelete = () => setShowDelete(true);
    const showSuccesDeleteCarMessage = () => {
        toast.success("Car removed", {
            transition: Flip,
            position: "top-right",
        });
    };
    const removeCar = (id) => {
        const carIndex = originalData.cars.findIndex((item) => item.id === id);
        const newDataRemove = [
            ...originalData.cars.slice(0, carIndex),
            ...originalData.cars.slice(carIndex + 1),
        ];
        updateDataLS({ cars: newDataRemove });
        showSuccesDeleteCarMessage();
    };

    const checkEmptyPage = () => {
        if (slicedData.length === 1) setCurrentPage(totalPages - 1);
    };

    const deleteCarEvent = () => {
        handleCloseDelete();
        removeCar(car.id);
        checkEmptyPage();
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

            <Modal centered show={showDelete} onHide={handleCloseDelete}>
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
                        onClick={deleteCarEvent}
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
