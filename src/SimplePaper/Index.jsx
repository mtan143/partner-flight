import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './Index.css'

export default function SimplePaper() {
    return (
        <Box className='paper'
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 300,
                    height: 400,
                },
            }}
        >
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />
        </Box>
    );
}