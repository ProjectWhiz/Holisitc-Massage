import React from 'react';
import HeroNavbar from './HeroNavbar';
import '../styles.css';

function FAQ() {
    return (
        <div className="page-container">
            <HeroNavbar />
            <section className="faq_page"> 
                <h1 className="faq_title"> Frequently Asked Questions </h1>       
                <div>
                    <h2> What should I expect during my first massage session? </h2>
                    <p>
                        Majority of the session will be focused on areas of concern even through a full body session. 
                        after session has been completed, we will go over a brief overview of what was worked on 
                        and the best way to address and areas of pain with a massage plan.
                    </p>
                </div>
                <div>
                    <h2> Do I need to undress completely? </h2>
                    <p>
                        Before you session starts you will be informed to dress down to your comfortability.  
                        whether fully clothed or unclothed. If you plan to stay fully clothed, 
                        we ask you wear comfortable loose fitted clothing like sports attire.
                    </p>
                </div>
                <div>
                    <h2> Can I request a specific type of massage? </h2>
                    <p>
                        There are over 180 modalities so I integrate a variety of modalities during your massage session depending on what areas the client 
                        is asking to be addressed. example of modalities (Cryotherapy, Trigger Point Therapy, Myofascial Therapy).
                    </p>
                </div>
                <div>
                    <h2> What is your cancellation policy? </h2>
                    <p>
                        If you cancel your appointment with less than 24-hour notice (No Refund). 
                        If you cancel your appointment with more than a 24-hour notice (Full Refund). 
                        You do have the option to reschedule with no penalty fee.
                    </p>
                </div>
                <div>
                    <h2> Can massage therapy help with chronic pain or injuries? </h2>
                    <p>
                        Yes. Many clients find relief from chronic pain, tension, and injury recovery through 
                        regular massage. Your therapist can tailor sessions to focus on specific issues.
                    </p>
                </div>
                <div>
                    <h2> What if I feel uncomfortable during the massage? </h2>
                    <p>
                        Your comfort is our top priority. If you feel discomfort at any time, please speak up. 
                        You can request adjustments in pressure, technique, or even stop the session if needed.
                    </p>
                </div>
                <div>
                    <h2> How often should I get massages? </h2>
                    <p>
                        The frequency of massages depends on your individual needs and goals. 
                        Some clients benefit from weekly sessions, while others may prefer monthly visits. 
                        After your initial session, we can discuss a personalized plan that works for you.
                    </p>
                </div>
                <div>
                    <h2> When should I avoid massage? </h2>
                    <p>
                        You should avoid massage if you have any contagious illnesses, open wounds, or severe skin conditions. 
                        Additionally, if you are experiencing acute pain or injury, it's best to consult with a healthcare professional before getting a massage.
                    </p>
                </div>
                <div>
                    <h2> What payment methods do you accept? </h2>
                    <p>
                        We accept various payment methods, including cash, credit/debit cards, and mobile payment options. 
                        Please inquire about specific payment methods when booking your appointment.
                    </p>
                </div>
                <p className="gray-text">
                    If you have any questions that are not answered here, please feel free to reach out and ask me directly.
                </p>
            </section>
        </div>
    );
}

export default FAQ;