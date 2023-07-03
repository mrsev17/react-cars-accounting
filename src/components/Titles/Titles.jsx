import { v4 as uuidv4 } from "uuid";
import "./titles.css";


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

export const Titles = () => {
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
