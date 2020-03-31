import React from 'react';

const TodoListUI =(props)=>{
    let {inputValue, changeInput, addList, list} = props; // 粘贴过来后，此处要进行修改
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInput} />
                <button onClick={addList}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}
 
export default TodoListUI;
