import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

class LikesList extends React.Component {

    render() {
        return (
            <div>
                <div style={{minHeight: '90vh'}} className="likes-wrapper">
                    <div className="top-head">
                        People who liked the post
                    </div>
                    <div className="user-list">

                        <div className="user-box">
                            <div className="user">
                                <div className="user-avatar">
                                    <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                                </div>
                                <div className="user-username">
                                    cetric
                                </div>
                            </div>

                            <div className="follow-btn">
                                <button className="follow">Follow</button>
                                {/*<button className="un-follow">Unfollow</button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LikesList