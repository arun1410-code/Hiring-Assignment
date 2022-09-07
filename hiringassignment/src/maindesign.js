import "./App.css";
import img from "./images/img.jpg";
import Box from "@mui/material/Box";
function RCalc() {
  return (
    <Box className="App">
      <>
        <h1 className="heading">ROI Calculator</h1>
        <Box>
          <label class="switch">
            <input type="checkbox" checked={true} />
            <span class="slider round"></span>
          </label>
          <Box className="text header">
            <img className="images" src={img} alt="" />
            <strong>CAKE</strong>
          </Box>
          <Box className="text head">
            <strong>USD</strong>
          </Box>
        </Box>
        <Box>
          <input className="textfield" type="text" value="0.000 USD" readonly />
        </Box>
        <Box className="text cake">~CAKE 0.000</Box>
        <Box>
          <input className="textbtn" type="button" value="$1000" readonly />
          <input className="textbtn" type="button" value="$100" readonly />
        </Box>
        <h3 className="time">Timeframe</h3>
        <Box>
          <button className="timebtnone" type="button">
            1 Day
          </button>
          <button className="timebtn" type="button">
            7 Days
          </button>
          <button className="timebtn" type="button">
            30 Days
          </button>
          <button className="timebtn" type="button">
            1 Year
          </button>
          <button className="timebtn" type="button">
            5 Year
          </button>
        </Box>
        <Box>
          <h2 className="blockthree">Enable Accelerated APY</h2>
          <label class="switchtwo">
            <input type="checkbox" checked={true} />
            <span class="slidertwo round"></span>
          </label>
        </Box>
        <Box className="text tiers">Select Tier</Box>
        <Box>
          <button className="timebtnone" type="button">
            Tier 1
          </button>
          <button className="timebtn" type="button">
            Tier 2
          </button>
          <button className="timebtn" type="button">
            Tier 3
          </button>
          <button className="timebtn" type="button">
            Tier 4
          </button>
          <button className="timebtn" type="button">
            Tier 5
          </button>
        </Box>
        <Box className="text rate">
        <strong>ROI at Current Rates</strong>
        </Box>
        <Box>
        <input className="textfield" type="text" value="0.00 USD" readonly />
        </Box>
        <Box className="text rates">
        <strong>~0.000 CAKE + 0.000000 DON</strong>
        </Box>
      </>
    </Box>
  );
}

export default RCalc;
