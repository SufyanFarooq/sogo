import React, { useState, useEffect, useRef } from 'react'
import Web3 from "web3";
import './BuyHomeStyle.css'
// import {tokenContractOf} from '../../apis/api'
import { loadAccountAddress } from "../../apis/api"
import { abi, contract } from '../../utilies/constant';

import { ToastContainer, toast } from 'react-toastify';


function BuyHome() {
    let first = useRef();
    let myVal;
    const [account, setAccount] = useState();
    let [val, setVal] = useState();
    let [calamount, setcalamount] = useState();
    let [remainingBal, setRemainBal] = useState("");
    
    const enter1AmountCall = async (e) => {
        try {
            setVal(e.target.value);
            const name = e.target.name;
            const web3 = window.web3;
            myVal = e.target.value;
            let contractAd = new web3.eth.Contract(abi, contract);
            setVal(e.target.value);
            // console.log("withrawableDepositeAmount", accountAd, account);
            let mycalamount = await contractAd.methods.CalculateAmount(web3.utils.toWei(myVal)).call();
            setcalamount(web3.utils.fromWei(mycalamount));
          
            console.log("You Entered = ", val)

        } catch (error) {
            console.log("Error while checking locked account", error);
        }
    };
    const get = async () => {
        console.log('here12');
        let acc = await loadAccountAddress();
        setAccount(acc)
    }
    const depositeAmount = async () => {
        console.log("here")
        console.log("entered Val = ", val)
        console.log("Available Balance = ", remainingBal)
        if (val <= remainingBal) {
            try {
                const web3 = window.web3;
                let contractAd = new web3.eth.Contract(abi, contract);
                await contractAd.methods.swap()
                    .send({
                        value: web3.utils.toWei(val),
                        from: account
                    })
                toast.success("Transaction Confirmed");
            } catch (error) {
                toast.error("Oops! You Cancelled Transaction")
                console.log("Error while fetching acounts: ", error);
            }
        }
        else {
            toast.error("You Entered Amount Greater than your Balance ,Please Reacharge ")
        }
    }
    const getBalanceOfAccount = async () => {
        let acc = await loadAccountAddress()

        const web3 = window.web3;

        let RemainingTokens = await web3.eth
            .getBalance(acc);
        console.log("User's current Balance is ", RemainingTokens);
        let ActualRemainingTokens = await web3.utils.fromWei(RemainingTokens);
        console.log("Actual Remaining tokens = ", ActualRemainingTokens);
        setRemainBal(ActualRemainingTokens);
    }

    useEffect(() => {
        get();
        setInterval(() => {
            getBalanceOfAccount();
        }, 2500);
    }, []);
    return (
        <div className="container-fluid BuyHome">

            <div className="container mt-5 " >
                <div className="main ">
                    <h1 className="headertext text-center ">Buy Coin</h1>
                </div>
                <div class="card buy-card">
                    <div class="card-body">

                        <div className='balncediv'>
                            <h5 class="card-title center-text">Presale</h5>
                            <p className='balancep'>    <p className='balancediv'> Your Balance</p></p>
                        </div>
                        <div class="buyTokenshash"></div>
                        <div class="form-group">
                            <div className='blancedivBNB'>
                                <p className='BNB'>BNB    </p>
                                <p>{remainingBal}</p>
                            </div>

                            <input ref={first} type="text" name="first_input"
                                onChange={enter1AmountCall}
                                class="form-control card-form-control " placeholder="0.0" />
                        </div>

                        <div className="form-group ">
                            <label className="from-label  " className="blancedivBNB">SOGO</label>
                            <input disabled type="text" className="form-control card-form-control smt-input " placeholder={calamount} />
                        </div>

                        <div class="form-group text-center ">
                            <a
                                onClick={() => depositeAmount()}
                                role="button" class="btn btn-default sm-button buy-btn buy-card-btn hoverbtn" >	Buy SOGO
                                <img class="blue-btn-img" src="S-01.png" style={{ borderRadius: '170px 180px 180px 180px' }} />
                            </a>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div class="card buy-card">
                    <div class="card-body">
                        <div className="innerdiv">
                            <span>Token Name</span>
                            <span>SOGO</span>
                        </div>
                        <div className="innerdiv">
                            <span>Price</span>
                            <span>0.0001 BNB</span>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br />
        </div>
    )
}

export default BuyHome
