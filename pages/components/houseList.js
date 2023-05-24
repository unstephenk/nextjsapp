import { useEffect, useState } from "react";
import HouseRow from "./houseRow";
import HouseAdd from "./houseAdd";

const HouseList = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("/api/houses");
            const houses = await response.json();

            setHouses(houses)
        }
        fetchHouses();
    });

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
            <HouseAdd />
        </>
    );
};

export default HouseList;