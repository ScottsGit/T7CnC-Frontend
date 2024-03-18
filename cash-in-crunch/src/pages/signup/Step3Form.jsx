import React, { useState } from "react";
import { Box, Grid, Typography, Container, Card, CardActionArea, CardContent } from "@mui/material";

const Step3 = ({
    inputsObj,
    handleChange,
    handleNext,
    handlePrev,
    handleSubmit,
}) => {
    const [selectedCards, setSelectedCards] = useState([]);
    const cards = [
        {
            id: 1,
            title: 'TRACK NET WORTH',
            paragraph: 'Understand my current financial position.',
            img: ''
        },
        {
            id: 2,
            title: 'ASSIGN GOALS',
            paragraph: 'Set savings goals & track my budget.',
            img: ''
        },
        {
            id: 3,
            title: 'ADD FAMILY MEMBERS',
            paragraph: 'Involve family to participate in shared accounts.',
            img: ''
        },
        {
            id: 4,
            title: 'TRACK NET WORTH',
            paragraph: 'Understand my current financial position.',
            img: ''
        },
        {
            id: 5,
            title: 'ASSIGN GOALS',
            paragraph: 'Set savings goals & track my budget.',
            img: ''
        },
        {
            id: 6,
            title: 'ADD FAMILY MEMBERS',
            paragraph: 'Involve family to participate in shared accounts.',
            img: ''
        }
    ];

    const toggleSelect = (card) => {
        setSelectedCards((prevSelected) => {
            if (prevSelected.find(item => item.id === card.id)) {
                console.log(selectedCards)
                return prevSelected.filter((item) => item.id !== card.id);
            } else {
                console.log(selectedCards)
                return [...prevSelected, card];
            }
        });
    };

    return (
        <Box>

            <Box sx={{}}>
                <Typography variant="h5" align="center" color="primary" sx={{ paddingY: '20px', fontWeight: "bold", fontSize: "30px" }}>
                    What are your financial goals?
                </Typography>
                <Typography sx={{ paddingY: '20px', fontSize: "16px" }} paragraph>
                    Telling us about your goals helps us understand what's important to you. Select all that apply.
                </Typography>
            </Box>





            <Grid container spacing={2} sx={{ position: 'absolute', left: '-50%', transform: 'translateX(50%)', zIndex: 0, justifyContent: 'center', paddingX: '25%' }}>
                {cards.map((card) => (
                    <Grid item xs={12} sm={6} md={4} key={card.id} sx={{ height: '200px', width: '100%' }}>
                        <CardActionArea sx={{ height: '100%' }}>
                            <Card
                                onClick={() => toggleSelect(card)}
                                sx={{
                                    backgroundColor: selectedCards.find(obj => obj.id === card.id) ? 'lightgrey' : 'white',
                                    height: '100%',
                                    width: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1,
                                    overflow: 'visible',
                                }}>

                                <CardContent sx={{ height: '100%' }}>
                                    <Typography variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.paragraph}
                                    </Typography>
                                </CardContent>

                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Step3;
