import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {GoComment} from "react-icons/go"
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {BsBookmarkPlus} from "react-icons/bs"
import {CgUserAdd} from "react-icons/cg"


import React from "react";
import {BiDotsHorizontalRounded} from 'react-icons/bi'

const Post = ({item, handlePopover, handleComments, selected, closePopover, handleLikes}) => {

    return (
        <div>
            {item.map((item) => {
                const isSelected = selected[item.ID]
                return <div key={item.ID}>
                    <div className="the-post">
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
                                    <div className="item-list follow-icon">
                                        <Link to="/"><CgUserAdd/></Link>
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
                                    <p>Copy link</p>
                                    <p className="text-danger">Block user</p>
                                    <p className="text-danger">Report</p>
                                    <p className="text-danger" onClick={() => closePopover()}>Close</p>
                                </div>
                            </div>
                            <div className="the-footer">
                                <div className="the-items-icons">
                                    <div className="item-icon">
                                        {item.LikeStatus === '1' ?
                                            <AiFillHeart className="text-danger"
                                                         onClick={() => handleLikes(item.ID, 'dislike')}/> :
                                            <AiOutlineHeart onClick={() => handleLikes(item.ID, 'like')}/>}
                                    </div>
                                    <label htmlFor="comment-checkbox">
                                        <div
                                            style={{marginLeft: '10px'}}
                                            onClick={() => handleComments(item.ID)}
                                            className="item-icon">
                                            <GoComment/>
                                        </div>
                                    </label>
                                </div>
                                <div className="the-items-icons">
                                    <div className="item-icon">
                                        <BsBookmarkPlus/>
                                    </div>
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