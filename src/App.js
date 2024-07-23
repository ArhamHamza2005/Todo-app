import './App.css';
import  { useState} from 'react';

function App() {
  
  
  const [list,setList]=useState([])
  const [inputValue,setInputValue]=useState("")
  const [editMode,seteditMode]=useState(false)
  const [currentIndex,setCurrentIndex]=useState(false)
  

    function addItem(){
      const copyList= [...list]
      copyList.push(inputValue)
      setList(copyList)

     setInputValue("")
    }
    function deleteItem(index){
         const copyList= [...list]
         copyList.splice(index,1)
         setList(copyList)

    }
    function editItem(index){
        const itemValue=list [index]
        setInputValue(itemValue)

        seteditMode(true)
        setCurrentIndex(index)

    }
    function updateItem(){
      const copyList= [...list]
      copyList [currentIndex]=inputValue
      setList(copyList)

      seteditMode(false)
      setInputValue('')
    }
   function deleteAll(){
        setList([])

   }


      function updateText(e){
        const getText=e.target.value
        setInputValue(getText)
      }

  return (
    <>
    <div className="App">
      <input className='inputfield' placeholder="Enter Todo Items" onChange={updateText} value={inputValue}/>
      <button className='alldeletbtn' onClick={deleteAll}>DeleteAll</button>

      { editMode ?

        <button className='updatebtn' onClick={updateItem}>UPDATE</button>
        :
        <button className='addbtn' onClick={addItem}>Add</button>

      }


        <ul>
           {list.map(function(item,index){
            return(
              <li className='todolist'>{item}
              <button className='delete-button' onClick={()=>deleteItem(index)}>Delete</button>
              <button className='edit-button' onClick={()=>editItem(index)}>Edit</button>
              </li>

            )
           })}
        </ul>

    </div>
   </>
  );
}

export default App;
