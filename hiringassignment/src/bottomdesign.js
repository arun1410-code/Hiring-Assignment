import "./App.css";
import Box from "@mui/material/Box";
function RCalcBottom() {
  return (
    <Box className="App">
      <>
        <Box>
          <h4 className="btmtext">Hide Details ^</h4>
        </Box>
        <Box>
        <Box className="apy">APY</Box>
        <Box className="perc">9.0 %</Box>
        </Box>
        <Box className="text ptext">
        <p>• Calculated based on current rates</p>
        <p>• All figures are estimates provided for your convenience only, and by no means represent guranteed returns.</p>
        </Box>
      </>
    </Box>
  );
}

export default RCalcBottom;
