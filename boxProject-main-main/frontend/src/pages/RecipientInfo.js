import React, { useState } from 'react';
import './involved.css';
import ScrollToTopLink from './ScrollToTopLink';


const RecipientInfo = () => {
    return (

        <div >
            <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871' }}>Recipient Information</span>


            <div>
                <h2 className="form-list"> <a href="https://docs.google.com/document/d/1mKpH4iuz1cnDQ4NlCngjTQ17D6iBa4Br8Pgu6h6KC_E/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'black' }}>Click here to apply as a recipient and begin your application process</a></h2>
                <p className="content-body">Social service agencies in the rural areas of the Mississippi Delta identify worthy recipients of sponsors’ assistance. The recipients are individuals who want to work on ways to improve their lives. The Box Project connects sponsors with recipient families allowing the sponsor and recipient families to develop a relationship. The sponsor offers friendship and encouragement along with sending a box of basic- need items monthly. The recipient returns the friendship by writing letters of gratitude and sharing about their family. The Box Project remains available to help with questions or concerns that may arise in the relationship between sponsor and recipient families.
                </p>
                <h2 className="form-list"> <a href="https://boxproject.org/wp-content/uploads/2017/06/Checklist-AJ-1rev102113.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'black', display: 'inline-block', textAlign: 'center', fontSize: '22px' }}>Already approved? Click here for a item needs checklist to send to your sponsor</a></h2>


                <div>
                    <ScrollToTopLink to="/resources">
                        <span style={{ fontSize: '22px', display: 'block', textAlign: 'center', marginBottom: '50px', color: 'blue' }}>
                            Find available resoures near you
                        </span>
                    </ScrollToTopLink>
                </div>

            </div>


        </div>
    );
}

export default RecipientInfo;