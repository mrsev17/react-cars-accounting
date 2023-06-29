import Button from "react-bootstrap/Button";

const CarsFormDeleteButton = ({
    originalData,
    setOriginalData,
    car,
    setShow,
}) => {
    const updateDataLS = (updatedData) => {
        setOriginalData(updatedData);
        localStorage.setItem("myData", JSON.stringify(updatedData));
    };

    const removeCar = (id) => {
        const newDataRemove = originalData.cars.filter(
            (item) => item.id !== id
        );
        updateDataLS({ cars: newDataRemove });
    };
    const handleClose = () => {
        setShow(false);
    };
    return (
        <Button
            variant="primary"
            onClick={() => {
                handleClose();
                removeCar(car.id);
            }}
        >
            Delete
        </Button>
    );
};

export default CarsFormDeleteButton;
