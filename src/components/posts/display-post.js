import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {faCommentDots, faHeart} from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {BiDotsHorizontalRounded} from 'react-icons/bi'
const Post = ({ item, handlePopover, selected }) => {
    return(
        <div>
            {item.map((item) => {
                const isSelected = selected[item.ID]
                return <div className="the-post" key={item.ID}>
                    <div className="the-avatar">
                        <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                    </div>
                    <div className="details">
                        <div className="head">
                            <div className="left-items">
                                <div className="user-avatar">
                                    <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                                </div>
                                <div className="item-list">
                                    {item.Username}
                                </div>
                                <div className="item-list">
                                    <Link to="/">Follow</Link>
                                </div>
                            </div>
                            <div
                                onClick={() => handlePopover(item.ID)}
                                className="right-items">
                                <BiDotsHorizontalRounded/>
                            </div>
                        </div>
                        <div className="the-body">
                            {item.Description}
                            <div style={{display: isSelected ? 'block' : 'none'}}
                                 className="pop-over">
                                <p>Created at {item.CreatedAt}</p>
                                <div className="line-divider"/>
                                <p>Save post</p>
                                <p>Copy link</p>
                                <p className="text-danger">Block user</p>
                                <p className="text-danger">Report</p>
                            </div>
                        </div>
                        <div className="the-footer">
                            <div className="the-items-count">
                                160 Likes
                            </div>
                            <div className="the-items-icons">
                                <div className="item-icon">
                                    <FontAwesomeIcon icon={faHeart}/>
                                </div>
                                <div className="item-icon">
                                    <FontAwesomeIcon icon={faCommentDots}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
};
export default Post