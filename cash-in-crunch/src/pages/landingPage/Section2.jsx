import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DefaultImg from '../../assets/images/section2-default.png';
import { Section2GridLeft } from '../../components/Section2GridLeft';
import { Section2GridRight } from '../../components/Section2GridRight';
import Box from '@mui/material/Box';
import { TestimCard } from '../../components/TestimCard';
import RatesImage from '../../assets/images/rates.svg'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Section2 = () => {

    return (
        <Container sx={{ mt: { xs: 5, md: 10, lg: 15 }, color: "#32004C" }}>
            <Container maxWidth="md" sx={{ mb: 10, }}>
                <Typography variant="h5" align="center" sx={{
                    padding: '20px', // Add some padding
                    paddingBottom: '0px',
                    fontWeight: "bold",
                    fontSize: "30px",
                }} gutterBottom>
                    WHO WE ARE
                </Typography>
                <Typography variant="subtitle1" align="center" sx={{
                    padding: '20px', // Add some padding
                    fontSize: "18px",
                }} paragraph>
                    At Money Magnet, we use AI to strategically plan and personailze the financial needs for both individuals and families with no charge.
                </Typography>
            </Container>

            <Section2GridLeft imgUrl={DefaultImg}
                title="LINK ACCOUNTS SAFELY & EASLIY"
                content="We automatcially sync to all of your accounts. Don't worry, your data is protected with bank-level security."
                sx={{ mb: 10, }} />

            <Section2GridRight imgUrl={DefaultImg}
                title="PERSONALIZED ORGANIZATION"
                content="With AI, you can organize your transactions & categories by setting personal rules & goals."
                sx={{ mb: 10, }} />

            <Section2GridLeft imgUrl={DefaultImg}
                title="COLLABORATE WITH LOVED ONES"
                content="Invite your family or partner to participate. Each person has a separate login & can access accounts in a shared space."
                sx={{ mb: 10, }} />

            <Section2GridRight imgUrl={DefaultImg}
                title="VISUALIZE YOUR BUDGET WITH DATA"
                content="Our charts & diagrams show where your money goes & translates your spending habits effortlessly."
                sx={{ mb: 10, }} />

            <Section2GridLeft imgUrl={DefaultImg}
                title="REACH YOUR FINANCIAL GOALS"
                content="We make it possible for you to assign goals to your accounts & offer advice when you need it."
                sx={{ mb: 10, }} />

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <TestimCard
                    name="Natalie"
                    content="At Money Magnet, we use AI to strategically plan and personailze the financial needs for both individuals and families with no charge."
                />
                <TestimCard
                    name="Ivan"
                    content="I am a visual learner so having diagrams on my dashboard helped me understand where I need to budget."
                />
                <TestimCard
                    name="Devon"
                    content="The design is intuitive and simple. I love that I can personalize my transactions into categories that fit my needs."
                />
                <TestimCard
                    name="Sandy"
                    content="Different than any budgeting app I've used before. Syncing to all of my accounts is super painless & straightforward."
                />

            </Grid>

            <Box sx={{m: 2, mt: 10, mb: 10}}>
                <img
                    src={RatesImage}
                    style={{ width: "100%", objectFit: "contain" }}
                />
            </Box>

        </Container>
    )
}
