import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const navigate = useNavigate();
  return (<Box sx={{height:'100vh'}}>
    <Button variant="text" onClick={() => navigate('/details')} sx={{top: '50%'}}>Romantic movies</Button>
  </Box>
  )
}

export default Dashboard
