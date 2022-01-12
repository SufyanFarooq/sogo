import * as React from 'react';
import './Accodai.css'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <div className="container-fluid">
                <div className="container">


                    <div className="maindivone">
                        <div className="seconddiv">
                            <img src="S-01.png" alt="" width="80px" />
                        </div>
                        <h1 className="text-center mt-4">Frequently Asked Questions</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <img src="fap-01.png" alt="" width="90%" />
                        </div>

                        <div className="col-lg-7  Accdiv" style={{ marginTop: '2rem' }} >
                           
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{marginTop:'1rem'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    style={{  background: '#fdeaf1'}}
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 ,fontSize:'20px',color:'#f95192'}}>
                                        What is blockchain?</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{color:'#f95192',fontSize:'18px'}}>
                                        Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system.A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain. Each block in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to every participant’s ledger. The decentralized
                                        database managed by multiple participants is known as Distributed Ledger Technology.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{marginTop:'1rem'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    style={{  background: '#fdeaf1'}}
                                >
                                    <Typography sx={{width: '100%', flexShrink: 0 ,fontSize:'20px',color:'#f95192'}}>What is an exchange?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{color:'#f95192',fontSize:'18px'}}>
                                        Open, organized marketplace (such as a stock exchange) where buyers and sellers negotiate prices.
                                         Exchanges require an almost instant (real-time) bid and ask matching mechanism, settlement and clearing,
                                          and market-wide price communication and determination.is there a free token program? Yes, we have
                                           different upcoming Free programs via our partner's websites and on the bitcoin talk. Follow us on all 
                                           our social media platforms to stay tune.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{marginTop:'1rem'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    style={{  background: '#fdeaf1'}}
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0,fontSize:'20px',color:'#f95192' }}>How does the company ensure tokens are not worthless after token sale?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{color:'#f95192',fontSize:'18px'}}>
                                    We have taken accurate measures in that regard by;Carefully calculating the economics of the ecosystem and ensuring the model is sustainable.To enhance the token value, 
                                    we are bend on ensuring the circulating supply is always smaller. We are implementing only projects within the ecosystem which are very profitable and provides high income.
                                     We will provide enough marketing around the ecosystem, list the best exchanges, and provide enough liquidity on them. With the monthly reward, just holding SOGO is your future. Read the whitepaper for more.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{marginTop:'1rem'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    style={{  background: '#fdeaf1'}}
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0,fontSize:'20px',color:'#f95192' }}>What Wallet am I to use to hold my tokens?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{color:'#f95192',fontSize:'18px'}}>
                                    We recommend you use our official partner wallet TRUST WALLET. You can also use any BSC compatible wallet but you may be missing out on certain features 
                                    we will implement later. We also have plans to release our own proprietary wallet.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{marginTop:'1rem'}}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                    style={{  background: '#fdeaf1'}}
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 ,fontSize:'20px',color:'#f95192'}}>How many tokens shall be in circulating supply?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{color:'#f95192',fontSize:'18px'}}>
                                    The total supply is very limited “20million tokens”. The circulating supply is the total amount of token,
                                     holders own, Free Programs, partners own, team and founders own. We also have a buy-and-burn program.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
}