
const HouseAdd = () => {

    const houseJSON = {
        id: 6,
        address: "12 Valley of Kings, Geneva",
        country: "France",
        price: 700000,
    }

    const addHouse = () => {
        fetch("/api/houses", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(houseJSON)
        })
            .then((response) => response.json())
            .then((data) => console.log('Success:', data))
    }


    return (
        <>
            <button className="btn btn-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
};

export default HouseAdd;