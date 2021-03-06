
import "./message.css"
import {format} from "timeago.js"
const Message = ({message,own}) => {
    return (
        <div className={own? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" src="https://res.cloudinary.com/webdev16/image/upload/v1623228264/jogw8x4vrztxa0c5ez0s.jpg" alt="" />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}

export default Message
