// import React, { useState } from "react";

// const TestCards = () => {
//     const cardsPerPage = 20;
//     const [currentPage, setCurrentPage] = useState(1);

//     // Example data
//     const data = Array.from({ length: 100 }, (_, index) => ({
//         id: index + 1,
//         title: `Card ${index + 1}`,
//         description: `This is the description for Card ${index + 1}`,
//     }));

//     const startIndex = (currentPage - 1) * cardsPerPage;
//     const endIndex = startIndex + cardsPerPage;

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const renderCards = () => {
//         return data.slice(startIndex, endIndex).map((card) => (
//             <div key={card.id} className="card">
//                 <h3>{card.title}</h3>
//                 <p>{card.description}</p>
//             </div>
//         ));
//     };

//     const renderPageNumbers = () => {
//         const totalPages = Math.ceil(data.length / cardsPerPage);
//         const pageNumbers = [];

//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(
//                 <button key={i} onClick={() => handlePageChange(i)}>
//                     {i}
//                 </button>
//             );
//         }

//         return pageNumbers;
//     };

//     return (
//         <div>
//             <div className="card-panel">{renderCards()}</div>
//             <div className="pagination">{renderPageNumbers()}</div>
//         </div>
//     );
// };

// export default TestCards;

import React, { useState } from "react";

const CardsComponent = () => {
    const cardsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    // Example data
    const data = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        title: `Card ${index + 1}`,
        description: `This is the description for Card ${index + 1}`,
    }));

    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // const handleSearchChange = (event) => {
    //     setSearchQuery(event.target.value);
    //     setCurrentPage(1); // Reset page to 1 when search query changes
    // };

    const renderCards = () => {
        const filteredData = data.filter(
            (card) =>
                card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
        );

        return filteredData.slice(startIndex, endIndex).map((card) => (
            <div key={card.id} className="card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            </div>
        ));
    };

    const renderPageNumbers = () => {
        const totalPages = Math.ceil(
            data.filter(
                (card) =>
                    card.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    card.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
            ).length / cardsPerPage
        );
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button key={i} onClick={() => handlePageChange(i)}>
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div>
            {/* <div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div> */}
            <div className="card-panel">{renderCards()}</div>
            <div className="pagination">{renderPageNumbers()}</div>
        </div>
    );
};

// export default CardsComponent;
