import { useState, Fragment, useEffect,useCallback } from 'react' ; 
import LeftImage from './assets/images/left.png';
import FilterButtons from './comp/FilterButton';
import Navbar from './comp/Navbar';
import "./App.css";
import Images from './comp/Images'; 
import Support from './comp/Support'; 

const FILTER_ALL = 'All';

function App() { 
  const [nav, setNav] = useState('home');
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredImage, setfilteredImage] = useState(FILTER_ALL);
  

  const fetchMoviesHandler = useCallback(async () => {
    //start loading in here later
    try{
      const response = await fetch('http://localhost:8000/api/v1/images');
      
      if(!response.ok) {
        throw new Error('Something went wrong.');
      }

      const data = await response.json();
       
      setImages(data.images); 
      setCategories([FILTER_ALL, ...data.categories]);
    }catch(error) {
      // update error status in here later
    }
    // update loading status in here later
  }, [])

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); 



  let filteredImages = [];
  
  if(filteredImage === FILTER_ALL){
    filteredImages = images;
  }
  else{ 
    filteredImages = images.filter((image) => { 
      return image.name === filteredImage;
    });
  }

  const handleFilterChange = (val) => {
    setfilteredImage(val); 
  }

  const handleNavChange = (val) => { 
    setNav(val);
  }

  let content;
  if(nav === 'home') {
    content = (
      <Fragment>
          <div class="left">
            <img src={LeftImage} alt="Logo" />
            <p>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
            <FilterButtons categories={categories} onFilterChange={handleFilterChange}/>
          </div>
          <div class="right">
            <Images images={filteredImages}/>
          </div>
      </Fragment>
    );
  }else{
    content = (
      <Support />
    )
  }
  

  return (
    <div className='App'>
      
    <Navbar onChangeNav={handleNavChange}/>
    <div class="container">
        {/* This is the temporary, we can use router in here */}

       {nav === 'home' && content} 
       {nav === 'support' && content} 
    </div> 
    </div>
  )
}

export default App
