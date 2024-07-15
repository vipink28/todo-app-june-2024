import React, { useState } from 'react';
import { convertBase64 } from '../helper';

function Profile(props) {
    const [imgVal, setImgVal] = useState("");
    const handleImage = async (e) => {
        let file = e.target.files[0];
        let imgString = await convertBase64(file);
        setImgVal(imgString);
    }

    return (
        <div>
            <input type="file" onChange={handleImage} />
            <img src={imgVal} alt="img" />
        </div>
    );
}

export default Profile;