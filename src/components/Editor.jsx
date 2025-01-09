
import { useState } from "react";
const Editor = ({onCreate}) => {

    const [content, setContent] = useState("");

    const onChangeContent = (e) => {
        setContent(event.target.value);
    }

    const onsubmit = () => {
        onCreate(content);
    }
  return (
    <div className="editor">
        <input value={content} onChange={onChangeContent} placeholder="새로운 Todo..."></input>
        <button onClick={onsubmit}>추가</button>
    </div>
  )
}

export default Editor