import { useEffect } from "react"
import { useState } from "react"

const Accrodian = () => {
    const [data, setData]= useState([])
    useEffect(()=> {
        const  fetchData = async () => {
            const  response = await fetch('data.json')
            const   data = await response.json()
            setData(data)
        }
        fetchData()
},[])
const  [active, setActive] = useState(null)
const handalerSelect =  (id) => {
    setActive(id===active? null  : id)

}
return (
    <div  className="max-w-2xl mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-md">
        {
            data.map(({ id, question, answer }) => {
                return (
                    <div key={id}  className="mb-4 p-4 border rounded-lg bg-white shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <div className="flex justify-between text-3xl">
                            <h1  className="text-xl font-semibold text-gray-800">{question}</h1>
                            <span onClick={()=> handalerSelect(id)}  className="text-2xl font-bold cursor-pointer text-gray-500 hover:text-blue-500 transform transition-transform duration-200">{active===id?'-': '+'} </span>
                        
                        </div>
                        {
                            active===id ? 
                            <div  className="mt-3 text-gray-600 transition-opacity duration-300">
                                <p>{answer}</p>
                            </div>
                            : null
                        }
                    </div>
                    );
                })
        }

    </div>
  )
}

export default Accrodian