import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

const BookSection = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("fakeData.json")
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="my-12">
            <h1 className="text-3xl font-bold text-center">Books: {books.length}</h1> 
            {books.map((book, index) => (
                <div className="my-4" key={index}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={book.image} alt={book.bookName} /></figure>
                        <div>
                            <div className="flex">
                                {book.tags.map((tag, tagIndex) => (
                                    <div className="badge mr-2" key={tagIndex}>{tag}</div>
                                ))}
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{book.bookName}</h2>
                            <p>By {book.author}</p>
                            <div className="card-actions justify-between">
                                <div className="badge ">{book.category}</div> 
                                <div className="badge">{book.rating} <CiStar className="ml-2" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookSection;
