import React ,{useState,useEffect} from "react";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import Spinner from "./components/Spinner"
import {apiUrl,filterData} from "./data"
import { toast } from "react-toastify";
const App = () => {
  const[courses,setCourses] = useState(null);
  const[loading,setloading] = useState(true);
  const[category,setCategory]=useState(filterData[0].title);
  async function fetchData(){
    setloading(true);
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Check Your Network Connectivity");
    }
    setloading(false);
  }
  useEffect(function(){
    fetchData();
  },[]);
  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="bg-bgDark2 flex flex-col">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center min-h-[50vh]">
          {
            loading ? (<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
          }
        </div>
      </div>
    </div>
  )
};

export default App;
