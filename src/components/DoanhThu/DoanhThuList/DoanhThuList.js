import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Container from '@material-ui/core/Container';
import './style.css';
import axios from 'axios';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});
function createData(flightCode, flightName, departure, time, capital, totalPrice, totalTicket, totalPriceTicket) {
    return {
        flightCode,
        flightName,
        departure,
        time,
        capital,
        totalPrice,
        totalTicket,
        totalPriceTicket,
        flightDetail: [
            { classType: 'Phổ thông', quantityTicket: '11091700', totalTicketSale: '222', ticketPrice: 3, totalPriceDetail: 'dd', totalSale: 'hg' },
            { classType: 'Phổ thông đặc biệt', quantityTicket: '11091700', totalTicketSale: '222', ticketPrice: 3, totalPriceDetail: 'dd', totalSale: 'hg' },
            { classType: 'Thương gia', quantityTicket: '11091700', totalTicketSale: '222', ticketPrice: 3, totalPriceDetail: 'dd', totalSale: 'hg' },
            { classType: 'Hạng nhất', quantityTicket: '11091700', totalTicketSale: '222', ticketPrice: 3, totalPriceDetail: 'dd', totalSale: 'hg' },
        ],
    };
}


function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" style={{ textAlign: "center" }}>
                    {row.flightCode}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>{row.flightName}</TableCell>
                <TableCell style={{ textAlign: "center" }}>{row.departure}</TableCell>
                <TableCell style={{ textAlign: "center" }}>{row.time}</TableCell>
                <TableCell style={{ textAlign: "center" }}>{row.capital}</TableCell>
                <TableCell style={{ textAlign: "center" }}>{row.totalPrice}</TableCell>
                <TableCell style={{ textAlign: "center" }}>{row.totalTicket}</TableCell>
                <TableCell style={{ textAlign: "center" }}>{row.totalPriceTicket}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, color: 'red', backgroundColor: '#E8EAF6' }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Chi tiết chuyến bay
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ fontSize: '17px', textAlign: 'left', color: '#01579B' }}>
                                            Hạng ghế
                                        </TableCell>
                                        <TableCell style={{ fontSize: '17px', textAlign: 'center', color: '#01579B' }}>
                                            Số lượng vé
                                        </TableCell>
                                        <TableCell style={{ fontSize: '17px', textAlign: 'center', color: '#01579B' }}>
                                            Số lượng vé bán được
                                        </TableCell>
                                        <TableCell style={{ fontSize: '17px', textAlign: 'center', color: '#01579B' }}>
                                            Giá vé
                                        </TableCell>
                                        <TableCell style={{ fontSize: '17px', textAlign: 'center', color: '#01579B' }}>
                                            Tổng tiền
                                        </TableCell>
                                        <TableCell style={{ fontSize: '17px', textAlign: 'center', color: '#01579B' }}>
                                            Tổng tiền bán được
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.flightDetail.map((flightDetailRow) => (
                                        // key={flightDetailRow.classTypes}
                                        <TableRow>
                                            <TableCell component="th" scope="row" style={{ textAlign: 'left' }}>
                                                {flightDetailRow.classType}
                                            </TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>{flightDetailRow.quantityTicket}</TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>{flightDetailRow.totalTicketSale}</TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>{flightDetailRow.ticketPrice}</TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>{flightDetailRow.totalPriceDetail}</TableCell>
                                            <TableCell style={{ textAlign: 'center' }}>
                                                {/* {Math.round(flightDetailRow.amount * row.price * 100) / 100} */}
                                                {flightDetailRow.totalSale}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
Row.propTypes = {
    row: PropTypes.shape({
        flightCode: PropTypes.string.isRequired,
        flightName: PropTypes.string.isRequired,
        departure: PropTypes.string.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        time: PropTypes.string.isRequired,
        capital: PropTypes.number.isRequired,
        totalPrice: PropTypes.string.isRequired,
        totalTicket: PropTypes.number.isRequired,
        totalPriceTicket: PropTypes.string.isRequired,
    }).isRequired,
};
const rows = [
    createData('00011945040522SGNDAD', 'Từ tp Hồ Chí Minh đến Đà Nẵng', '2022-05-25', '19:45 - 20:30', 24, '95 triệu', 250, '25 triệu'),
    createData('00011945040522SGNDAD', 'Từ tp Hồ Chí Minh đến Đà Nẵng', '2022-05-25', '19:45 - 20:30', 24, '95 triệu', 250, '25 triệu'),
    createData('00011945040522SGNDAD', 'Từ tp Hồ Chí Minh đến Đà Nẵng', '2022-05-25', '19:45 - 20:30', 24, '95 triệu', 250, '25 triệu'),
    createData('00011945040522SGNDAD', 'Từ tp Hồ Chí Minh đến Đà Nẵng', '2022-05-25', '19:45 - 20:30', 24, '95 triệu', 250, '25 triệu'),
    createData('00011945040522SGNDAD', 'Từ tp Hồ Chí Minh đến Đà Nẵng', '2022-05-25', '19:45 - 20:30', 24, '95 triệu', 250, '25 triệu'),
    createData('00011945040522SGNDAD', 'Từ tp Hồ Chí Minh đến Đà Nẵng', '2022-05-25', '19:45 - 20:30', 24, '95 triệu', 250, '25 triệu'),
    createData('00011945040522SGNDAD', 'Từ tp Hồ Chí Minh đến Đà Nẵng', '2022-05-25', '19:45 - 20:30', 24, '95 triệu', 250, '25 triệu'),
    createData('00011945040522SGNDAD', 'Từ tp Hồ Chí Minh đến Đà Nẵng', '2022-05-25', '19:45 - 20:30', 24, '95 triệu', 250, '25 triệu'),
    createData('00011945040522SGNDAD', 'Từ tp Hồ Chí Minh đến Đà Nẵng', '2022-05-25', '19:45 - 20:30', 24, '95 triệu', 250, '25 triệu'),
    createData('00011945040522SGNDAD', 'Từ tp Hồ Chí Minh đến Đà Nẵng', '2022-05-25', '19:45 - 20:30', 24, '95 triệu', 250, '25 triệu'),
];
export default function CollapsibleTable() {

    const [list, setList] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(
                "https://flight-mana.herokuapp.com/api/customers/flights/airline/AL978AWBCDVJ",
                { headers: { "Content-Type": "application/json" } }
            );

            console.log(response.data.data);
            setList(response.data.data);
        }
        fetch();
    }, []);
    return (

        <TableContainer component={Paper} style={{ marginTop: '40px', }}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell style={{ textAlign: "center", color: '#1BA0E2', fontSize: '20px' }}>Mã chuyến bay</TableCell>
                        <TableCell style={{ textAlign: "center", color: '#1BA0E2', fontSize: '20px' }}>Tên chuyến bay</TableCell>
                        <TableCell style={{ textAlign: "center", color: '#1BA0E2', fontSize: '20px' }}>Ngày khởi hành</TableCell>
                        <TableCell style={{ textAlign: "center", color: '#1BA0E2', fontSize: '20px' }}>Thời gian</TableCell>
                        <TableCell style={{ textAlign: "center", color: '#1BA0E2', fontSize: '20px' }}>Vốn</TableCell>
                        <TableCell style={{ textAlign: "center", color: '#1BA0E2', fontSize: '20px' }}>Tổng tiền bán được</TableCell>
                        <TableCell style={{ textAlign: "center", color: '#1BA0E2', fontSize: '20px' }}>Tổng vé</TableCell>
                        <TableCell style={{ textAlign: "center", color: '#1BA0E2', fontSize: '20px' }}>Tổng vé bán được</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );

}

// export default DoanhThuList;