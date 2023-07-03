import { Car } from "../Car";
import "./ItemCar.css";

export const ItemCar = ({
    slicedData,
    originalData,
    setOriginalData,
    updateDataLS,
    setCurrentPage,
    totalPages,
}) => {
    return (
        <>
            {slicedData.map((car) => {
                return (
                    <Car
                        key={car.id}
                        car={car}
                        slicedData={slicedData}
                        originalData={originalData}
                        setOriginalData={setOriginalData}
                        updateDataLS={updateDataLS}
                        setCurrentPage={setCurrentPage}
                        totalPages={totalPages}
                    />
                );
            })}
        </>
    );
};
