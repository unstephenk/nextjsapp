import loadingStatus from "../helpers/loadingStatus";
import HouseRow from "./houseRow";
import useHouses from "../hooks/useHouses";
import LoadingIndicator from "./loadingIndicator";

const HouseList = ({ selectHouse }) => {
    const { houses, setHouses, loadingState } = useHouses();

    if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

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
                    {houses.map((h) => (<HouseRow key={h.id} house={h} selectHouse={selectHouse} />))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
};

export default HouseList;