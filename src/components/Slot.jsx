import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Slot(props) {
    const { symbol } = props;
    return (
        <Card sx={{ width: 275 }} className='slot'>
            <CardContent>
                <Typography variant="h5" component="div">
                    {symbol}
                </Typography>
            </CardContent>
        </Card>
    );
}