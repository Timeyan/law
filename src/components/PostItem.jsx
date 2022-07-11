import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import MyButton from "./UI/button/MyButton";
//import {useHistory} from 'react-router-dom';

const PostItem = (props) => {
    //const router = useHistory()

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.post.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default PostItem;
