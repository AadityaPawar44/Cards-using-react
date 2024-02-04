
import './App.css'; 
import { apiUrl, filterData} from './components/Data';
import Navbar from "./components/Navbar";
import Navbar2 from './components/Navbar2';
import  Filter  from './components/Filter';
import  Cards from './components/Cards';
import Spinner from './components/Spinner';
import { toast } from 'react-toastify';
import {useEffect,useState} from 'react';

function App() {
  const[courses,setCourses]=useState([]);
  const[loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title);
  
    async function fetcthdata(){
      setLoading(true);
      try{
        let res=await fetch(apiUrl);
        let output=await res.json();
        //save data into a variable 
        setCourses(output.data);
      }
      catch(error)
      {
        toast.error("Something went wrong"); 

      }
      setLoading(false);
     } 
    useEffect(()=>{
      fetcthdata();
    },[]);
    

  
  
  return (
   <div className='min-h-scrren flex flex-col bg-slate-600'>
    <div>
    <Navbar/>
    </div>
    <div className='bg-slate-600'>
    <div>
    <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50ch]'>
     {
      loading ? (<Spinner/>):(<Cards courses={courses} category={category}  />)
     }
    </div>
    </div>
    
   </div>
  );
}

export default App;
