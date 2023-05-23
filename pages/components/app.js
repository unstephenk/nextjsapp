import HouseList from "./houseList";

const { default: Banner } = require("./banner")

const App = () => {
    return (
        <>
            <Banner>
                <div>Providing houses all over the world</div>
            </Banner>
            <HouseList />
        </>
    );
};

export default App;