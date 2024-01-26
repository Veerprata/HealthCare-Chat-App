import { MultiChatSocket,MultiChatWindow,useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'e056adf6-f848-48a4-be90-1ef9c2cd3cab', 
        props.user.username,
        props.user.secret
        );
    return (
    <div style={{height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%' }}/>
    </div>
    )
   
    }
export default ChatsPage