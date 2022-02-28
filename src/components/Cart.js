import React from 'react'

import soloBeat from '../assets/soloBeat.png'
import mac from '../assets/apple_mac.svg'

import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SHIPPING_RATE = 20;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(img, desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { img, desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow(soloBeat ,'Philips Hue 7W BR30 Connected Downlight Lamp', 998, 2),
  createRow(mac ,'Apple Macbook Pro', 998, 2),
];

const invoiceSubtotal = subtotal(rows);
const shippingTaxes = SHIPPING_RATE;
const invoiceTotal = shippingTaxes + invoiceSubtotal;
export default function Cart() {
  return (
    <div>
        <div className='md:flex flex font-poppins text-black md:bg-[#F6F7F8] bg-[#F6F7F8] md:p-3 p-3 md:justify-center justify-center md:space-x-4 md:text-lg text-lg md:font-medium font-medium'>
            <p>Cart</p>
        </div>
        <TableContainer component={Paper}>
            <Table sx={{ width: '100%' }} aria-label="spanning table">
                <TableHead>
                <TableRow>
                    <TableCell style={{"fontWeight":"600", "fontSize":"16px", "fontFamily":"poppins"}}>PRODUCT</TableCell>
                    <TableCell align="right" style={{"fontWeight":"600", "fontSize":"16px", "fontFamily":"poppins"}}>UNIT PRICE</TableCell>
                    <TableCell align="right" style={{"fontWeight":"600", "fontSize":"16px", "fontFamily":"poppins"}}>QTY</TableCell>
                    <TableCell align="right" style={{"fontWeight":"600", "fontSize":"16px", "fontFamily":"poppins"}}>PRICE</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.desc}>
                    <TableCell style={{"fontFamily":"poppins", "fontWeight":"500", "display":"flex", "alignItems":"center"}}><Avatar className='mr-3' src={row.img} /> {row.desc}</TableCell>
                    <TableCell align="right" style={{"fontFamily":"poppins", "fontWeight":"500"}}>$ {row.qty}</TableCell>
                    <TableCell align="right" style={{"fontFamily":"poppins", "fontWeight":"500"}}>{row.unit}</TableCell>
                    <TableCell align="right" style={{"fontFamily":"poppins", "fontWeight":"500"}}>$ {ccyFormat(row.price)}</TableCell>
                    </TableRow>
                ))}

                <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2} style={{"fontFamily":"poppins", "fontWeight":"600", "fontSize":"16px"}}>Subtotal</TableCell>
                    <TableCell align="right" style={{"fontFamily":"poppins", "fontWeight":"600", "fontSize":"16px"}}>$ {ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2} style={{"fontFamily":"poppins", "fontWeight":"600", "fontSize":"16px"}}>Shipping Fee</TableCell>
                    {/* <TableCell align="right">{`${(SHIPPING_RATE * 100).toFixed(0)} %`}</TableCell> */}
                    <TableCell align="right" style={{"fontFamily":"poppins", "fontWeight":"600", "fontSize":"16px"}}>$ {ccyFormat(shippingTaxes)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2} style={{"fontFamily":"poppins", "fontWeight":"600", "fontSize":"20px"}}>Total</TableCell>
                    <TableCell align="right" style={{"fontFamily":"poppins", "fontWeight":"600", "fontSize":"20px"}}>$ {ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

    </div>
  )
}
