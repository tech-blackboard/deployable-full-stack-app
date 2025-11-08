import { useState, type SetStateAction } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

interface CheckListAddComponentProps{
    name:string;
}

export default function CheckListAddComponent({ name }: CheckListAddComponentProps){

    const [addItemName, setAddItemName]=useState('')
    const [finaladdItemName, setFinalAddItemName] = useState('')

    const [addItemNameArray, setAddItemNameArray] = useState<any[]>([])

    const[addItem,setAddItems]=useState(false);

    function addItemInputOnchange(e: React.ChangeEvent<HTMLInputElement>){
        setAddItemName(e.target.value)
        console.log("additemname", addItemName)

    }
    function addItems(){
        setAddItems(true)
     
    }

    function addItemInput(){
      
        setFinalAddItemName(addItemName)
        console.log("finaladdItem", finaladdItemName)
        console.log("additemname", addItemName)
        setAddItemNameArray([...addItemNameArray,addItemName])
        setAddItemName("")

    }

    function cancelAddItems() {
        setAddItems(!true)
        setAddItemName("")

    }
    function deleteAddItems() {
        setAddItems(!true)
       

    }

    return(
        <div>
            <div className=" border-2 w-full md:w-1/2 lg:w-11/12 mx-auto px-11 p-2  shadow-xl border-blue-200   rounded-md  ">
                <div className=" mx-auto mt-3">
                    <div className="flex flex-row gap-3 ">
                        <input type="checkbox" className="w-4" value="checked"/>
                        <p className=" font-bold text-xl mt-2  text-blue-900">{name}</p>

                    
                        <div className=" mx-auto mt-3 flex flex-row  mr-9 gap-8">
                            <button className="border-2 shadow-xl border-gray-400  bg-gray-400 rounded-md p-1 ">Hide checked items</button>

               </div>
                       
               </div>
               
            </div>
           
            
            <div className="flex flex-row  mt-9 ">
                <p>0%</p>
                <div className="w-full md:w-1/2 lg:w-full rounded-xl ml-3 mt-2  border-2 h-3 bg-bray-900 ">
                <div></div></div>
            </div>
                
                    {
                    addItemNameArray.map((item) => <div className="flex flex-row  mt-3" key={item}>
                            <><div className="">
                                <input type="checkbox" /></div></> 
                            <p>{item}</p>
                           
                        </div>)
                        
                    }
              

              

                {addItem && <><InputComponent placeholder="Add an item" className="lg:w-full mt-9" inputValue={addItemName} inputOnChange={addItemInputOnchange} /><div className="flex flex-row  mt-3">
                    <ButtonComponent name="Add" onClick={addItemInput} />
                    <ButtonComponent name="Cancel" className="bg-gray-400" onClick={cancelAddItems }/>
                </div></>}
            
     

                <button className="border-2 bg-gray-300" onClick={addItems}>Add an item</button>
        </div>
        </div>
    )
}