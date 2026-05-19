import {useState} from "react";

function MegaButton() {
    const [isMegaSinka, setMegaSinka] = useState(false);

    function changeMegaSinka() {
        setMegaSinka((prev) => !prev);
    }

    return (
        <button className="mega-button" type="button" onClick={changeMegaSinka}>
            メガシンカ
        </button>
    );
}

export default MegaButton;
