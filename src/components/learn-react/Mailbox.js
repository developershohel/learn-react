import react from "react";

export default class Mailbox extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const unreadMessages = this.props.messages
        let count = 0
        return (
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                    <h2>
                        You have {unreadMessages.length} unread messages.
                    </h2>
                }
                <div>
                    {count && <h1>Messages: {count}</h1>}
                </div>
            </div>
        );
    }
}