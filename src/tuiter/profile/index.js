import React from "react";
import WhatsHappening from "../home/whats-happening";

const ProfileComponent  = () => {
    return(
        <div className="col mt-2">
            <div>
                <h2>Name</h2>
            </div>
            <div>
                <WhatsHappening/>
            </div>

        </div>
    );
};
export default ProfileComponent ;