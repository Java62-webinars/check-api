import {useContext} from 'react';
import {IpContext} from "./IpContext.tsx";

const IpForm = () => {
    const ctx = useContext(IpContext);

    // На случай, если кто-то забудет обернуть App в IpProvider
    if (!ctx) {
        return <div>Error connect to IpProvider</div>;
    }
    const { lookup } = ctx;
    const handleSubmit = async () => {
        await lookup("8.8.8.8");
    };


    return (
        <button onClick={handleSubmit}>

        </button>
    );
};

export default IpForm;