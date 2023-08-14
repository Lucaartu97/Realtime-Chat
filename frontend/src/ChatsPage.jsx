import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '7508d667-8d07-4ed6-8b83-be3d9105ecd6', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>
    )
}
  export default ChatsPage; 