import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Index.css'
import { Link } from 'react-router-dom';

export default function BasicButton() {
    return (
        <>
            <Stack className='Button' spacing={2} direction="row">
                <Button variant="contained" style={{ backgroundColor: '#FF6F00' }}>Add</Button>
                <Link to='/list' className='link' style={{ textDecoration: 'none' }} >
                    <Button variant="contained" style={{ backgroundColor: '#1BA0E2' }}>
                        Back
                    </Button>
                </Link>
            </Stack>
        </>
    );
}