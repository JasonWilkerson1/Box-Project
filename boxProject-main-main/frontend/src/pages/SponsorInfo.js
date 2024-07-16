import React, { useState } from 'react';
import './involved.css';
import HiddenRulesChart from './SIIMGS/hiddenruleschart.png';



const SponsorInfo = () => {

    const [dropdowns, setDropdowns] = useState({});

    const toggleDropdown = (personId) => {
        setDropdowns(prevState => ({
            ...prevState,
            [personId]: !prevState[personId]
        }));
    };


    return (

        <div>

            <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871' }}>Sponsor Information</span>

            <span style={{ fontSize: '22px', color: 'black', display: 'block', textAlign: 'center', marginTop: '15px' }}>
                Provided below is useful information to help your thrive in your role as a sponsor
            </span>
            <span style={{ fontSize: '22px', color: 'black', display: 'block', textAlign: 'center', marginTop: '15px' }}>
                <a href="https://boxproject.org/wp-content/uploads/2017/06/Recipient-Agreement-rev-032016-watermark.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'black' }}>Click here to read Box Project Recipient Membership Agreement
                </a>

            </span>
            <span style={{ fontSize: '22px', color: 'black', display: 'block', textAlign: 'center', marginTop: '15px' }}>
            <a href="https://boxproject.org/wp-content/uploads/2017/06/Family-Match-Sponsor-Inf-rev03152016-newlogo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'black' }}>Sponsor-Family Match Information
                </a>

            </span>

            <div style={{ border: '2px solid blue', borderRadius: '8px', margin: '75px 75px' }}>
                <h2 className="form-list" style={{ color: 'white', backgroundColor: '#230871', marginLeft: '50px', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>Shipping Tips</h2>
                <ul className="content-body" style={{ color: 'black' }}>
                    <li>
                        Use Flat rate shipping boxes from USPS
                    </li>
                    <li>
                        FEDEX, UPS are additional shipping options

                    </li>
                    <li>
                        If possible, pay extra for insurance tracking and signature delivery, especially if you are shipping more than two boxes at a time

                    </li>
                    <li>
                        Keep a list of the items and value of the items you are shipping
                    </li>
                    <li>
                        Write a separate letter to your family notifying them when they may expect a box to be delivered
                    </li>
                    <li>
                        Order online items and have them shipped direct
                    </li>
                </ul>
            </div>

            <div style={{ border: '2px solid blue', borderRadius: '8px', margin: '75px 75px' }}>
                <h2 className="form-list" style={{ color: 'white', backgroundColor: '#230871', marginLeft: '50px', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>Box Suggestions</h2>
                <span style={{ fontSize: '20px', display: 'block', textAlign: 'center' }}>The following are ideas from sponsors, recipients, and other agencies for items to send to your family.<br></br>Click on the title of each suggestion to view or close its contents.</span>
                <ol className='content-body' style={{ color: 'black' }}>
                    <li>
                        <div>
                            <span className="si-dropdown-header-text" onClick={() => toggleDropdown('COVID-19')}>COVID-19</span>
                            {dropdowns['COVID-19'] && (
                                <div className="si-dropdown-content">
                                    <p>soap, hand sanitizer, masks, gloves, toilet paper, baby wipes, paper towels, cleaning products, antibacterial wipes, antibacterial spray, bleach, laundry detergent, long lasting staples like rice, beans, pasta, canned vegetables, bottled water and shelf-stable milk, thermometer</p>
                                </div>
                            )}
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="si-dropdown-header-text" onClick={() => toggleDropdown('General Supplies')}>General Supplies</span>
                            {dropdowns['General Supplies'] && (
                                <div className="si-dropdown-content">
                                    <ul style={{ paddingBottom: '15px' }}>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Cleaning Box')}>Cleaning Box</span>
                                                {dropdowns['Cleaning Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>rubber gloves; paper towels; window, floor, counter, bathroom, wood furniture cleaners, etc.; Clorox or other brand (Anti-bacterial wipes); dish detergent, dish cloths</p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Toiletries Box')}>Toiletries Box</span>
                                                {dropdowns['Toiletries Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>toilet and tissue paper; soap; shampoo; hair brushes; barrettes; rubber bands; tooth paste; tooth brushes; wash clothes; towels; shower curtain

                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Bedroom Box')}>Bedroom Box</span>
                                                {dropdowns['Bedroom Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>alarm clock; sheets; pillows; blankets; lamp

                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('First Aid Box')}>First Aid Box</span>
                                                {dropdowns['First Aid Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>Isopropyl Alcohol, Hydrogen Peroxide, Antiseptic cream, anti-itch cream, Bandages/Band-aids, tape, Cotton balls, Antibacterial soap, Ace bandage; scissors; tweezers; instant ice packs; thermometer

                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Power Outage Box')}>Power Outage Box</span>
                                                {dropdowns['Power Outage Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>flashlights; lantern; cards; alarm clock with battery back up; batteries

                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('GrandmasRemedy')}>Grandma's Remedy Box</span>
                                                {dropdowns['GrandmasRemedy'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>whatever your grandma cured the flu with: chicken soup; ginger ale; Jell-o; tea; saltines.

                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>

                    <li>
                        <div>
                            <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Special Occasions')}>Special Occasions</span>
                            {dropdowns['Special Occasions'] && (
                                <div className="si-dropdown-content">
                                    <ul style={{ paddingBottom: '15px' }}>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Back-to-School Box')}>Back-to-School Box</span>
                                                {dropdowns['Back-to-School Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>This box can be sent twice a year, August for the back-to school and Jan for replenishing. It may contain: Elementary School: #2 pencils; crayons; ball point pens; ruler; eraser; pencil sharpener; scissors; glue stick; 4-6 spiral notebooks, wide rule; 4-6 pocket folders; 3 ring binder/notebook paper; back pack. Jr./Sr. High School: #2 pencils; colored pencils/markers/gel pens; ball point pens; ruler; erasers; compass/protractor; 6-8 spiral notebooks, wide rule; 8-10 pocket folders; 3 ring binder/notebook paper; back pack; paperback dictionary/thesaurus.</p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Party Boxes')}>Party Boxes</span>
                                                {dropdowns['Party Boxes'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>A birthday party, Valentine’s Day, Mardi Gras, St. Patrick’s Day, Easter, 4th of July, Back-to-School (this can be made fun), Thanksgiving,Christmas, Kwanzaa, Hanukkah or for any special holiday the family celebrates. Be creative, any excuse for a party is a good one!
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Birthday Box')}>Birthday Box</span>
                                                {dropdowns['Birthday Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>invitations, paper party goods-table cloth, napkins, plates, cups, decorations – crepe paper streamers, banner, balloons, party hats favors – something small that each guest can take home, cake pan, cake mix/frosting, cake decorations, candles, games – Pin the Tail on the Donkey or similar games from store, wrapping paper
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Mother’s Day Box')}>Mother’s Day Box</span>
                                                {dropdowns['Mother’s Day Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>items to pamper mom: magazine subscription; bubble bath, tea/tea cup just for her; flowers; a wish for a day to sleep in  and for quite time
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Wedding Box')}>Wedding Box</span>
                                                {dropdowns['Wedding Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>disposable cameras for the honeymoon; picture frame; candles; gift certificates.
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Winter Holiday Box')}>Winter Holiday Box</span>
                                                {dropdowns['Winter Holiday Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>mugs for each member of family; packets of hot chocolate; ornaments for each family member (could be hand made); a little artificial tree with decorations; a few gifts (preferably one new present per family member), wrapping paper, non-perishable items to prepare holiday meal, gift card to purchase turkey/ham or other traditional holiday perishable food items
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('New Year’s Eve')}>New Year’s Eve</span>
                                                {dropdowns['New Year’s Eve'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>a note pad to make resolutions on; noise makers; a list of things you have been grateful for yourself and ask them what they are grateful for or what memories the past year held for them; snack foods for waiting on the ball to drop</p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>

                    <li>
                        <div>
                            <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Spring/Summer Boxes')}>Spring/Summer Boxes</span>
                            {dropdowns['Spring/Summer Boxes'] && (
                                <div className="si-dropdown-content">
                                    <ul style={{ paddingBottom: '15px' }}>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('General Spring/Summer Box')}>General Spring/Summer Box</span>
                                                {dropdowns['General Spring/Summer Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>Bug Spray; fans for several rooms in the house, ice cube trays; Popsicle trays (so they can make their own); pitcher with Kool-aid and a big spoon to stir; plastic cups</p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Garden Box')}>Garden Box</span>
                                                {dropdowns['Garden Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>vegetable/flower seeds, fertilizer, gardening gloves hand tools (shovel, fork, trowel, clippers), watering can, bug spray, sunscreen, straw hat or visor, hose, nozzle, gardening book, pretty vase.
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Outdoor Fun Box')}>Outdoor Fun Box</span>
                                                {dropdowns['Outdoor Fun Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>bubbles; blow-up pool; jump ropes; water toys; water bottles/juice containers; sunscreen; flip-flops/sandals; Kool-Aid; bug spray
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Summer First Aid ')}>Summer First Aid </span>
                                                {dropdowns['Summer First Aid '] && (
                                                    <div className="si-dropdown-content">
                                                        <p>Bug Spray; Sunscreen; aloe or sunburn gel; bandages; Gatorade, Pedialyte for dehydrated children; Calamine lotion or other anti-itch cream.
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Picnic Time Box')}>Picnic Time Box</span>
                                                {dropdowns['Picnic Time Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>plastic (reusable) plates; utensils; table cloth/ blanket for sitting on; food containers; picnic basket; non-perishable food items

                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Rainy Day Box')}>Rainy Day Box</span>
                                                {dropdowns['Rainy Day Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>cards: crazy eights, old maid, standard deck, etc.; book of card games; puzzles; paints; board games; books; magazines; umbrellas; rain coats; snacks
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>

                    <li>
                        <div>
                            <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Fall Boxes')}>Fall Boxes</span>
                            {dropdowns['Fall Boxes'] && (
                                <div className="si-dropdown-content">
                                    <ul style={{ paddingBottom: '15px' }}>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Exploring Outside Box')}>Exploring Outside Box</span>
                                                {dropdowns['Exploring Outside Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>toy binoculars; books about bugs, birds or leaves; how to create a collage; flashlight for nighttime exploring & flashlight tag; batteries for flashlights</p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Halloween Box')}>Halloween Box</span>
                                                {dropdowns['Halloween Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>costumes; fake Jack O’Lantern; decorations; craft kits; candy; make-up; book of Halloween party ideas or games</p>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>

                    <li>
                        <div>
                            <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Holiday Box Suggestions')}>Holiday Box Suggestions</span>
                            {dropdowns['Holiday Box Suggestions'] && (
                                <div className="si-dropdown-content">
                                    <ul>
                                        <li>
                                            Kitchen items: recipes and ingredients for your family’s favorite holiday meal; paper plates, cups, napkins; utensils for family gatherings; holiday decorations; cookware; crock pot; kitchen towels; Child-friendly snacks; small (preferably new) gift for each family member; holiday stocking with small gifts
                                        </li>
                                        <li>
                                            To capture the moment: picture frames, album, family games, puzzles, card games, holiday basket (fruit or nonperishable snacks); family movies; Calendar
                                        </li>
                                        <li>
                                            Exercise equipment: Jump ropes, Music, jackets, shoes/boots/slippers
                                        </li>
                                        <li>
                                            Warm clothing: scarves/hats, gloves/mittens, ear muffs, socks, thermal underwear, sweaters, flannel pajamas/bath robe, winter coats
                                        </li>
                                        <li>Bedding: blankets, flannel sheets, lap throw blankets</li>
                                        <li>Toiletries: lotions, new toothbrush and toothpaste, hand sanitizer, tissues and other items to help reduce sickness</li>
                                        <li>Other: paper, pens and pencils for student returning to school, books for each family member, magazine subscriptions, stationary, envelopes and stamps to write to sponsor</li>
                                        <li><b>PLEASE DO NOT SEND CANDLES OR PERISHABLE ITEMS</b></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>

                    <li>
                        <div>
                            <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Other Ideas')}>Other Ideas</span>
                            {dropdowns['Other Ideas'] && (
                                <div className="si-dropdown-content">
                                    <ul style={{ paddingBottom: '15px' }}>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Kid’s Dress UP Box')}>Kid’s Dress UP Box</span>
                                                {dropdowns['Kid’s Dress UP Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>hats, shirts, purses, pretend make-up; fake jewelry</p>
                                                    </div>
                                                )}
                                            </div>

                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Coupon Box')}>Coupon Box</span>
                                                {dropdowns['Coupon Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>clipped coupons from you, friends and family. Get the people you know to clip and save the coupons they don’t use and send them to your family.

                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Story Time Box')}>Story Time Box</span>
                                                {dropdowns['Story Time Box'] && (
                                                    <div className="si-dropdown-content">
                                                        <p>start a story and send it to your family to add to and continue to send it back and forth until and ending comes about, make a copy and place it in a binder and send it to your family. You can even send props with your story…postcards, pictures, actual things that take place in the story, etc.
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Miscellaneous')}>Miscellaneous</span>
                            {dropdowns['Miscellaneous'] && (
                                <div className="si-dropdown-content">
                                    <ul>
                                        <li>
                                            Magazine subscriptions; articles you find interesting & think your family will too; craft kits; recipes; books (for adults and children/new or used); smoke detectors (batteries)/carbon monoxide detectors; kitchen supplies; hair accessories; inexpensive toys; coloring books/crayons or markers; sketch pads; Stationary for children (encourage them to write to you with it).
                                        </li>
                                        <li>
                                            Many stores regularly clear out their stock of goods as newer items arrive, so items can be picked up on sale.
                                        </li>
                                        <li>
                                            Buy one get one sales are good for this purpose. Another good source are the “Everything is $1” type of stores
                                        </li>
                                        <li>
                                            Shop online and have shipment sent directly to family taking advantage of free shipping offers.
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </li>

                </ol>
            </div>

            <div style={{ border: '2px solid blue', borderRadius: '8px', margin: '75px 75px' }}>
                <h2 className="form-list" style={{ color: 'white', backgroundColor: '#230871', marginLeft: '50px', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>Hidden Rule Among Classes</h2>
                <span style={{ fontSize: '20px', display: 'block', textAlign: 'center', paddingLeft: '35px', paddingRight: '35px' }}>Many of the attitudes that those in poverty bring with them are an integral part of their culture and belief systems. Middle-class solutions should not necessarily be imposed when other, more workable, solutions might be found. An understanding of the culture and values of poverty will lessen the anger and frustration that may others may have when dealing with those in poverty. The following “hidden rules” are the unspoken cues and habits of a group that may be helpful to you. To learn more, read “A Framework for Understanding Poverty,” by Ruby K. Payne, Ph.D.
                </span>
                <img src={HiddenRulesChart} style={{ width: '650px', height: 'auto', marginTop: '20px', marginBottom: '50px' }} />
            </div>


        </div>
    );
}

export default SponsorInfo;