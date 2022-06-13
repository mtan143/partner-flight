import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/system';
import flightApi from '../../Api/flightApi';
import ticketImage from '../../img/ticket.jpg';
import Footer from '../Footer';
Tickets.propTypes = {
    
};
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
function Tickets(props) {
    function formatVnd(n, currency) {
        return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
      };
    const [ticktes, setTickets] = useState([]);
    useEffect(()=> {
        const fetchTickets = async () => {
            try{
                const ticketsList = await flightApi.getTickets(localStorage.getItem("code"));
                console.log(ticketsList.data);
                setTickets(ticketsList.data);
            }
            catch(error){
                console.log('Fail to fetch ticket list', error);
            }
        }
        fetchTickets();
    },[]) 
    function renderSwitch(data){
      switch(data){
        case "Tao":
          return <i title='Tạo' className="fa-solid fa-clipboard-check fa-2xl"></i>;

        case "Da_Dat":
          return <i title='Đã Đặt' className="fa-solid fa-cart-plus fa-2xl"></i>;
        
        case "Da_Dung":
          return <i title='Đã Dùng' className="fa-solid fa-user-check fa-2xl"></i>;
        case "Da_Huy":
          return <i title='Đã Hủy' className="fa-solid fa-trash fa-2xl"></i>;
      }
    }

    
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         {ticktes.map((ticket,index)=> 
            (  <Grid item md={6} sx={12}>
              <Paper
            sx={{
              p: 2,
              margin: 'auto',
              flexGrow: 1,
              maxWidth:  600,
              backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={ticketImage} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        <h3>{ticket.lastName} {ticket.firstName}</h3>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    {ticket.createdDate}
                    </Typography>
                   
                    <Typography variant="body2" color="text.secondary">
                      {ticket.ticketCode}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item flexDirection="column-reverse" display="flex" justifyContent="space-around">
                  <Typography variant="subtitle1" component="div">
                    Total price: {formatVnd(ticket.totalPrice,"VNĐ")}
                  </Typography>
                  <Typography  gutterBottom>
                    {renderSwitch(ticket.ticketStatus)}
                    </Typography>
                </Grid>
              </Grid>
              
            </Grid>
          </Paper>
                  </Grid>)
        )}
              </Grid>
              </Box>
              { localStorage.getItem("code") === null ? <></> :  <Footer />}
        </>
    );
}

export default Tickets;