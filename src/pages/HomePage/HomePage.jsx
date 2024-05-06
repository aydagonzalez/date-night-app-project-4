import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
// import './HomePage.css'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SearchOptions from "../../components/SearchOptions/SearchOptions";
import ConcertPageOptions from "../../components/SearchOptions/ConcertPageOptions";



export default function HomePage({ getEvents }) {
    const [error, setError] = useState('');
    // const [events, setEvents] = useState([]);

    // async function getEvents() {
    //     const allEventsIndex = await eventsAPI.indexEvents()
    //     console.log("ALL Events:", allEventsIndex)
    //     // notesRef.current = [(newNote.map(note => note.text))];
    //     setEvents(allEventsIndex)
    // }
    const images = [
        {
            label: "Dinner at a Rooftop Restaurant", summary: "Enjoy a romantic dinner with a view at the top-rated rooftop restaurants in your city.",
            imgPath: "../dinner.png"
        },
        {
            label: "Movie Night Out", summary: "Catch the latest blockbuster or a romantic classic at your local cinema.",
            imgPath: "../movies.png"
        },
        {
            label: "Beach Bonfire Evening", summary: "Relax by a warm fire, listen to the waves, and enjoy a peaceful evening at the beach.",
            imgPath: "../bonfire.png"
        },
        {
            label: "Go to a Concert", summary: "Experience the thrill of live music at a concert, feel the beat and the energy of the crowd. ",
            imgPath: "../concert.png"
        },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
        }, 4000);

        return () => {
            clearInterval(timer)
        };
    }, []);


    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = 4;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <>
            <section className="HomePage-section">


                {/* <main className="MainHomePage" > */}
                <div className="yelp-container-home-page">
                    <Link to="/yelp" ><h1>Yelp Search Engine</h1></Link>
                    <div>
                        <SearchOptions />
                    </div>
                </div>

                {/* </main> */}

                <div> 
                    <Box sx={{ maxWidth: 1000, flexGrow: 1 }} className="carousel-box">
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                                bgcolor: 'background.default',
                            }}
                        >
                            <Typography className="carousel-labels"
                                style={{ fontSize: "2.5rem" }}
                            >{images[activeStep].label}</Typography>
                        </Paper>

                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 0 ? (
                                    <>
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 700,
                                                display: 'block',
                                                maxWidth: 1000,
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                        <Typography
                                            sx={{
                                                // position: 'absolute',
                                                // top: 230,
                                                // bottom: 530,
                                                // bottom: 10,,
                                                // textAlign: "center",
                                                // left: 20,
                                                color: 'white',
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                                padding: '10px',
                                                borderRadius: '4px',
                                            }}
                                        >
                                            {step.summary}
                                        </Typography>
                                    </>

                                ) : null}
                            </div>
                        ))}

                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>

                </div>
                <div className="concert-container-home-page">
                    <Link to="/events/concerts"><h1>Ticket Master Search</h1></Link>
                    <div className="yelp-search-options">
                        <ConcertPageOptions />
                    </div>
                </div>
            </section>
        </>
    )
}