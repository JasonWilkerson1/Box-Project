import React from 'react';
import './LogoList.css';

import l1 from './PartnerLogos/AT&TLogo.png';
import l2 from './PartnerLogos/DealthHealthLogo.png';
import l3 from './PartnerLogos/DeltaGraceLogo.png';
import l4 from './PartnerLogos/DiaperBankLogo.jpeg';
import l5 from './PartnerLogos/EverFiLogo.png';
import l6 from './PartnerLogos/EveryoneOn.png';
import l7 from './PartnerLogos/FoodMap.png';
import l8 from './PartnerLogos/FreeTaxesLogo.png';
import l9 from './PartnerLogos/MarksLogo.png';
import l10 from './PartnerLogos/MSFinancialAidLogo.png';
import l11 from './PartnerLogos/NMSLegalServicesLogo.png';
import l12 from './PartnerLogos/SouthernBancorpLogo.png';
import l13 from './PartnerLogos/StGabrielLogo.png';
import l15 from './PartnerLogos/UnitedWayLogo.jpeg';
import l16 from './PartnerLogos/l16.png'

const LogoList = () => {

    return (
        <div>
            <div>
                <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871' }}>
                    Recipient Family Resources
                </span>
                <span style={{ fontSize: '22px', color: 'black', display: 'block', textAlign: 'center', marginTop: '10px', marginBottom: '40px' }}>
                    Provided below are additional help resources. Clicking on a title or picture will redirect to its subsequent website.
                </span>
            </div>
            <div>
                <ol style={{ listStyleType: 'none' }} >
                    <li className='resource-container'>
                        <p className='item-name'><a href='https://public.tableau.com/app/profile/jamiko.deleveaux/viz/FoodPantrySitesinNorthwestMississippi/Dashboard1'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            Community Foundation of Northwest Mississippi: Food Pantry Sites in Northwest Mississippi
                        </a>
                        </p>
                        <p className='item-desc'>Community Foundation of Northwest Mississippi along with community partners are highlighting the various food pantry,
                            soup kitchen, and children food program sites in Northwest Mississippi with an
                            {' '}<a href='https://public.tableau.com/app/profile/jamiko.deleveaux/viz/FoodPantrySitesinNorthwestMississippi/Dashboard1'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                interactive map
                            </a>
                            .
                        </p>
                        <a href='https://public.tableau.com/app/profile/jamiko.deleveaux/viz/FoodPantrySitesinNorthwestMississippi/Dashboard1'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l7} style={{ width: '600px', height: 'auto', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://www.myfreetaxes.com/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            MyFreeTaxes
                        </a>
                        </p>
                        <p className='item-desc'>MyFreeTaxes helps people file their federal and state taxes for free.  It’s brought to you by United Way.
                        </p>
                        <a href='https://www.myfreetaxes.com/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-block' }}
                        >
                            <img src={l8} style={{ width: '200px', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://southernpartners.org/vita/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            Free Tax Preparation (VITA) - Southern Bancorp Community Partners
                        </a>
                        </p>
                        <p className='item-desc'>Southern Bancorp and Southern Bancorp Community Partners, in partnership with the IRS, offer free tax filing services each year during tax season through IRS-Sponsored Volunteer Income Tax Assistance (VITA).
                        </p>
                        <a href='https://southernpartners.org/vita/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l12} style={{ width: '250px', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://healthystartepic.org/wp-content/uploads/2017/07/Tougaloo-CollegeDelta-HealthPartnersRural-Healthy-Start.pdf'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            Tougaloo College/Delta Health Partners: Healthy Start Initiative
                        </a>
                        </p>
                        <p className='item-desc'>Mission: To reduce infant mortality, increasing positive birth outcomes, and improving the overall health status and quality of life for teens, women, males, children and families in the Mississippi Delta
                        </p>
                        <a href='https://healthystartepic.org/wp-content/uploads/2017/07/Tougaloo-CollegeDelta-HealthPartnersRural-Healthy-Start.pdf'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l2} style={{ width: '250px', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://www.facebook.com/MississippiDiaperneed'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            The Diaper Bank of the Delta
                        </a>
                        </p>
                        <p className='item-desc'>The Diaper Bank of the Delta (DBD)’s mission is to lighten the burden of parenting for families with children from birth to age 5 living in the Mississippi Delta by providing emergency baby supplies; assist women who are living in poverty with feminine hygiene products; to provide access to community resources through direct services and partnering community agencies; to raise community awareness about diaper need, period poverty, and childhood poverty; and to advocate for policy reform addressing diaper need, period poverty, and childhood poverty.

                        </p>
                        <a href='https://www.facebook.com/MississippiDiaperneed'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l4} style={{ width: '250px', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://saintgabrielmc.org/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            St. Gabriel Mercy Center
                        </a>
                        </p>
                        <p className='item-desc'>St. Gabriel Mercy Center is dedicated to working with organizations, programs and schools in the community with a focus of equipping and developing self-supporting, productive and successful individuals for our world.  St. Gabriel Mercy Center is a faith-based, non-profit organization. Located in Bolivar County in the community of Mound Bayou, Mississippi, serving the communities of Mound Bayou, Shelby, Winstonville, Renova, Merigold, Duncan and Cleveland, all of which are clustered along Highway 61 to the north and south of St. Gabriel Mercy Center.

                        </p>
                        <a href='https://saintgabrielmc.org/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l13} style={{ width: '250px', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://www.marksproject.org/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            Career Empowerment Center
                        </a>
                        </p>
                        <p className='item-desc'>Training opportunities will be offered to Quitman County, MS and its surrounding area residents.  Both Coahoma and Northwest Community Colleges will provide training at no cost.  No diploma or GED required.  <b>Contact Judy Bland jbland@cableone.net for more information.</b> Visit
                            {' '}<a href='https://www.marksproject.org/'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Marks Project
                            </a>
                            {' '}for more opportunities and next available ACT Boot Camp session.

                        </p>
                        <a href='https://www.marksproject.org/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l9} style={{ width: '250px', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='http://nmrls.com/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            North Mississippi Rural Legal Services
                        </a>
                        </p>
                        <p className='item-desc'>
                            NMRLS currently services its 253,540 eligible low income population (based on 2011 American Community Survey 3-Year estimate and other sources) in the North Mississippi 39-county area with an administrative office and four (4) branch offices located in Oxford, West Point, Clarksdale and Greenville.
                        </p>
                        <a href='http://nmrls.com/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l11} style={{ width: '250px', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='http://deltagrace.org/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            Delta Grace
                        </a>
                        </p>
                        <p className='item-desc'>Delta Grace's goal is to provide safe, sanitary, and secure housing for the elderly, disabled, and others who do not have the means to have adequate living conditions in the Delta</p>
                        <a href='http://deltagrace.org/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l3} style={{ width: '250px', display: 'block', backgroundColor: 'black', padding: '10px 10px' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://www.unitedway.org/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            United Way
                        </a>
                        </p>
                        <p className='item-desc'>United Way brings people together to build strong, equitable communities where everyone can thrive. As one of the world's largest privately funded charities, we serve 95% of U.S. communities and 37 countries and territories -- making life better for 48 million people every year. Through United Way, communities tackle tough challenges and work with private, public, and nonprofit partners to boost education, economic mobility, and health resources.
                        </p>
                        <a href='https://www.unitedway.org/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l15} style={{ width: '300px', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://atwork.everfi.net/ms-treas-529/login'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            Mississippi State Treasurer Partners with Everfi
                        </a>

                        </p>
                        <p className='item-desc'>Mississippi State Treasurer offers two modules through a partnership with EverFi. Click through these online tools to learn more about
                            {' '}<a href='https://atwork.everfi.net/ms-treas-529/login'
                                target="_blank"
                                rel="noopener noreferrer"
                            >529 plans </a>{' '}
                            and
                            {' '}<a href='https://atwork.everfi.net/ms-treas/curriculum/show?enrollment_id=10964223&part=1'
                                target="_blank"
                                rel="noopener noreferrer"
                            >financial literacy</a>!{' '}
                        </p>

                        <a href='https://everfi.com/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l5} style={{ width: '250px', display: 'block', border: '3px solid black', padding: '10px 10px' }} />
                        </a>

                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://www.msfinancialaid.org/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            Mississippi Office of Student Financial Aid
                        </a>
                        </p>
                        <p className='item-desc'>The state of Mississippi provides about $40 million each year to help students go to college.  The state offers three undergraduate grant programs:  HELP, which awards full tuition for students with financial need; MTAG, which awards $500 per year to freshmen and sophomores and $1,000 per year to juniors and seniors; and MESG, which awards $2,500 per year to high-achieving students with a 29 or higher ACT and 3.5 or higher GPA.  All three grant programs require students to enroll full-time each term.
                        </p>
                        <a href='https://www.msfinancialaid.org/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l10} style={{ width: '300px', display: 'block', border: '3px solid #7498ae', padding: '1px 10px 10px' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://www.everyoneon.org/find-offers/'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            EveryoneOn
                        </a>
                        </p>
                        <p className='item-desc'>Find Low-Cost Internet Service and Computers in Your Area.

                        </p>
                        <a href='https://www.everyoneon.org/find-offers/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l6} style={{ width: '300px', display: 'block', border: '3px solid #154c79', padding: '5px 5px' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='http://att.com/access'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            AT&T
                        </a>
                        </p>
                        <p className='item-desc'>AT&T is offering low-cost wireline home Internet service to qualifying households:
                            {' '}<a href='http://att.com/access'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Access from AT&T
                            </a>

                        </p>
                        <a href='http://att.com/access'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l1} style={{ width: '300px', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'><a href='https://www.fcc.gov/acp'
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white' }}>
                            Affordable Connectivity Program: Helping Households Connect
                        </a>
                        </p>
                        <p className='item-desc'>The Affordable Connectivity Program is an FCC benefit program that helps ensure that households can afford the broadband they need for work, school, healthcare and more.

                            The benefit provides a discount of up to $30 per month toward internet service for eligible households and up to $75 per month for households on qualifying Tribal lands.

                            Eligible households can also receive a one-time discount of up to $100 to purchase a laptop, desktop computer, or tablet from participating providers if they contribute more than $10 and less than $50 toward the purchase price.

                            The Affordable Connectivity Program is limited to one monthly service discount and one device discount per household.
                            {' '}<a href='https://www.getinternet.gov/apply?ln=RW5nbGlzaA%3D%3D'
                                target="_blank"
                                rel="noopener noreferrer"
                            ><b>APPLY HERE</b></a>
                        </p>
                        <a href='https://www.fcc.gov/acp'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={l16} style={{ width: '200px', display: 'block' }} />
                        </a>
                    </li>

                    <li className='resource-container'>
                        <p className='item-name'>
                            Additional Links For Your Reference!
                        </p>
                        <ol className='item-desc' style={{ listStyleType: 'none' }}>
                            <li>
                                <a href='https://moneyzine.com/tax/30-tax-facts-for-students/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    30 Things College Students Should Know About Tax | Moneyzine
                                </a>

                            </li>
                            <li>
                                <a href='https://www.facebook.com/ClarksdaleCareStation/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Clarksdale Care Station
                                </a>

                            </li>
                            <li>
                                <a href='https://bccoatransit.org/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Bolivar County Council On Aging, Inc.
                                </a>
                                {' '}and their{' '}
                                <a href='https://www.facebook.com/p/Bolivar-County-Council-on-Aging-Inc-100057414671257/?paipv=0&eav=AfYlIS_TK1lv1FMTIqK4ms9OJ60ybPQFQW9IU88T0DekSrRo2TWBmRZ5QSA9wDJkYxM&_rdr'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href='https://bccaainc.org/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Bolivar County Community Action Agency
                                </a>


                            </li>
                            <li>
                                <a href='https://www.grammymuseumms.org/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GRAMMY Museum
                                </a>

                            </li>
                            <li>
                                <a href='https://www.mississippifarmtoschool.org/'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Mississippi Farm to School NetworkMississippi Farm to School Network
                                </a>

                            </li>
                        </ol>

                    </li>






                </ol>
            </div>

        </div >

    )
}

export default LogoList;