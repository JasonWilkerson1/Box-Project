import React, { useState } from 'react';
import './involved.css';

import ImpactIMG1 from './ImpactIMGS/ImpactIMG1.png';
import ImpactIMG3 from './ImpactIMGS/ImpactIMG3.png';

import ImpactVID1 from './ImpactIMGS/ImpactVID1.mp4';
import ImpactVID2 from './ImpactIMGS/ImpactVID2.mp4';

import lf1 from './HistoryIMGS/kids_field.jpg';
import lf2 from './HistoryIMGS/kids_rural.jpg';
import lf3 from './HistoryIMGS/laflemme.jpg';
import lf4 from './HistoryIMGS/together.jpg';
import lf5 from './ImpactIMGS/ImpactIMG2.jpg';
import lf6 from './ImpactIMGS/ImpactIMG4.jpg';
import lf7 from './ImpactIMGS/ImpactIMG5.jpg';

import jf1 from './ImpactIMGS/ImpactIMGJ1.JPG';
import jf2 from './ImpactIMGS/ImpactIMGJ2.JPG';
import jf3 from './ImpactIMGS/ImpactIMGJ3.JPG';
import jf4 from './ImpactIMGS/ImpactIMGJ4.JPG';

import dsu1 from './ImpactIMGS/ImpactIMGDSU1.png';
import dsu2 from './ImpactIMGS/ImpactIMGDSU2.png';
import dsu3 from './ImpactIMGS/ImpactIMGDSU3.png';
import dsu4 from './ImpactIMGS/ImpactIMGDSU4.png';
import dsu5 from './ImpactIMGS/ImpactIMGDSU5.png';
import dsu6 from './ImpactIMGS/ImpactIMGDSU6.png';
import dsu7 from './ImpactIMGS/ImpactIMGDSU7.png';
import dsu8 from './ImpactIMGS/ImpactIMGDSU8.png';
import dsu9 from './ImpactIMGS/ImpactIMGDSU9.png';
import dsu10 from './ImpactIMGS/ImpactIMGDSU10.png';
import dsu11 from './ImpactIMGS/ImpactIMGDSU11.png';
import dsu12 from './ImpactIMGS/ImpactIMGDSU12.png';
import dsu13 from './ImpactIMGS/ImpactIMGDSU13.png';
import dsu14 from './ImpactIMGS/ImpactIMGDSU14.png';

import blogpost1 from './ImpactIMGS/ImpactIMGB1.png';
import blogpost2 from './ImpactIMGS/ImpactIMGB2.png';
import blogpost3 from './ImpactIMGS/ImpactIMGB3.png';
import blogpost4 from './ImpactIMGS/ImpactIMGB4.png';
import blogpost5 from './ImpactIMGS/ImpactIMGB5.png';




const Impact = () => {

  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (personId) => {
    setDropdowns(prevState => ({
      ...prevState,
      [personId]: !prevState[personId]
    }));
  };

  return (
    <div>

      <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871' }}>Our Impact</span>

      <span style={{ fontSize: '22px', color: 'black', display: 'block', textAlign: 'center', marginTop: '15px' }}>
        Learn about our impact in the community over the years. Click on the title of each story to view or close its contents.
      </span>

      <div style={{ border: '2px solid blue', borderRadius: '8px', margin: '75px 75px' }}>
        <h2 className="form-list" style={{ color: 'white', backgroundColor: '#230871', marginLeft: '50px', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>1966: Ann McGurk with Armie Lee Walls</h2>
        <ol className='content-body' style={{ color: 'black' }}>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('PictureOI1')}>Picture</span>
              {dropdowns['PictureOI1'] && (
                <div className="oi-dropdown-content">
                  <img src={ImpactIMG1} style={{ width: '750px', marginTop: '25px', marginBottom: '25px' }} alt="1966: Ann McGurk with Armie Lee Walls" />
                </div>
              )}
            </div>
          </li>
        </ol>
      </div>

      <div style={{ border: '2px solid blue', borderRadius: '8px', margin: '75px 75px' }}>
        <h2 className="form-list" style={{ color: 'white', backgroundColor: '#230871', marginLeft: '50px', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>Success Stories</h2>
        <ol className='content-body' style={{ color: 'black' }}>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('AnonOI1')}>Video: Recipient Success Story #1 (Anonymous)</span>
              {dropdowns['AnonOI1'] && (
                <div >
                  <video className="oi-dropdown-content" style={{ paddingBottom: '15px' }} width="738" height="415" controls>
                    <source src={ImpactVID1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('GenSOI')}>Video: Generational Success Story</span>
              {dropdowns['GenSOI'] && (
                <div >
                  <video className="oi-dropdown-content" style={{ paddingBottom: '15px' }} width="738" height="415" controls>
                    <source src={ImpactVID2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('AnonOI2')}>Recipient Success Story #2 (Anonymous)</span>
              {dropdowns['AnonOI2'] && (
                <div className="oi-dropdown-content">
                  <p style={{ textAlign: 'left' }}>
                    The individual asked for their identity to remain anonymous.<br></br>

                    <br></br>This Box Project Recipient learned about the Box Project through a group of nuns who were placed in her hometown in rural Mississippi. It was the “Sisters of the Holy Name” and one Sister in particular that would change her life forever. As a 26-year-old, divorced single mother of three with two young girls and a young boy, she could really use the extra help promised by a Box Project sponsor. The young mother of three says she was discouraged and depressed with the Sisters and the Box Project changed her life by matching her with a family located all the way in Canada. In fact, the sponsor’s reason for choosing her recipient family specifically was because of the similarities between their families–the sponsor had two girls and a boy around the same age.

                    <br></br><br></br>In just a short period of time, the families became extremely close, corresponding through letters. The boxes sent by her sponsor included material needs such as food or cleaning items as well as supplies for the kids. However, this individual notes that it is not merely financial assistance that the Box Project gave her–it was companionship that really made the difference on both hers and her children’s future lives. She describes her experience: “Things were hard, and it was a huge help with material needs but the letters of encouragement…you know…having a friend…someone to talk to who understood what was going on and actually cared.”<br></br>

                    <br></br>Her family received boxes from the sponsor for 10 years. At this point in the recipient’s life, she had found work, her kids were graduating and moving on, and she just didn’t need as much support as she did before. Before their official Box Project relationship ended, her sponsor helped set up a college scholarship fund for her kids, which would help ensure their continued success. This recipient dedicates her ability to “get back on her feet” and her children’s success to the opportunities provided by her sponsor and the Box Project.

                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('RSOI3')}>Recipient Success Story #3</span>
              {dropdowns['RSOI3'] && (
                <div className="oi-dropdown-content">
                  <p style={{ textAlign: 'left' }}>
                    Mike was raised by his grandmother along with seven other boys in the family. For over 20 years, his family had Box Project sponsors who cared. After a visit to Mike’s family home in the Mississippi Delta, his sponsors realized that the conditions of the family’s rental home were inadequate for living. They returned home and made an appeal to local churches to build a new home for this family. Over several weeks, work crews traveled to rural Mississippi and built them a brand new home. Mike worked alongside the work crews every. single. day. After the death of his grandmother, Mike is now responsible for the home. Today, he co-owns his own Barber Shop in his hometown.
                  </p>
                  <img src={ImpactIMG3} style={{ width: '500px', marginTop: '25px', marginBottom: '25px' }} alt="mike barber recipient" />
                </div>
              )}
            </div>
          </li>
        </ol>
      </div>

      <div style={{ border: '2px solid blue', borderRadius: '8px', margin: '75px 75px' }}>
        <h2 className="form-list" style={{ color: 'white', backgroundColor: '#230871', marginLeft: '50px', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>Sponsor Quotes and Testimonials</h2>
        <ol className='content-body' style={{ color: 'black' }}>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('STOI1')}>Sponsor Testimonial #1
              </span>
              {dropdowns['STOI1'] && (
                <div className="oi-dropdown-content">
                  <p style={{ textAlign: 'left' }}>
                    This Box Project Sponsor from California who has been a sponsor for 30+ years asks to remain anonymous.

                    <br></br><br></br>“Blondine Davis and I have remained in monthly contact over all the years since we were matched up by The Box Project in 1985. Her health has declined recently, and she is now on at-home hospice care. It has been a great privilege to participate in Blondine’s life through the years and to help her family, as sensitively as I could, to meet the challenges they faced. Initially this was through literal monthly boxes. When her children and grandchildren were young, I regularly sent clothes, including warm coats and pajamas every winter. School supplies and toothbrushes/toothpaste and other toiletries frequently filled up corners. Occasionally Blondine would request specific items and I would add them to my list. As time passed and the children and grandchildren grew up, my support shifted to fewer boxes and more monetary support, especially after a fire destroyed her home about fifteen years ago. In order to help her meet the mortgage on the replacement unit, I committed to a small monthly contribution. I continue to send additional items as needed. And all through the years, I have sent books.

                    <br></br><br></br>My active participation in The Box Project will end after Blondine’s death. I have set up a small monthly donation to the Community Foundation of Northwest Mississippi for The Box Project in honor of Blondine Davis.”

                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('STOI2')}>Sponsor Testimonial #2
              </span>
              {dropdowns['STOI2'] && (
                <div className="oi-dropdown-content">
                  <p style={{ textAlign: 'left' }}>
                    Anonymous Sponsor from Illinois since 1980

                    <br></br><br></br>“The first family we were first involved with in 1980 had two daughters a bit younger than my girls so we sent clothing, toys and items for young girls. When their mom was pregnant we sent maternity clothes. We shared letters and photos. I can now see those grown up daughters on Facebook, and I send their mom a Christmas card yearly. After that family, we sponsored several single older women. Now, I am friends with a woman in Greenville who is a year younger than I am and we keep in constant contact. Both she and I do sewing projects, so I send her patterns, fabric and sewing notions. We have visited our friend in Mississippi several times since 2006.”
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('STOI3')}>Sponsor Testimonial #3
              </span>
              {dropdowns['STOI3'] && (
                <div className="oi-dropdown-content">
                  <p style={{ textAlign: 'left' }}>
                    Carole and Dave Chicoine from California

                    <br></br><br></br>“We have been long term members of the Box Project. We pay our annual dues and have been members of the Box Project [...] for many many years. Our long-term family was Edith Lacy, who was raising two great grandchildren as her most recent endeavor. We had previously helped her with other family members for many years. She passed away last year, but we still continue to send things to the two great grandchildren through one of her adult children living in Tchula, Mississippi.”

                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('STOI4')}>Sponsor Testimonial #4
              </span>
              {dropdowns['STOI4'] && (
                <div className="oi-dropdown-content">
                  <p style={{ textAlign: 'left' }}>
                    “If the Box Project hadn’t been a part of our lives these past thirty years, we could have missed out on a very important opportunity to look beyond the ‘box’ of poverty and race and find friendship and life lessons in that ‘box’. Thank you, Box Project!” Sue and Jon

                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('STOI5')}>Sponsor Testimonial #5
              </span>
              {dropdowns['STOI5'] && (
                <div className="oi-dropdown-content">
                  <p style={{ textAlign: 'left' }}>
                    “I have not missed sending a box every month for over 20 years and I have not missed receiving a note or call back every month for 20 years as well. As much as I send, and I am noted for getting nearly everything at great sale prices so I can afford more, I get back so much more. It is the best money I spend each month. We have never met, but she has certainly become my friend.” Barbara

                  </p>
                </div>
              )}
            </div>
          </li>
        </ol>
      </div>
      <div style={{ border: '2px solid blue', borderRadius: '8px', margin: '75px 75px' }}>
        <h2 className="form-list" style={{ color: 'white', backgroundColor: '#230871', marginLeft: '50px', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>La Flemme Family</h2>
        <ol className='content-body' style={{ color: 'black' }}>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('FSOI1')}>Ms. LaFlamme 1968 Sponsor Story</span>
              {dropdowns['FSOI1'] && (
                <div className="oi-dropdown-content">
                  <p style={{ textAlign: 'left' }}>
                    Ms. La Flamme was a Box Project Sponsor in the 1960’s for a large family headed by Annie Catherine Wade of Sunflower, MS. LaFlamme remained an active supporter of the Box Project and even made a trip to visit Annie Catherine and the rest of her recipient’s family in Sunflower in 1968. Her family has since shared film photos that LaFlamme took on her trip that tell a unique Box Project story–one that captures the underlying significance of the creation of the Box Project in the 1960s, a time in which Civil Rights activists and race relations in the South were at the forefront of American culture. Through the Box Project, blacks and whites came together in companionship and helped one another. More so, as displayed in the film, it highlights the living conditions of rural Mississippi and the historic, generational poverty among black families that the Box Project has been working hard to break.
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('LFOI3')}>Photo Gallery</span>
              {dropdowns['LFOI3'] && (
                <div className="oi-dropdown-content">
                  <div style={{ display: 'flex' }}>
                    <img src={lf1} style={{ width: '375px', marginTop: '25px', marginBottom: '25px' }} alt="kids standing together" />
                    <img src={lf2} style={{ width: '375px', marginTop: '25px', marginBottom: '25px' }} alt="kids standing together in a field" />
                  </div>
                  <div style={{ display: 'flex' }}>
                    <img src={lf3} style={{ width: '375px', marginTop: '25px', marginBottom: '25px' }} alt="laflemme and wade stand together" />
                    <img src={lf4} style={{ width: '375px', marginTop: '25px', marginBottom: '25px' }} alt="black and white kids standing together" />

                  </div>
                  <div style={{ display: 'flex' }}>
                    <img src={lf5} style={{ width: '375px', marginTop: '25px', marginBottom: '25px' }} alt="laflemme and wade stand together" />
                    <img src={lf6} style={{ width: '375px', marginTop: '25px', marginBottom: '25px' }} alt="black and white kids standing together" />

                  </div>
                  <div style={{ display: 'flex' }}>
                    <img src={lf7} style={{ width: '375px', marginTop: '25px', marginBottom: '25px' }} alt="laflemme and wade stand together" />

                  </div>
                </div>


              )}
            </div>
          </li>
        </ol>
      </div>

      <div style={{ border: '2px solid blue', borderRadius: '8px', margin: '75px 75px' }}>
        <h2 className="form-list" style={{ color: 'white', backgroundColor: '#230871', marginLeft: '50px', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>Johnson Family</h2>
        <ol className='content-body' style={{ color: 'black' }}>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('JFOI1')}>Video: Meet the Johnson Family</span>
              {dropdowns['JFOI1'] && (
                <div className='oi-dropdown-content'>
                  <iframe src="https://drive.google.com/file/d/1dSGcKbja69Xcc1RpMXilQS5Nr9o4tWGf/preview" width="738" height="415" allow="autoplay"></iframe>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('JFOI2')}>Video: Johnson Recipient Family Testimonial</span>
              {dropdowns['JFOI2'] && (
                <div className='oi-dropdown-content'>
                  <iframe src="https://drive.google.com/file/d/1AP7jj9_ifEIxzgMeXplTIMWZ6KG37sXx/preview" width="738" height="415" allow="autoplay"></iframe>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('JFOI3')}>Photo Gallery</span>
              {dropdowns['JFOI3'] && (
                <div className="oi-dropdown-content">
                  <div style={{ display: 'flex' }}>
                    <img src={jf1} style={{ width: '375px', marginTop: '25px', marginBottom: '25px' }} alt="johnson kid unboxing" />
                    <img src={jf2} style={{ width: '375px', marginTop: '25px', marginBottom: '25px' }} alt="johnson kid smiling" />
                  </div>
                  <div style={{ display: 'flex' }}>
                    <img src={jf3} style={{ width: '780px', marginTop: '25px', marginBottom: '25px' }} alt="johnson family" />
                  </div>
                  <div style={{ display: 'flex' }}>
                    <img src={jf4} style={{ width: '780px', marginTop: '25px', marginBottom: '25px' }} alt="johnson family together" />
                  </div>

                </div>


              )}
            </div>
          </li>

        </ol>
      </div>

      <div style={{ border: '2px solid blue', borderRadius: '8px', margin: '75px 75px' }}>
        <h2 className="form-list" style={{ color: 'white', backgroundColor: '#230871', marginLeft: '50px', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>DSU ARCHIVE</h2>
        <ol className='content-body' style={{ color: 'black' }}>
          <li>
            <div>
              <span className="si-dropdown-header-text" onClick={() => toggleDropdown('DSU ARCHIVE Photo Gallery')}>DSU ARCHIVE Photo Gallery</span>
              {dropdowns['DSU ARCHIVE Photo Gallery'] && (
                <div className="si-dropdown-content">
                  <ol style={{ paddingBottom: '15px' }}>
                    <li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Shirley Strickland and Carl and Annie Russell')}>Shirley Strickland and Carl and Annie Russell</span>
                        {dropdowns['Shirley Strickland and Carl and Annie Russell'] && (
                          <div >
                            <img src={dsu1} style={{ width: '750px', marginTop: '25px', marginBottom: '25px' }} alt="Shirley Strickland and Carl and Annie Russell" />
                          </div>
                        )}
                      </div>

                    </li>
                    <li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Lola Austin, Kevin Caesar, Kathy Latore 6-24-1988')}>Lola Austin, Kevin Caesar, Kathy Latore 6-24-1988</span>
                        {dropdowns['Lola Austin, Kevin Caesar, Kathy Latore 6-24-1988'] && (
                          <div >
                            <img src={dsu2} style={{ width: '750px', marginTop: '25px', marginBottom: '25px' }} alt="Lola Austin, Kevin Caesar, Kathy Latore 6-24-1988" />

                          </div>
                        )}
                      </div>

                    </li>
                    <li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('6-25-1988 People Hugging')}>6-25-1988 People Hugging</span>
                        {dropdowns['6-25-1988 People Hugging'] && (
                          <div >
                            <img src={dsu3} style={{ height: '500px', marginTop: '25px', marginBottom: '25px' }} alt="6-25-1988 People Hugging" />

                          </div>
                        )}
                      </div>

                    </li>
                    <li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('June 26, 1988 - Mary Sue and Mae Gertis Ray in front of Mae’s house')}>June 26, 1988 - Mary Sue and Mae Gertis Ray in front of Mae’s house</span>
                        {dropdowns['June 26, 1988 - Mary Sue and Mae Gertis Ray in front of Mae’s house'] && (
                          <div >
                            <img src={dsu4} style={{ width: '750px', marginTop: '25px', marginBottom: '25px' }} alt="June 26, 1988 - Mary Sue and Mae Gertis Ray in front of Mae’s house" />

                          </div>
                        )}
                      </div>

                    </li>
                    <li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('March 26, 2012 - Belgoni, MS')}>March 26, 2012 - Belgoni, MS</span>
                        {dropdowns['March 26, 2012 - Belgoni, MS'] && (
                          <div >
                            <span style={{ fontSize: '16px', display: 'block', textAlign: 'center', marginTop: '10px', marginBottom: '-10px' }} >L to R: Anne Mims, daughter of Mae Gertis Ray, Mary Sue Kallander, Mae Gertis Ray</span>
                            <img src={dsu5} style={{ width: '750px', marginTop: '25px', marginBottom: '25px' }} alt="L to R: Anne Mims, daughter of Mae Gertis Ray, Mary Sue Kallander, Mae Gertis Ray" />

                          </div>
                        )}
                      </div>

                    </li>
                    <li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('DSU6')}>June 1988 - Jane Remiek New Hampshire, Jim Mitchell - Belgoni, MS</span>
                        {dropdowns['DSU6'] && (
                          <div >
                            <img src={dsu6} style={{ height: '750px', marginTop: '25px', marginBottom: '25px' }} alt="June 1988 - Jane Remiek new hampshire, jim mitchell - belgoni ms" />

                          </div>
                        )}
                      </div>

                    </li>
                    <li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('2006: Orlanta Jackson sponsored by C.W.F. giving granddaughter a new hairdo')}>2006: Orlanta Jackson sponsored by C.W.F. giving granddaughter a new hairdo</span>
                        {dropdowns['2006: Orlanta Jackson sponsored by C.W.F. giving granddaughter a new hairdo'] && (
                          <div >
                            <img src={dsu7} style={{ height: '750px', marginTop: '25px', marginBottom: '25px' }} alt="2006: Orlanta Jackson sponsored by C.W.F. giving granddaughter a new hairdo" />

                          </div>
                        )}
                      </div>

                    </li><li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('2006: After 3 hours all done')}>2006: After 3 hours all done</span>
                        {dropdowns['2006: After 3 hours all done'] && (
                          <div >
                            <img src={dsu8} style={{ width: '750px', marginTop: '25px', marginBottom: '25px' }} alt="2006: After 3 hours all done" />

                          </div>
                        )}
                      </div>

                    </li><li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Kathy Gee Family 2009')}>Kathy Gee Family 2009</span>
                        {dropdowns['Kathy Gee Family 2009'] && (
                          <div >
                            <img src={dsu9} style={{ width: '750px', marginTop: '25px', marginBottom: '25px' }} alt="Kathy Gee Family 2009" />

                          </div>
                        )}
                      </div>

                    </li><li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('The Box Project, Inc. Former Headquarters in Connecticut')}>The Box Project, Inc. Former Headquarters in Connecticut</span>
                        {dropdowns['The Box Project, Inc. Former Headquarters in Connecticut'] && (
                          <div >
                            <img src={dsu10} style={{ width: '750px', marginTop: '25px', marginBottom: '25px' }} alt="The Box Project, Inc. Former Headquarters in Connecticut" />

                          </div>
                        )}
                      </div>

                    </li><li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Box Project, Inc.')}>Box Project, Inc.</span>
                        {dropdowns['Box Project, Inc.'] && (
                          <div >
                            <img src={dsu11} style={{ height: '750px', marginTop: '25px', marginBottom: '25px' }} alt="Box Project, Inc." />

                          </div>
                        )}
                      </div>

                    </li><li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('10/1990 Mattie Sue Delaney and Nancy Nonnes')}>10/1990 Mattie Sue Delaney and Nancy Nonnes</span>
                        {dropdowns['10/1990 Mattie Sue Delaney and Nancy Nonnes'] && (
                          <div >
                            <img src={dsu12} style={{ width: '750px', marginTop: '25px', marginBottom: '25px' }} alt="10/1990 Mattie Sue Delaney and Nancy Nonnes" />

                          </div>
                        )}
                      </div>

                    </li><li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('No info available')}>Picture (No info available)</span>
                        {dropdowns['No info available'] && (
                          <div >
                            <img src={dsu13} style={{ width: '750px', marginTop: '25px', marginBottom: '25px' }} alt="black white photo of family" />

                          </div>
                        )}
                      </div>

                    </li>
                    <li>
                      <div>
                        <span className="si-dropdown-header-text" onClick={() => toggleDropdown('Reverend Calvin Collins with Teresa McGill and Carissa Hicks')}>Reverend Calvin Collins with Teresa McGill and Carissa Hicks</span>
                        {dropdowns['Reverend Calvin Collins with Teresa McGill and Carissa Hicks'] && (
                          <div >
                            <span style={{ fontSize: '16px', display: 'block', textAlign: 'center', marginTop: '10px', marginBottom: '-10px' }} >Teresa McGill (left - daughter) and Carissa Hicks (right - granddaughter)</span>
                            <img src={dsu14} style={{ height: '750px', marginTop: '25px', marginBottom: '25px' }} alt="Reverend Calvin Collins with Teresa McGill (left - daughter) and Carissa Hicks (right - granddaughter)" />

                          </div>
                        )}
                      </div>

                    </li>

                  </ol>
                </div>
              )}
            </div>
          </li>

          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('NNLWBP')}>Nancy Norman's Life With The Box Project</span>
              {dropdowns['NNLWBP'] && (
                <div className="oi-dropdown-content">

                  <iframe src="https://drive.google.com/file/d/1NRpG2cRjiK85w_jJKhoMOoE-cWPw5tJq/preview" width="738" height="415" allow="autoplay"></iframe>                </div>


              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('TripJT')}>Trip to Jonestown Box Project 1960s Testimonial</span>
              {dropdowns['TripJT'] && (
                <div className="oi-dropdown-content">

                  <iframe src="https://drive.google.com/file/d/14rLUiGaM2l68RMqWDgvaoKf05ibgdncc/preview" width="738" height="415" allow="autoplay"></iframe>                </div>


              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('EOTestimonial')}>Eye-Opening Testimonial</span>
              {dropdowns['EOTestimonial'] && (
                <div className="oi-dropdown-content">

                  <iframe src="https://drive.google.com/file/d/155hB0adaQbnKvSUc3hEQEsegRonPxD0Z/preview" width="738" height="415" allow="autoplay"></iframe>                </div>


              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('BPinc25years')}>25 Years of Box Project, Inc. Pamphlet</span>
              {dropdowns['BPinc25years'] && (
                <div className="oi-dropdown-content">

                  <iframe src="https://drive.google.com/file/d/1py1G5X3LYlgViTNgRlCP9ZN2KeJSK2x-/preview" width="738" height="415" allow="autoplay"></iframe>                </div>

              )}
            </div>
          </li>


        </ol>
      </div>

      <div style={{ border: '2px solid blue', borderRadius: '8px', margin: '75px 75px' }}>
        <h2 className="form-list" style={{ color: 'white', backgroundColor: '#230871', marginLeft: '50px', marginRight: '50px', paddingTop: '10px', paddingBottom: '10px' }}>Blog Posts</h2>
        <ol className='content-body' style={{ color: 'black' }}>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('BlogPost1')}>From Recipient to Giver: Mae Ruth’s Story.</span>
              {dropdowns['BlogPost1'] && (
                <div className='oi-dropdown-content'>
                  <img src={blogpost1} style={{ width: '700px', marginTop: '25px', marginBottom: '25px' }} alt="Mae Ruth’s niece is seated among the gifts from their family sponsor provided at Christmas" />
                  <p style={{ fontSize: '16px', display: 'block', textAlign: 'center', marginTop: '10px' }} ><i>Mae Ruth’s niece is seated among the gifts from their family sponsor provided at Christmas</i></p>

                  <p style={{ textAlign: 'left' }}>
                    Mae Ruth and her family became recipients of The Box Project when she was just eleven years old. She grew up in Tallahatchie County, Mississippi and was raised on two different former slave plantations where her dad worked the fields.

                    <br></br><br></br>Growing up, her family consisted of her mom, dad, two brothers and two sisters. Their starter home on the first plantation was a three-room shotgun house that had no indoor plumbing. Her parents slept in the front room where the heater was located, while she and her siblings shared the other bedroom; the girls shared one bed, and the boys shared the other. The last room in their house was the kitchen. Though they didn’t have much, they were happy. They eventually moved onto another plantation where they lived in a trailer. The trailer was an improvement from their shotgun house but after many years of living there, it became just as run-down and her dad didn’t make enough money to get everything that the family needed.

                    <br></br><br></br>After some hard years, they were introduced to The Box Project by a social worker. Because Mae Ruth was the only one in the family that could write at the time, she filled out the application. From there they received their very first sponsor. Her biggest memories about her sponsors were during the holidays. She remembers several Christmases where the UPS truck backed up to their trailer with a truck full of boxes and would often come back the next day with another load of boxes. The family would get so many boxes full of gifts that it filled up their modest trailer and would take the children the whole day to open up everything. Their sponsor’s gifts included cloths, toys, books based on places that they wanted to travel, school supplies, and household items.

                    <br></br><br></br>As recipient of The Box Project, the family had several sponsors and were very grateful for each one. Mae Ruth grew up and gave back to her community by serving with AmeriCorps, putting herself through college to become a teacher, and now working for an early learning alliance in her home county to encourage, enrich, and support elementary achievement. She credits The Box Project as one of the reasons she is the person she is today.

                    <br></br><br></br>She tells people that if they have the chance to become part of The Box Project, then they should do it because it is a great opportunity that should not be taken for granted.
                    <br></br><br></br> <i>By Iyeshia Haynes, MDSC/AmeriCorps*Vista Member</i>
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('BlogPost2')}>The Box Project Shapes Family’s Charitable Spirit! (The Patlis Family)</span>
              {dropdowns['BlogPost2'] && (
                <div className='oi-dropdown-content'>
                  <img src={blogpost2} style={{ width: '700px', marginTop: '25px', marginBottom: '25px' }} alt="Three generations of the Patlis Family, left to right are Jason (President/CEO of National Marine Sanctuary Foundation), Naomi (The Box Project Sponsor), Asia, Benjamin, and Howard (Founder of Barka Foundation). The story is Jason and Howard’s memory of their mother." />
                  <p style={{ fontSize: '16px', display: 'block', textAlign: 'center', marginTop: '10px' }} ><i>Three generations of the Patlis Family, left to right are Jason (President/CEO of National Marine Sanctuary Foundation), Naomi (The Box Project Sponsor), Asia, Benjamin, and Howard (Founder of Barka Foundation). The story is Jason and Howard’s memory of their mother.</i></p>

                  <p style={{ textAlign: 'left' }}>
                    My mom was always so generous with her time, her spirit, her dollars.  She used to do a lot of volunteer work, and always looked for ways to help those less fortunate than us.  She had learned somewhere about The Box Project in the late 1960s or early 1970s, and she saw it as a unique charity to give something meaningful to families far away that were much in need.  She also saw it as a unique way to introduce me and my brother – then young children around 9 and 6 – to the importance of giving.  We were assigned a large family in Mississippi.

                    <br></br><br></br>It became a big family event for us to regularly go through the house and to the stores, and figure out what we wanted to donate or buy and put in the box for our sister family in Mississippi.  We would go to the stores to buy staples for the house, supplies for school, and toys for the children.  And back then – before Fedex of course – it was a big deal to go to the local Post Office and mail these huge boxes.  Especially for Christmas, we would pack a huge box, gift-wrapping everything.  We always received a warm, loving letter of gratitude in return, with reports on how all the children were doing and what she would like in the next shipment.

                    <br></br><br></br>And then one day, mom had an idea: she would host the mother of the family for several weeks’ holiday in New York, introduce her to the city, and have her live with us.  It was a profound experience for all of us.  Mom continued sending boxes for some time thereafter.

                    <br></br><br></br>In later years, mom made it a point to give small amounts to hundreds of charities.  She couldn’t choose among them, so gave to all – social causes, health and medicine, environment, anti-poverty, literacy, the arts, human rights, Jewish and anti-Semitism causes, women’s rights, veteran’s groups.   There was never a cause that wasn’t worthy.

                    <br></br><br></br>Two years ago, mom developed an aggressive form of multiple myeloma.  As we prepared for her passing, she debated for weeks what charities meant the most to her, and which she would want her friends and family to donate in her memory.  My brother and I both run non-profits, so it was not an easy decision.  In the end, she chose The Box Project as one of two charities to receive donations in her memory.  It was a unique charity that left an indelible impression on her, and shaped the charitable spirit that we nurtured as a family.
                  </p>
                </div>
              )}
            </div>
          </li>

          <li>
            <div>
              <span className="oi-dropdown-header-text" onClick={() => toggleDropdown('BlogPost3')}>The Box Project Continues to Connect Families (The Kriegel Family)</span>
              {dropdowns['BlogPost3'] && (
                <div className='oi-dropdown-content'>
                  <img src={blogpost3} style={{ width: '600px', marginTop: '25px', marginBottom: '25px' }} alt="black woman white woman hug" />

                  <p style={{ textAlign: 'left' }}>
                    Marilyn and Bob Kriegel are helping end the cycle of poverty. A testament to The Box Project is their 24 year relationship with the Bush family of Jonestown, MS. The Bush and Kriegel family meet for the first time during The Box Project Homecoming the summer of 2010. During a period of the families 24 year friendship, they have experienced the sorrow and joy of life. Marilyn and Willie Mae have shed tears together and celebrated upon the news of marriage and birth. In 2010 the Bush family lost their home to fire. The Kriegel’s went well beyond the call of duty by helping the Bush family purchase a new home. Both families have been impacted by the friendship and relationship that was cultivated through The Box Project.

                    <br></br><br></br>Making connections between sponsors and recipients has lifted countless families out of poverty, sent many children on to achieve higher education, and helped people to survive poverty day-to-day. Join the efforts of The Box Project by impacting the life of those less fortunate.
                  </p>
                </div>
              )}
            </div>
          </li>
          <li>
            <div>
              <span className="oi-dropdown-header-text" style={{ display: 'block' }} onClick={() => toggleDropdown('BlogPost4')}>A BOX PROJECT SPONSOR FAMILY LAUNCHES STUDENT-LED NYC ORGANIZATION TO BRING MISSISSIPPI STUDENTS PEER MENTORSHIP.</span>
              {dropdowns['BlogPost4'] && (
                <div className='oi-dropdown-content'>
                  <img src={blogpost4} style={{ width: '200px', marginTop: '25px', marginBottom: '25px' }} alt="Including You, a Peer-to-Peer Mentorship Organization Founded by 11-Year-Old NYC Student, Pairs Students from the Mississippi Delta and the Greater New York City Area" />
                  <p style={{ fontSize: '16px', display: 'block', textAlign: 'center', marginTop: '10px' }} ><i>Including You, a Peer-to-Peer Mentorship Organization Founded by 11-Year-Old NYC Student, Pairs Students from the Mississippi Delta and the Greater New York City Area</i></p>

                  <p style={{ textAlign: 'left' }}>
                  TUNICA, MS — Middle school students from the New York City area will begin virtual peer-to-peer mentorship with students in Tunica County this week, thanks to a new partnership between Family Biz Builder, Community Foundation of Northwest Mississippi’s The Box Project, and Including You.

                  <br></br><br></br>As a public-school student in New York City, 11-year-old Daisy Hampton witnessed stark inequality at school — inequality made more dramatic with the sudden shift to remote learning in March. She knew many of her classmates did not have access to computers or internet access at home and worried that they would not keep learning or stay connected to their classmates. She wanted to help these kids, as well as those with disabilities who were also feeling especially disconnected due to the pandemic. In response, Daisy sought to connect students facing disparities with older students for tutoring, mentorship, and friendship.

                  <br></br><br></br>With this vision, Daisy founded Including You, a peer mentorship organization that pairs volunteer student mentors with younger students facing economic hardship, developmental or physical disabilities. Including You has provided internet-enabled devices to help students served by Family Biz Builder and looks to provide additional devices to any participating student without access to one. 

                  <br></br><br></br>Daisy Hampton and her mom, Jennifer Hampton, had already been enjoying a relationship with a family they sponsored through The Box Project, a program managed by the Community Foundation of Northwest Mississippi. The Hamptons invited The Box Project and Family Biz Builder to partner with Including You to pair NYC students with student mentees from the Mississippi Delta region for mentorship. Family Biz Builder, a youth development nonprofit, provides Including You mentor training and matches IY mentors with mentees. 

                  <br></br><br></br>“My vision for Including You was made possible this year because of our partnership with Family Biz Builders and The Box Project,” said Daisy Hampton, the 11-year-old founder of Including You and a new IY mentor. “We couldn’t have gotten to this point without them.” 

                  <br></br><br></br>“I’m so inspired by Daisy and the mindset that she exhibits, leading the charge to help other young girls promote equity in education,” said Peggie Henderson, Executive Director of Family Biz Builder. “And I am thrilled that students from the Big Apple will expose the FBB mentees from the Mississippi Delta to other lifestyles.” 

                  <br></br><br></br>“Daisy’s energy and commitment to supporting youth living in the Mississippi Delta are inspirational,” said Keith Fulcher, President of the Community Foundation of Northwest Mississippi. “She epitomizes our Community Foundation’s efforts to create a culture of philanthropy and service in our region and we’re very thankful to her and the Hampton family for setting the example.”

                  <br></br><br></br>“We are thrilled to partner with Including You to provide encouragement, friendship, and education to students of the Mississippi Delta,” said Donna Goldman, Director of The Box Project. “This partnership truly highlights the Community Foundation’s mission of connecting people who care with causes that matter.” <br></br><br></br>Making connections between sponsors and recipients has lifted countless families out of poverty, sent many children on to achieve higher education, and helped people to survive poverty day-to-day. Join the efforts of The Box Project by impacting the life of those less fortunate.
                  <br></br><br></br><i>October 6, 2020</i>
                  
                  </p>

                  <img src={blogpost5} style={{ width: '200px', marginTop: '25px', marginBottom: '25px' }} alt="Daisy Hampton, Founder of Including you" />
                  <p style={{ fontSize: '16px', display: 'block', textAlign: 'center', marginTop: '10px' }} ><i>Daisy Hampton, Founder of Including you</i></p>


                </div>
              )}
            </div>
          </li>


        </ol>
      </div>



    </div>
  );
};

export default Impact;