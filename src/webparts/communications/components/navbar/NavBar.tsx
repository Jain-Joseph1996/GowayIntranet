import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
      <img src={require('../../assets/logo.png')}  alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
      </Typography>

      {/* Search Bar */}

      <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparent white
            borderRadius: "20px",
            width: "250px",
            "& .MuiOutlinedInput-root": {
              color: "white", // Text color
              "& fieldset": { border: "none" }, // Remove border
              "&:hover fieldset": { border: "none" },
              "&.Mui-focused fieldset": { border: "none" },
            },
            input: { padding: "8px 12px" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />

      <Button color="inherit" sx={{ textTransform: "none" , fontSize: "1.2rem"  }}>People and Culture</Button>
      <Button color="inherit" sx={{ textTransform: "none" , fontSize: "1.2rem"  }}>IT</Button>
    </Toolbar>
  </AppBar>     
  );
};
export default Header;