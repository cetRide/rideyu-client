import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import React from "react";

const CommentList = ({item, handleReply, handleMoreAction}) => {
    return (
        <div>
            {item.map((item) => {
                const length = item.Path.split(",").length
                return (
                    <div key={item.ID}>
                        {length === 0 ?
                            <details className="collapse">
                                <summary className="title">expand</summary>
                                <div style={{
                                    marginLeft: length === 2 ? '30px' : length > 2 ? '60px' : '0'
                                }} className=" description comment-box">
                                    <div className="the-avatar">
                                        <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                                    </div>
                                    <div className="">
                                        <div className="message-box">
                                            <span className="text-bold">{item.Username}</span>
                                            <p>{item.Comment}</p>
                                        </div>
                                        <div>
                                            <div className="bottom-action">
                                                <span>Like</span>
                                                <span>Reply</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </details> :
                            <div style={{
                                marginLeft: length === 2 ? '30px' : length > 2 ? '60px' : '0'
                            }} className="comment-box">
                                <div
                                    style={{
                                        fontSize: length === 2 ? '30px' : length > 2 ? '25px' : '45px'
                                    }}
                                    className="the-avatar">
                                    <FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/>
                                </div>
                                <div className="">
                                    <div className="message-box">
                                        <span className="text-bold">{item.Username}</span>
                                        <p>{item.Comment}</p>
                                    </div>
                                    <div>
                                        <div className="bottom-action">
                                            <span><AiOutlineHeart/></span>
                                            <span onClick={() => handleReply(item.ID)}>Reply</span>
                                            <span onClick={() => handleMoreAction(item.ID)}><BiDotsVerticalRounded/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                    </div>)
            })}
        </div>
    )
};
export default CommentList