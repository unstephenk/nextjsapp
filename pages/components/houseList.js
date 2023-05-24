import { useEffect, useState, useRef } from "react";
import HouseRow from "./houseRow";

const HouseList = () => {
    const [houses, setHouses] = useState([]);
    const counter = useRef(0);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("/api/houses");
            const houses = await response.json();

            setHouses(houses)
        }
        fetchHouses();
        counter.current++;
    }, []);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 8,
                address: "12 Valley of Kings, Geneva",
                country: "France",
                price: 700000,
            },
        ]);
    }

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFrontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>

                <tbody>
                    {houses.map(h => <HouseRow key={h.id} house={h} />)}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
};

export default HouseList;