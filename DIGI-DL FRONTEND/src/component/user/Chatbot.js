import React, { useState, useRef, useEffect } from "react";
import image from "../common/chatbot.jpeg";
import { Container } from "reactstrap";
import NavBar from "./NavBar";


function Chatbot() {
    const humanMessage = useRef();
    const botmessage = useRef();
    const input = useRef();
    const [time, setTime] = useState("");
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const hours = date.getHours();
            const seconds = date.getSeconds();
            const day = date.getDay();
            const month = date.getMonth();
            const year = date.getFullYear();

            const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            const months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];

            setTime(`${hours}:${seconds}`);
            setDateTime(`${days[day]}, ${months[month]} ${year}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const checkStatus = (e) => {
        let isActive = true;
        if (dateTime === "Thursday, feb 13 2024") {
            isActive = false;
        }
        const status = document.querySelector(".status");

        if (isActive === true) {
            status.innerHTML = "Active";
            status.style.color = "neon";
        } else {
            status.innerHTML = "Not Active";
            status.style.color = "red";
        }
    };

    const handleInput = () => {
        const botMessage = document.querySelector("#message1");
        const userMessage = document.querySelector("#message2");
        const inputRef = input.current;
        const getHumanMessage = humanMessage.current;
        const getBotMessage = botmessage.current;

        let badwords = ["bad|stupid|useless|bitch|crazy|nonsense"];
        let words = new RegExp(badwords);
        if (words.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "Please do not use bad words";
                inputRef.value = "";
            }, 2000);
        }

        let internationalLicense = [
            "international driving license|IDP|driving license abroad",
          ];
          let words25 = new RegExp(internationalLicense);
          if (words25.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
              getBotMessage.innerText =
                "An International Driving Permit (IDP) allows you to drive in foreign countries. To obtain an IDP, visit the RTO with your original driving license, passport, visa, photographs, and IDP application form. The IDP is valid for a year.";
              inputRef.value = "";
            }, 2000);
          }

let validityPermanent = [
    "validity of permanent driving license|validity of DL|DL validity|validity of driving license",
  ];
  let words16 = new RegExp(validityPermanent);
  if (words16.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Typing...";
    setTimeout(() => {
      getBotMessage.innerText =
        "The validity of a permanent driving license in India is typically 20 years from the date of issuance or until the driver turns 50 years old, whichever comes earlier.";
      inputRef.value = "";
    }, 2000);
  }
  
  let validityLearner = [
    "validity of learner's license|validity of LL|LL validity|validity of learning license",
  ];
  let words17 = new RegExp(validityLearner);
  if (words17.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Typing...";
    setTimeout(() => {
      getBotMessage.innerText =
        "The validity of a learner's license in India is generally 6 months. During this period, the learner is required to practice driving under the supervision of a licensed driver.";
      inputRef.value = "";
    }, 2000);
  }
  
  let procedurePermanent = [
    "procedure for permanent driving license|applying for DL|DL application",
  ];
  let words18 = new RegExp(procedurePermanent);
  if (words18.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Typing...";
    setTimeout(() => {
      getBotMessage.innerText =
        "To apply for a permanent driving license in India, you need to first obtain a learner's license, practice driving, and then pass a driving test. After completing the learner's license period, you can apply for a permanent license by submitting required documents and passing the driving test.";
      inputRef.value = "";
    }, 2000);
  }
  // Define regular expressions and corresponding responses for road safety and regulations queries
let speedLimits = ["speed limits in India|maximum speed on roads|speed on road"];
let words26 = new RegExp(speedLimits);
if (words26.test(document.querySelector("#input").value)) {
  getBotMessage.innerText = "Typing...";
  setTimeout(() => {
    getBotMessage.innerText =
      "Speed limits in India vary based on the type of road and vehicle. For example, within city limits, the speed limit is often around 50-60 km/h, while on highways it can be 80-100 km/h. Always follow posted speed limit signs.";
    inputRef.value = "";
  }, 2000);
}

let seatBelts = ["wearing seat belts|seat belt regulations|seat belt information"];
let words27 = new RegExp(seatBelts);
if (words27.test(document.querySelector("#input").value)) {
  getBotMessage.innerText = "Typing...";
  setTimeout(() => {
    getBotMessage.innerText =
      "Wearing seat belts is mandatory for all passengers in a vehicle. It ensures safety in case of an accident and helps prevent serious injuries. Always fasten your seat belt when inside a moving vehicle.";
    inputRef.value = "";
  }, 2000);
}

let drunkDriving = ["drunk driving laws in India|DUI penalties|penalty rules"];
let words28 = new RegExp(drunkDriving);
if (words28.test(document.querySelector("#input").value)) {
  getBotMessage.innerText = "Typing...";
  setTimeout(() => {
    getBotMessage.innerText =
      "Driving under the influence (DUI) of alcohol or drugs is a serious offense. In India, strict penalties, including fines, license suspension, and imprisonment, apply to those caught driving while intoxicated.";
    inputRef.value = "";
  }, 2000);
}

let trafficSignals = ["traffic signals|road signals meaning|traffic rules"];
let words29 = new RegExp(trafficSignals);
if (words29.test(document.querySelector("#input").value)) {
  getBotMessage.innerText = "Typing...";
  setTimeout(() => {
    getBotMessage.innerText =
      "Traffic signals are vital for road safety. Red means stop, green means go, and yellow warns to slow down. Follow these signals, yield when required, and always use indicators to signal your intentions.";
    inputRef.value = "";
  }, 2000);
}

let helmetSafety = ["helmet laws in India|motorcycle helmet rules|helmet rules"];
let words30 = new RegExp(helmetSafety);
if (words30.test(document.querySelector("#input").value)) {
  getBotMessage.innerText = "Typing...";
  setTimeout(() => {
    getBotMessage.innerText =
      "Wearing helmets is mandatory for both riders and pillion passengers on two-wheelers in many states. Helmets provide essential head protection and reduce the risk of severe injuries in accidents.";
    inputRef.value = "";
  }, 2000);
}

  
  let documentsRequired = [
    "documents required for driving license|DL documents|LL documents |documents",
  ];
  let words20 = new RegExp(documentsRequired);
  if (words20.test(document.querySelector("#input").value)) {
    getBotMessage.innerText = "Typing...";
    setTimeout(() => {
      getBotMessage.innerText =
        "The documents required for a driving license in India include proof of identity, proof of residence, age proof, passport-sized photographs, medical certificate (for certain cases), and the learner's license (for permanent license application). Make sure to carry original documents and their photocopies.";
      inputRef.value = "";
    }, 2000);
  }
  

        
        let welcome = [
            "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
        ];
        let words2 = new RegExp(welcome);
        if (words2.test(document.querySelector("#input").value)) {
            const status = document.querySelector(".status");

            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "Hello what can i do for you? .";
                status.innerText = "Active";
                status.style.color = "green";
                inputRef.value = "";
            }, 2000);
        }
        let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye"];
        let words3 = new RegExp(bye);
        if (words3.test(document.querySelector("#input").value)) {
            const status = document.querySelector(".status");
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "Bye, have a nice day";
                inputRef.value = "";
            }, 2000);
            setTimeout(() => {
                status.innerText = "Not active";
                status.style.color = "red";
            }, 5000);
        }
        let thanks = [
            "Thanks|thanks|thank you|thank you very much|Thank you very much",
        ];
        let words4 = new RegExp(thanks);
        if (words4.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "You are welcome";
                inputRef.value = "";
            }, 2000);
        }
        let nameAsk = [
            "What's your name|what's your name|What is your name|what is your name",
        ];
        let words8 = new RegExp(nameAsk);
        if (words8.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "My name is Bot";
                inputRef.value = "";
            }, 2000);
        }

        let owner = [
            "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
        ];
        let words9 = new RegExp(owner);
        if (words9.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "The owner of this bot is DIGI-DL";
                inputRef.value = "";
            }, 2000);
        }

        let owner2 = [
            "Who's DIGI-DL|who's DIGI-DL|Who is DIGI-DL|who is DIGI-DL",
        ];
        let words10 = new RegExp(owner2);
        if (words10.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText =
                    "DIGI-DL is a programmer based on ReactJS and NodeJS he is the owner of this Website";
                inputRef.value = "";
            }, 2000);
        }

        let ageAsk = [
            "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
        ];
        let words11 = new RegExp(ageAsk);
        if (words11.test(document.querySelector("#input").value)) {
            getBotMessage.innerText = "Typing...";
            setTimeout(() => {
                getBotMessage.innerText = "I am 18 year old";
                inputRef.value = "";
            }, 2000);
        }
        getHumanMessage.innerText = inputRef.value;
    };

    return (
        <section class="header text-center">
            <div class=" text-black">
                <Container>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: "100vh",
                        }}
                        onLoad={checkStatus}
                    >
                        <div
                            style={{
                                width: "100%",
                                maxWidth: "500px",
                                padding: "30px",
                                background: "#ffffff",
                                borderRadius: "20px",
                                boxShadow: "0 4px 4px rgba(253, 253, 253, 0.4)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ width: "60px", height: "60px" }}>
                                    <img
                                        src={image}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </div>
                                <div style={{ marginLeft: "10px" }}>
                                    <div
                                        style={{
                                            fontWeight: "500",
                                            fontSize: "1em",
                                            backgroundColor: "#ffffff",
                                            border: "2px solid black",
                                            borderRadius: "5px",
                                            height: "30px",
                                            width: "70px",
                                            backgroundSize: "10px 10px",
                                        }}
                                    >
                                        ChatBot
                                    </div>
                                    <div className="status" style={{ color: "green" }}>
                                        Active
                                    </div>
                                </div>
                            </div>
                            <div style={{ margin: "30px 0 0" }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <div
                                        className="bot-message"
                                        id="message1"
                                        ref={botmessage}
                                        style={{
                                            width: "100%",
                                            padding: "15px",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            background: "#ffffff",
                                            fontStyle: "1.1em",
                                            borderRadius: "10px",
                                            margin: "0 10px 0",
                                        }}
                                    ></div>
                                    <div
                                        className="human-message"
                                        id="message2"
                                        ref={humanMessage}
                                        style={{
                                            width: "100%",
                                            padding: "15px",
                                            textAlign: "center",
                                            fontWeight: "bold",
                                            background: "#ffffff",
                                            color: "#000000",
                                            fontStyle: "1.3em",
                                            borderRadius: "10px",
                                            position: "relative",
                                            top: "120px",
                                            marginBottom: "20px",
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div style={{ margin: "120px 0 0" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "325px", height: "58px" }}>
                                        <input
                                            type="text"
                                            id="input"
                                            placeholder="Enter your message"
                                            ref={input}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                fontWeight: "bold",
                                                paddingLeft: "36px",
                                                outline: "none",
                                                border: "none",
                                                background: "#ffffff",
                                                boxSizing: "border-box",
                                                borderRadius: "5px",
                                            }}
                                        />
                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
                                        <button
                                            onClick={handleInput}
                                            style={{
                                                width: "80px",
                                                height: "40px",
                                                border: "none",
                                                outline: "none",
                                                borderRadius: "5px",
                                                background: "#0f036d",
                                                color: "#fff",
                                                fontWeight: "600",
                                                cursor: "pointer",
                                                fontSize: "1.1em",
                                            }}
                                        >
                                            <i
                                                className="fas fa-paper-plane"
                                                style={{ marginLeft: "5px" }}
                                            ></i>
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}

export default Chatbot;