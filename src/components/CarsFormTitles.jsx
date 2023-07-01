import { v4 as uuidv4 } from "uuid";

const CarsFormTitles = () => {
    const titleNames = [
        "Company",
        "Model",
        "VIN",
        "Color",
        "Year",
        "Price",
        "Availability",
        "Actions",
    ];
    return (
        <div className="cars-form__titles-list d-flex justify-content-between">
            {titleNames.map((title) => {
                return (
                    <div key={uuidv4()}>
                        <h4>{title}</h4>
                    </div>
                );
            })}
        </div>
    );
};

export default CarsFormTitles;
