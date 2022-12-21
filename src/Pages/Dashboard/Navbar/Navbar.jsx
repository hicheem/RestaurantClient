import { AppBar, IconButton, Toolbar, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import AccountMenu from './AccountMenu'
import './Navbar.css'
import Searchcomp from './Searchcomp';
import { useNavigate } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Navbar = (props) => {
  
  const navigate = useNavigate()
  
  const [navbar, setNavbar] = useState(false)
  
  const changeBackgroundNav = () =>{
    if(window.scrollY >= 30)
      setNavbar(true)
    else
      setNavbar(false)
  }
  window.addEventListener('scroll', changeBackgroundNav)

  return (
      <AppBar position='fixed' color='transparent' sx={{
          width:'90%',
          transition:'0.2s',
          borderRadius:navbar?'3rem': '',
          height:'3rem',
          my:'1rem',
          mx:'4rem',
          // backgroundColor:'white',
          backgroundColor:navbar?'#ffffffd3':'white',
          boxShadow:navbar?'':0,
          color:'black'
        }}>
        <Toolbar sx={{
          display:'flex',
          justifyContent:'space-between'
          }}>
          <Searchcomp/>
          <div style={{
            display:'flex',
            gap:'1rem',
            marginRight:'2rem'
            }}>
            <Tooltip title="Orders" placement="bottom" onClick={()=>navigate('orders')}>
              <IconButton aria-label="notification" >
                <StyledBadge badgeContent={props.cart.length} color='success'>
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Tooltip>
            <AccountMenu/>
          </div>
        </Toolbar>    
      </AppBar>
  )
};
export default Navbar