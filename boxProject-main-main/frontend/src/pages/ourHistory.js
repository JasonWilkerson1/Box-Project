import React from 'react';
import './ourHistory.css';

import HistoryIMG5 from './HistoryIMGS/HistoryIMG5.png';
import HistoryIMG6 from './HistoryIMGS/HistoryIMG6.png';

import Letter1965 from './HistoryIMGS/1965_letter.png';
import MaryTaylor1966 from './HistoryIMGS/1966_mary.png';
import Children1966 from './HistoryIMGS/1966_children.png';
import Visit1967 from './HistoryIMGS/1967_visit.png';
import Kids1 from './HistoryIMGS/kids_field.jpg';
import Kids2 from './HistoryIMGS/kids_rural.jpg';
import LaFlamme from './HistoryIMGS/laflemme.jpg';
import Together from './HistoryIMGS/together.jpg';


const History = () => {
  return (
    <div>
      <div>
        <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871' }}>Our History</span>
      </div>
      <div>
        <span className="content-body">Virginia Naeve (founder), Claire Collins Harvey (black Civil Rights Activist from Jackson, MS), and Coretta Scott King (late wife of Dr. Martin Luther King, Jr. and Civil Rights Activist)  played different yet equally vital roles in the development of the Box Project and which later proved crucial to its initial rapid success. The Box Project was established at the height of the Civil Rights Movement and was one of the first fully woman-run Civil Rights Movements (alongside WomanPower Unlimited) in the Deep South. The Box Project’s foundation  being built from the unification of black and white women in the name of all things good for humanity set the stage for years to come.

        </span>
        <img src={HistoryIMG5} style={{ width: '550px', height: 'auto' }} />
      </div>

      <div>
        <span style={{ fontSize: '42px', color: 'black', display: 'block', textAlign: 'center', marginTop: '100px' }}>Why call it the “box” project?
        </span>
      </div>
      <div>
        <span className="content-body">Virginia got the idea for the name “Box Project” after witnessing a growing pile of donation boxes in her living room full of food, clothes, and other basic need items that people had sent in response to ads printed in their local newspapers. Thanks to Coretta, the Box Project gained national publicity and Virginia was able to recruit sponsors from all over the country to join her mission to improve the poor living conditions of families in small rural communities along the Mississippi. In 2009, the Box Project became an official program of the Community Foundation of Northwest Mississippi, and it continues to serve the same communities it has for over 50 years.

        </span>

      </div>
      <div>
        <span className="content-ending"> Interested in our full story? Find it below our timeline!
        </span>

      </div>


      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">1962</span>
            <h2 className="timeline-title">Virginia Naeve travels to the Disarmament Conference in Geneva and meets Coretta Scott King, wife of the late Martin Luther King, Jr.
            </h2>
            <p className="timeline-description"></p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">1965</span>
            <h2 className="timeline-title">A Letter to Virginia

            </h2>
            <p className="timeline-description">
              <img src={Letter1965} style={{ width: '550px', height: 'auto' }} />

            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">1966</span>
            <h2 className="timeline-title">Mary Taylor and her children

            </h2>
            <p className="timeline-description">
              <img src={MaryTaylor1966} style={{ width: '550px', height: 'auto' }} />
              <img src={Children1966} style={{ width: '550px', height: 'auto' }} />
            </p>
            <p className="timeline-description">
              <img src={HistoryIMG6} style={{ width: '550px', height: 'auto' }} />

            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">1967</span>
            <h2 className="timeline-title">Ruth Hooke visits Maggie Montgomery.

            </h2>
            <p className="timeline-description">
              <img src={Visit1967} style={{ width: '550px', height: 'auto' }} />

            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">1968</span>
            <h2 className="timeline-title">The Box Project became an official incorporation under Virginia Naeve and fellow neighbors.
            </h2>
            <p className="timeline-description"></p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">Sunflower, MS 1968</span>
            <h2 className="timeline-title">Out-of-State Sponsor visits Box Project Recipient in Mississippi


            </h2>
            <p className="timeline-description-text">
              Ms. La Flamme was a Box Project Sponsor in the 1960’s for a large family headed by Annie Catherine Wade of Sunflower, MS. LaFlamme remained an active supporter of the Box Project and even made a trip to visit Annie Catherine and the rest of her recipient’s family in Sunflower in 1968. Her family has since shared film photos that LaFlamme took on her trip that tell a unique Box Project story–one that captures the underlying significance of the creation of the Box Project in the 1960s, a time in which Civil Rights activists and race relations in the South were at the forefront of American culture. Through the Box Project, blacks and whites came together in companionship and helped one another. More so, as displayed in the film, it highlights the living conditions of rural Mississippi and the historic, generational poverty among black families that the Box Project has been working hard to break.

            </p>
            <p className="timeline-description">
              <img src={Kids1} style={{ width: '550px', height: 'auto' }} />
              <img src={Kids2} style={{ width: '550px', height: 'auto' }} />
            </p>
            <p className="timeline-description">
              <img src={Together} style={{ width: '550px', height: 'auto' }} />
              <img src={LaFlamme} style={{ width: '550px', height: 'auto' }} />
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">1969</span>
            <h2 className="timeline-title">The Box Project received their 501(c)(3), making them a non-profit organization.

            </h2>
            <p className="timeline-description"></p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">1973</span>
            <h2 className="timeline-title">The Box Project hired its first Executive Director following publicity in Woman's Day magazine.

            </h2>
            <p className="timeline-description"></p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">2004</span>
            <h2 className="timeline-title">The Box Project headquarters moves from Connecticut to Florida.
            </h2>
            <p className="timeline-description"></p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">Late 2000s</span>
            <h2 className="timeline-title">“Great Recession” dissolves The Box Project, Inc. and its 501(c)(3) status.

            </h2>
            <p className="timeline-description"></p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <span className="timeline-date">2009</span>
            <h2 className="timeline-title">The Box Project becomes an official program of the Community Foundation of Northwest Mississippi, a 501(c)(3) committed to continuing the rich heritage of the TBP and its mission to alleviate the everyday stresses of living in rural poverty.

            </h2>
            <p className="timeline-description"></p>
          </div>
        </div>

      </div>

      <div>
        <span style={{ fontSize: '52px', color: 'white', display: 'block', textAlign: 'center', backgroundColor: '#230871'  }}>Our Full Story</span>
      </div>
      <div>
        <p className="full-story">The birth of the Box Project begins with an unassuming conversation between two women who were traveling to Geneva, Switzerland in 1962 for the 17-nation Disarmament Conference. One of these women went on to be the founder of the now-known Box Project organization, Virginia Naeve, a citizen of Vermont with an uncommon amount of drive, and the other, Coretta Scott King, the wife of Civil Rights Activist, Dr. Martin Luther King Jr. Although Virginia’s primary plan at this conference was to speak with U.Thant, the head of the United Nations at the time, her plane conversation with Coretta Scott King proved to be much more lasting.


          <p style={{ marginTop: '20px' }}></p>The name “The Box Project” comes from Virginia’s seemingly “simple” act of writing letters and sending boxes of materials to families in need, including anything from food and clothing to school supplies and diapers. Soon, neighbors wanted to join her and started sending boxes to Mississippi, helping more and more families in need.

          <p></p>Finally, Virginia had the wonderful idea of matching up families who wanted to help, now referred to as “sponsor families” to families in need, or “recipient families.” And “The Box Project” was born. It was officially incorporated in 1968 and received its 501(c)(3) in 1969. In 1973, The Box Project hired its first Executive Director and made its first widespread debut following an article in Women’s Day magazine.

          <p></p>For a little over a decade, the organization’s success continued. Unfortunately, the “Great Recession” in the late 2000s forced The Box Project’s Board of Directors and Staff to make the tough decision to dissolve The Box Project, Inc. and its 501(c)(3) status. After researching many options to keep The Box Project afloat, the Board of Directors agreed to a partnership with the Community Foundation of Northwest Mississippi. The mission of the Box Project meshed perfectly with the Community Foundation, whose mission to “Connect People Who Care With Causes That Matter” would solve one of the BP’s primary issues–finding new sponsors. This pairing proved a perfect fit, and since 2009, the two have collaborated to serve the Mississippi Delta region.

          <p></p>To this day, the Community Foundation continues to help The Box Project tackle its mission to help those living in rural poverty in a variety of ways. Because of our unique structure and effective work, we have received endorsements from national media personalities and outlets, including Oprah Winfrey on TV, Mike Gallagher’s national radio show, and NPR’s World Vision radio show, as well as others like Parade, Child, Nick Jr., Family Fun, and Parent and Redbook magazines. Since 1962, The Box Project has directly helped more than 15,000 recipient families and continues to match sponsors with new families every few months.

          <p></p>As a testament to the success of The Box Project, we have stories from sponsors and recipients that were matched over 35 years ago. Although the recipient family has broken the cycle of poverty and no longer needs material aid, the friendship remains strong. Despite its decades-long success, the Box Project continues to struggle to gain new sponsors to help our families in need. We need YOUR HELP to keep Virginia’s vision alive.

        </p>
      </div>


    </div>
  );
};

export default History;