import { Grid } from '@mui/material'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Prayer from './Prayer';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { useState , useEffect } from 'react';



export default  function MainContent() {
  const getTimings = async () => {
      
    const data = await axios.get("https://api.aladhan.com/v1/timingsByCity?country=eg&city=cairo")
    settimings (response.data.data.timings)

    const time = data.data.data.timings
    console.log(time)

  }

  useEffect(()=>{
      getTimings()
  },[])
  const [timings , settimings] = useState({
    Fajr: "04:18",
    Dhuhr: "12:51",
    Asr: "16:28",
    Sunset: "19:44",
    Maghrib: "19:44",
    Isha: "21:13",
  })
  // const data = await axios.get("https://api.aladhan.com/v1/timingsByCity?country=eg&city=cairo")
  // settimings(data.data.timings)
  const handleChange = (event) => {
    // console.log(event.target.value)
  };


  return (
    <>
    {/* TOP ROW */}
    <Grid container>
    
          <Grid sx={6}>
          
            <div>
              <h2> 08:30 | 2024 19 مايو </h2>
              <h1> مكة المكرمة </h1>
            </div>
            
          </Grid>
          

          <Grid sx={6}>
          
          <div>
          <h2> متبقي حتي صلاة </h2>
          <h1> 00:10:20 </h1>
          </div>
          
          </Grid>
          
          
          
          
          </Grid>
          
          {/* TOP ROW */}

          <Divider/>

          {/* Prayers Cards */}




            <Stack direction="row" justifyContent={"space-around"} style={{marginTop:"50px" , flexWrap:"wrap" , gap:"15px"}}>
            
              <Prayer name="الفجر"  time={timings.Fajr} imge={"/src/imges/fajr-prayer.png"} />
              <Prayer name="الظهر"  time={timings.Dhuhr} imge={"/src/imges/dhhr-prayer-mosque.png"} />
              <Prayer name="العصر"  time={timings.Asr} imge={"/src/imges/asr-prayer-mosque.png"} />
              <Prayer name="المغرب" time={timings.Maghrib} imge={"/src/imges/night-prayer-mosque.png"} />
              <Prayer name="العشاء" time={timings.Isha} imge={"/src/imges/sunset-prayer-mosque.png"} />


            </Stack>




          {/* Prayers Cards */}

          {/* Select City */}


          <Stack direction={"row"} justifyContent={"center"} >

          <FormControl style={{width: "20%" , marginTop: "50px"}}>
          <InputLabel id="demo-simple-select-label"> المدينة </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}> القاهرة </MenuItem>
            <MenuItem value={20}> الفيوم </MenuItem>
            <MenuItem value={30}> الاسكندرية </MenuItem>
          </Select>
        </FormControl>

          </Stack>

          {/* Select City */}

    </>
  )
}
