import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

import { Box, Grid, Typography, Container, Card, CardActionArea, CardContent, Stack } from "@mui/material";
import { renderButton } from "../../utils/DisplayComponent";
import { MultiFormContext } from ".";

import add from '../../assets/images/add.png';
import assign from '../../assets/images/assign.png';
import observe from '../../assets/images/observe.png';
import plan from '../../assets/images/plan.png';
import stress from '../../assets/images/stress.png';
import track from '../../assets/images/track.png';





const Step3Form = ({
    inputsObj,
    handleChange,
    handlePrev,
    handleSubmit,
    handleGoalChange,
}) => {

    const [selectedCards, setSelectedCards] = useState([]);


    useEffect(() => {
        // Update child state if parent state changes
        setSelectedCards(inputsObj.data.goals);
    }, [inputsObj.data]);

    const cards = [
        {
            id: 1,
            tittle: 'TRACK NET WORTH',
            paragraph: 'Understand my current financial position.',
            img: track
        },
        {
            id: 2,
            tittle: 'ASSIGN GOALS',
            paragraph: 'Set savings goals & track my budget.',
            img: assign
        },
        {
            id: 3,
            tittle: 'ADD FAMILY MEMBERS',
            paragraph: 'Involve family to participate in shared accounts.',
            img: add
        },
        {
            id: 4,
            tittle: 'OBSERVE INVESTMENTS',
            paragraph: 'Monitor & track my investments.',
            img: observe
        },
        {
            id: 5,
            tittle: 'PLAN LONG-TERM',
            paragraph: 'Prepare finances for my home, education, etc.',
            img: plan
        },
        {
            id: 6,
            tittle: 'STRESS LESS',
            paragraph: 'Feel more in control with budgeting tips & tools.',
            img: stress
        }
    ];

    const toggleSelect = (card) => {
        setSelectedCards((prevSelected) => {
            let updatedGoals = [];
            if (prevSelected.find(item => item.id === card.id)) {
                updatedGoals = prevSelected.filter((item) => item.id !== card.id);
            } else {
                updatedGoals = [...prevSelected, card];
            }
            console.log("Updated goals:", updatedGoals);
            handleGoalChange({ goals: updatedGoals });
            return updatedGoals;
        });
    };

    return (
        <React.Fragment>

            <Box align="center" sx={{ display:'flex', flexFlow:'column', maxWidth:'100%'}}>
                <Typography variant="h5"  color="primary" sx={{ paddingY: '20px', fontWeight: "bold", fontSize: "30px" }}>
                    What are your financial goals?
                </Typography>
                <Typography sx={{
                    pb: '20px',
                    fontSize: "16px",
                }} paragraph>
                    Telling us about your goals helps us understand what's important to you. Select all that apply.
                </Typography>
            </Box>

            <Stack direction="column">


                <Grid container spacing={3} sx={{ position: 'absolute', left: '-50%', transform: 'translateX(50%)', zIndex: 0, justifyContent: 'center', paddingX: '20%' }}>
                    {cards.map((card) => (
                        <Grid item xs={12} sm={6} md={4} key={card.id} sx={{ height: '180px', width: '100%' }}>
                            <CardActionArea sx={{ height: '100%' }}>
                                <Card
                                    onClick={() => toggleSelect(card)}
                                    sx={{
                                        backgroundColor: selectedCards.find(item => item.id === card.id) ? 'lightgrey' : 'white',
                                        height: '100%',
                                        borderRadius: '20px',
                                    }}>

                                    <CardContent sx={{ height: '100%' }}>
                                        <Typography variant='caption' align="center">
                                            <img src={card.img} alt={card.tittle} style={{ height: '25%' }} />
                                        </Typography>
                                        <Typography variant='h6' align="center" color="primary" sx={{ height: '40%', fontWeight: "bold", fontSize: "16px", mb:0.5 }}>
                                            {card.tittle}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px" }}>
                                            {card.paragraph}
                                        </Typography>
                                    </CardContent>

                                </Card>
                            </CardActionArea>
                        </Grid>
                    ))}

                    <Typography align='left' sx={{ mt: 2, ml: 3, flexGrow: 1 }}>
                        *Your goals will be added to your profile. You can make changes when you enter your account.
                    </Typography>

                    <Stack direction="row" spacing={2} width="100%" sx={{ position: 'relative', mt: 2, pl: 3 }}>
                        {renderButton({ label: "Complete", onClick: handleSubmit, sx: { borderRadius: '999px', display: 'flex' } })}
                        {renderButton({
                            variant: "outlined",
                            label: "Back", onClick: handlePrev,
                            sx: {
                                color: '#32004C',
                                borderRadius: '999px',
                                display: 'flex',
                                bgcolor: '#ffffff',
                                '&:focus': {
                                    bgcolor: '#ffffff',
                                },
                                display: 'flex'
                            }
                        })}
                    </Stack>
                </Grid>
            </Stack>
        </React.Fragment>
    );
};

Step3Form.propTypes = {
    inputsObj: PropTypes.shape({
        data: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
    handlePrev: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Step3Form;
