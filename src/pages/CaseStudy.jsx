import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Box, Divider, Grid, Toolbar, Typography } from "@mui/material";
import caseStudyImg from "../assets/CaseStudy.png";
import tescoImg from "../assets/caseStudy/tesco_image.jpeg";
import zaraImg from "../assets/caseStudy/zara_image.jpeg";
import incomeStmImg from "../assets/caseStudy/incomeStm.png";
import { useLocation } from "react-router-dom";

/* ================= DATA ================= */
const caseStudies = [
  {
    id: "ikea",
    title: "IKEA",
    content: (
      <>
      <section id="ikea">
        <h6>Market Interactions</h6>
        <p>Product Display and Layout: IKEA stores are known for their unique
layout, which guides customers through various product displays and
room setups. This layout encourages customers to interact with the
products physically, exploring different options and configurations.</p>
<p>Self-Service Model: IKEA operates on a self-service model, where
customers are encouraged to browse and select products themselves. This
hands-on approach allows customers to interact directly with the
merchandise, examining its quality and features.</p>
<p>Low Prices: IKEA is known for offering affordable prices for its furniture
and home goods. This pricing strategy encourages customer interaction by
making products accessible to a wide range of consumers.</p>
<p>Customer Service: While IKEA operates on a self-service model, there are
still opportunities for customer interaction with staff members. Employees
are available throughout the store to answer questions, provide assistance,
and offer advice on products and installations.</p>
<p>In-Store Experience: Beyond shopping for products, IKEA stores often
include additional amenities such as restaurants, play areas for children,
and design inspiration sections. These features enhance the overall
shopping experience and encourage customers to spend more time in the
store, interacting with both products and other customers.</p>
<p>Online Interaction: In addition to physical stores, IKEA also offers online
shopping options. Customers can browse products, read reviews, and
make purchases through the IKEA website or mobile app. This online
presence expands the reach of IKEA's market interaction, allowing
customers to engage with the brand from anywhere.</p>
<h6>Market Intervention</h6>
<p>Store Layout and Design: IKEA carefully plans the layout of its stores to
guide customers through different product displays and room setups. This
layout encourages customers to explore and interact with various items,
making it more likely for them to make purchases.</p>
<p>Pricing Strategy: IKEA sets affordable prices for its furniture and home
goods, making them accessible to a wide range of customers. This pricing
strategy attracts shoppers and encourages them to interact with the
products on offer.</p>
<p>Customer Service: Although IKEA operates on a self-service model, it still
provides customer service assistance throughout its stores. Employees are
available to answer questions, provide guidance, and assist with any
issues, enhancing the overall shopping experience and encouraging
customer interaction.</p>
<p>In-Store Experience: IKEA stores offer additional features such as
restaurants, play areas, and design inspiration sections. These amenities
make the shopping experience more enjoyable and encourage customers
to spend more time in the store, interacting with both products and other
shoppers.</p>
<p>Online Presence: IKEA also has an online shopping platforwhere
customers can browse products, read reviews, and make purchases. This
expands the reach of IKEA's market interaction, allowing customers to
engage with the brand from the comfort of their homes.</p>
<h6>Matrix based perspective to market
approach and selecting the desired
approach.</h6>
<p>Market Segmentation: IKEA might analyze different market segments
based on demographics, psychographics, and behavioral factors. For
example, they might target young urban professionals, families, or
students. The matrix would assess the attractiveness of each segment
based on factors such as size, growth potential, competition, and
alignment with IKEA's brand values.</p>
<p>Competitive Positioning: IKEA would evaluate its competitive position
within each market segment compared to other players. This assessment
would consider factors such as pricing, product offerings, distribution
channels, and brand perception. The matrix would help identify where
IKEA has a competitive advantage and where it needs to improve.</p>
<p>Resource Allocation: IKEA would allocate resources such as marketing
budget, staffing, and infrastructure based on the attractiveness of each
market segment and its competitive position. The matrix would help
prioritize investments and ensure resources are deployed effectively to
maximize returns.</p>
<p>MarketApproach Selection: Based on the analysis of market segments,
competitive positioning, and resource allocation, IKEA would select the
most appropriate market approach for each segment. This could involve
strategies such as mass marketing, niche targeting, or customization. The
matrix-based perspective would help IKEA make informed decisions and
tailor its approach to the specific needs and characteristics of each
segment.</p>
<h6>Probity, Ethics and Transparency of the
brand with clients and fellow competition</h6>
<p>Probity: IKEA upholds high standards of integrity and honesty in its
business practices. This includes fair treatment of customers, suppliers,
and employees. For example, IKEA is known for its transparent pricing and
fair return policies, ensuring that customers feel confident and respected
in their interactions with the company.</p>
<p>Ethics: IKEA has established ethical guidelines that govern its operations
and decision-making processes. These guidelines cover various areas such
as environmental sustainability, labor practices, and social responsibility.
For instance, IKEA has been proactive in promoting sustainability through
initiatives like sourcing sustainable materials and reducing carbon
emissions in its supply chain.</p>
<p>Transparency: IKEA strives to be transparent in its communications and
operations. This transparency is evident in how IKEA communicates with
customers about product information, pricing, and policies. Additionally,
IKEA publishes reports and updates on its website to provide stakeholders
with insight into its performance and initiatives.</p>
<p>Competition: While IKEA is a major player in the furniture retail industry, it
generally maintains a fair and respectful relationship with its competitors.
IKEA competes based on factors such as product design, affordability, and
customer experience, rather than engaging in unethical or anti-competitive
practices. Moreover, IKEA has been involved in industry collaborations
and initiatives aimed at improving sustainability and ethical standards
across the sector.</p>
<h6>Overall observations of the brand during
store visit</h6>
<p>Big Store: IKEA stores are huge and full of stuff for your home.</p>
<p>Lots of Things: They have everything from furniture to kitchen gadgets.</p>
<p>Good Prices: Things at IKEA are affordable, so you don't have to spend too
much.</p>
<p>You Do It Yourself: You can pick out your own stuff and take it home to
build it yourself</p>
<p>Cool Rooms: They have rooms set up to show you how things could look
in your home.</p>
<p>Fun for Families: There are places for kids to play, so families like going
there.</p>
<p>Extra Help: If you need it, IKEA can deliver your stuff or even help you put
it together.</p>
      
      </section>
      </>
    ),
  },

  {
    id: "tesco",
    title: "TESCO",
    content:
      (
    <>
    <section id="tesco">
      <h6>WHAT IS THE PRESENT STAFF STRUCTURE AT TESCO?</h6>
      <p>
        Organizational structure consists of three groups of employees at the top, mediate and base level of management. At the top level , there is a board of ten directors with the chief executive officer (CEO), Ken Murphy
s a British multinational grocery and general merchandise seller company. It’s headquartered in England. Tesco follows a hierarchical organizational structure. In this structure, positions and obligation are divided into many parts to ensure work will be done efficiently and smoothly. The ones at the top of the business pyramid have the maximum responsibilities and authority.
      </p>
      <ul>
        <li>TESCO CORPORATE</li>
        <li>GOVERNANCE</li>
        <li>STRUCTURE</li>
        <li>TESCO ORGANIZATIONAL</li>
        <li>STRUCTURE AT STORE</li>
      </ul>
      <h6>WHAT IS THE TESCO’S WAY OF VALUING ITS EMPLOYEES?</h6>
      <p>Tesco use different ways to motivate its employee some of them are reward, training and development, Personal development which
shows employees are able to develop and grow, Staff housing and voluntary benefits, Christmas benefits, Employee Share Scheme
plans, timely communication, hygiene factors
Tesco motivates its employees to develop good relations with their colleagues for making a better team. They provide their
employees' facility to communication, trust and share their values and opinion with each other for the organizational betterment (Blum
and Wall, 1997)</p>
<p>The hygiene factor is dissatisfaction factor because if it not maintain then it include dissatisfaction or unhappiness within the workers.
The hygiene factor includes safety of workers, company policies, salary, and working condition if it all there then workers motivated
These people are motivated through power and authority. They want to make their own ideas and work on it and direct others
according them.</p>
<p>All these research theories show different method to motivate employees, they all are different but their motive is same to each other
as they all shows how to motivate employees and help industries and business to fulfil their strategic goal by give way to motivate
employee and they realise employer that employee or worker should get proper respect and value. The above mention research
theories shows that how much motivation is important and the ways they explain to motivate worker in order to get maximum output
and how make them interested towards work, how they motivate.</p>
<h6>How does tesco recognise and reward its employees?</h6>
<p>You'll get your Colleague Clubcard giving you 15% off after every pay day for a four-day period and 10% the rest of the month on most Tesco purchases. You can also join our 'Buy As You Earn' and 'Save As You
Earn' share schemes. Once you get your first payslip, you can also access our Colleague Deals & Discounts site.</p>
<h6>Reward Objectives</h6>
<p>Attract - Enable Tesco to recruit the right people</p>
<p>Motivate - Incentivise colleagues to deliver our business goals together</p>
<p>Recognise - Acknowledge individual contribution and performance</p>
<p>Align - Create shareholder value by focussing colleagues on making what matters better</p>
<p>Retain - Foster loyalty and pride in Tesco so that colleagues want to stay with us
Reward principles</p>

<Grid container spacing={4} alignItems="flex-start">
    {/* LEFT SIDE — 7 COLUMNS */}
    <Grid item xs={12} sm={7} md={7}>
<p>Competitive</p>
<ul>
  <li>They assess competitiveness on a total reward basis including financial and non-financial rewards</li>
  <li>Reward reflects an individual's role, experience, performance and contribution</li>
  <li>Reward is set with reference to external market practice and internal relativity</li>
</ul>
<p>Simple</p>
<ul>
  <li>Reward is simple, clear, and easy to understand</li>
  <li>They avoid unnecessary complexity</li>
  <li>Reward is delivered accurately</li>
</ul>
<p>Fair</p>
<ul>
  <li>Policies are transparent, and applied consistently and equitably</li>
  <li>Reward decisions are trusted and properly governed</li>
  <li>Reward is legal and compliant</li>
</ul>
<p>Sustainable</p>
<ul>
  <li>Reward is aligned to the business strategy, reflects their performance and is affordable</li>
  <li>Reward framework is flexible to meet the changing needs of the business
reward in a responsible way</li>
</ul>
</Grid>
{/* RIGHT SIDE — 5 COLUMNS (IMAGE) */}
    <Grid item xs={12} sm={5} md={5}>
      <Box
        component="img"
        src={tescoImg} // your image
        alt="Tesco Reward Principles"
        sx={{
          width: "100%",
          borderRadius: 2,
          objectFit: "cover",
        }}
      />
    </Grid>
  </Grid>
<p>Annual bonus – Many colleagues are eligible for annual bonuses in a structure consistent with the Executive Directors’ annual bonus, with a focus on sales, profit and individual performance.</p>
<p>* Share incentives – Our senior managers across the Group participate in the Performance Share Plan based on similar performance conditions to those for the Executive Directors’ PSP and all of our management team
receive some of their bonus in Tesco shares, deferred for a period of two or three years.</p>
<p>* Colleagues as shareholders–It is an important part of the Tesco Values that all colleagues, not just management, have the opportunity to become Tesco shareholders. More than 130,000 colleagues participate in our all-
employee schemes, holding shares in our Share Incentive Plan and options over shares in our Save As You Earn schemeHow is Mayo theory of motivation executed in tesco?
In the early 1930s the theorist Elton Mayo suggested that motivation at work was promoted by such factors as:</p>
<ul>
  <li>Greater communication</li>
  <li>Good teamwork</li>
  <li>Showing interest in others</li>
  <li>Involving others in decision making</li>
  <li>Ensuring the wellbeing of others</li>
  <li>Ensuring work is interesting and non-repetitive</li>
</ul>
<p>Mayo based his assumptions on research undertaken with workers at the Hawthorne plant of the Western Electric
Company in Chicago. His work resulted in the Hawthorne theory. He suggested that boredom and repetitiveness of
tasks led to reduced motivation. He believed that motivation was improved through making employees feel
important, giving them a degree of freedom to make choices and acknowledging their social needs.</p>
<p>At Tesco the Mayo theory is seen to be operating throughout the company. Communication is an extremely
important factor in motivating employees. This may be through 1-to-1 discussions with managers, through the company intranet or newsletters or through more formal structures such as appraisals</p>

    </section>
    </>
      ),
  },

  {
    id: "zara",
    title: "ZARA",
    content: (
      <>
      <section id="zara">
        <h6>Business communication in ZARA</h6>
        <p>ZARA is a Spanish multinational retail clothing chain
          which comes under Inditex group.
          Zara is organized into a functional
          departmentalization. More specifically ,Zara operates
          with a lean organizational structure, which emphasises
          high performance .the lean organization also works to
          reduce the number of managerial hierarchy levels and
          decentralise decision making . From design to delivery
          it takes about five weeks for a garment and only two
          weeks for an existing model. Moreover , Zara is also a
          vertically integrated company that means they have
          control over several or all of the production and
          distribution steps involved in the creation .COMMUNICATION IN ZARA
          Initially the most crucial aspect of communication strategy is the
          target customers through advertising campaigns that include print
          media and five social media platforms
          Instagram, facebook, twitter , pinterest and youtube.Barriers in communication and how they overcame those
          barriers.
        </p>
        <ol>
          <li>Quick response system composed of human resources and
information technology ,earlier they did not have proper
team</li>
<li>In stores it was hard to find if the size is available on floor
or its been sold or out of stock so they introduced i pods
which has all the information about the articles on floor and
in-stock , so that they can help customer in no time.</li>
<li>Secrecy of computer network linking system has improved
as they faced issues that information was getting leaked.</li>
<li>Customers found difficulties at billing counters because of long
lines during sale season so they made it easy by giving liberty to get
bills done in any section weather its mens woman or kids.</li>
<li>Shift slots were maintained so that staff members get proper rest.</li>
<li>Every year HR department introduce new policies for staff so
that they work effectively.</li>
        </ol>
        <img src={zaraImg} alt="ZARA_Image"/>
        <p>In case of Zara, the quality communication is important whether it
is verbal-nonverbal or technological. The skill of communication
and technical assistance provided by the device all are the useful
aspects to expanding the business . The proper feedback may come
in verbal communication but through the technological medium
now feedback is very easy to gather, however, there is a chance of
mismatching the portfolio of the quality but still, this small risk can
be taken to enlarge the market area of the organization.The skill of communication and technical
assistance provided by the device all are the
useful aspects to expanding the business .
The proper feedback may come in verbal
communication but through the
technological medium now feedback is very
easy to gather, however, there is a chance of
mismatching the portfolio of the quality but
still, this small risk can be taken to enlarge
the market area of the organization.Nonverbal communication
to improve morale
In business, nonverbal communication can affirm or belie the
words actually being spoken. Communication can be hindered
when nonverbal cues seem to contradict what's being said.
When verbal and nonverbal communication messages act in
concert, information is communicated more effectively
Zara have there own ways to improve morale.</p>
<ol>
  <li>They are Direct about Everyone's
Responsibilities and Roles.</li>
<li>Exchange Ideas and Boost Rapport over
Coffee Breaks are there.</li>
<li>Weekly Touchpoint Meetings into Schedule.</li>
<li>Communication-Forward Team Building
Activities are held</li>
<li>Briefing</li>
</ol>
<p>With poor communication, employees may have a
harder time meeting expectations and catching up
with their deadlines, resulting in them getting
behind. This could leave them with a sense of
guilt, embarrassment or even low self-esteem</p>
      
      </section>
      </>
    ),
  },

  {
    id: "tommyHilfiger",
    title:
      "Tommy Hilfiger",
    content: (
      <>
      <section id="tommy">
        <h6>Market Interactions</h6>
        <p>Brand Style: Tommy Hilfiger has a cool American style that lots of people like.</p>
        <p>Who They're Talking To: They make clothes for young people and professionals who want to look fashionable.</p>
        <p>Where You Find Them: You can buy Tommy Hilfiger clothes in their stores, in big shops, or online.</p>
        <p>What They Sell: They sell clothes, shoes, bags, and even perfumes.</p>
        <p>Making You Interested: They show off their stuff in nice ways, like in stores or ads, to make you want to buy it.</p>
        <p>Staying Friends: They try to keep you interested in their brand by giving you special deals, talking to you on social media, and making your shopping experience personal.</p>
        <p>Being Creative: Sometimes they work with famous people or other brands to make their stuff even cooler and get people excited about it.</p>
        <h6>Market Interventions</h6>
        <p>Collaborations and Limited Editions: Partnering with celebrities, influencers, or other brands to create exclusive collections or limitededition pieces. This generates buzz and excitement around the brand, attracting new customers and retaining existing ones.</p>
        <p>Brand Ambassador Programs: Recruiting brand ambassadors who embody the Tommy Hilfiger lifestyle and values. These ambassadors can promote the brand through social media, events, and other marketing channels, connecting with their followers and driving sales.</p>
        <p>Pop-Up Shops and Experiential Events: Hosting pop-up shops or
experiential events in key cities or locations to engage with customers directly and create memorable brand experiences. These events can include interactive installations, workshops, and live performances to attract attention and generate sales.</p>
<p>Digital Innovation: Investing in digital innovation to enhance the online
shopping experience and reach a wider audience. This could involve
developing a user-friendly mobile app, implementing augmented reality
(AR) technology for virtual try-ons, or launching interactive social media
campaigns.</p>
<p>Sustainability Initiatives: Demonstrating a commitment to sustainability
through eco-friendly practices and product offerings. This could include
using sustainable materials, reducing waste in the supply chain, and
partnering with organizations focused on environmental conservation.</p>
<p>Localization: Tailoring products and marketing campaigns to suit the
preferences and cultural nuances of different regions or countries. This
ensures that Tommy Hilfiger remains relevant and resonates with local
customers, driving sales and brand loyalty.</p>
<p>Customer Feedback and Personalization: Collecting feedback from
customers through surveys, reviews, and social media interactions to
understand their preferences and improve products and services.
Implementing personalized marketing strategies based on customer data
to provide tailored recommendations and offers.</p>
<h6>Matrix based perspective to market
approach and selecting the desired
approach</h6>
<p>Market Segmentation Matrix: Tommy Hilfiger could analyze different
market segments based on demographics, psychographics, and behavioral
factors. They might evaluate segments such as age groups, lifestyles, and
spending habits. The matrix would assess the attractiveness of each
segment based on factors such as size, growth potential, competition, and
alignment with Tommy Hilfiger's brand values.</p>
<p>Competitive Positioning Matrix: Tommy Hilfiger would evaluate its
competitive position within each market segment compared to other
fashion brands. This assessment would consider factors such as pricing,
brand perception, product quality, and distribution channels. The matrix
would help identify where Tommy Hilfiger has a competitive advantage
and where it needs to improve to effectively compete.</p>
<p>Resource Allocation Matrix: Tommy Hilfiger would allocate resources
such as marketing budget, staffing, and product development efforts based
on the attractiveness of each market segment and its competitive
positioning. The matrix would help prioritize investments and ensure
resources are deployed effectively to maximize returns.</p>
<p>MarketApproach Selection: Based on the analysis of market segments,
competitive positioning, and resource allocation, Tommy Hilfiger would
select the most appropriate market approach for each segment. This could
involve strategies such as mass marketing, niche targeting, or
customization. The matrix-based perspective would help Tommy Hilfiger
make informed decisions and tailor its approach to the specific needs and
characteristics of each segment.</p>
<p>Implementation and Monitoring: Once the desired market approach is
selected, Tommy Hilfiger would implement strategies and initiatives to
execute the chosen approach. Regular monitoring and evaluation of key
performance indicators (KPIs) would allow for adjustments and
refinements to ensure the approach remains effective over time.</p>
<h6>Probity, Ethics and Transparency of the
brand with clients and fellow competition</h6>
<p>Probity: Tommy Hilfiger upholds high standards of integrity and honesty
in its business practices. This includes fair treatment of customers,
suppliers, and employees. For example, Tommy Hilfiger ensures
transparent pricing and adheres to ethical sourcing practices in its supply
chain.</p>
<p>Ethics: Tommy Hilfiger follows ethical guidelines that govern its
operations, ensuring compliance with laws and regulations. This includes
ethical sourcing of materials, fair labor practices, and environmental
sustainability initiatives. For instance, the company has policies in place to
ensure workers in its supply chain are treated fairly and work in safe
conditions.</p>
<p>Transparency: Tommy Hilfiger strives to be transparent in its
communications and operations. The company provides clear and
accurate information to customers regarding product details, pricing, and
policies. Additionally, Tommy Hilfiger publishes reports and updates on its
website to provide stakeholders with insight into its sustainability efforts,
corporate governance practices, and financial performance.</p>
<p>Customer Relations: Tommy Hilfiger maintains open and honest
communication with its clients, addressing their concerns and providing
assistance as needed. This includes responsive customer service, easy-tounderstand product information, and transparent return and exchange
policies.</p>
<p>Fair Competition: While Tommy Hilfiger competes in a competitive
market, it does so ethically and responsibly. The company adheres to laws
and regulations governing competition and avoids engaging in unethical
or anti-competitive practices. Tommy Hilfiger focuses on innovation,
product quality, and customer satisfaction to differentiate itself from
competitors.</p>
<h6>Overall observations of the brand during
store visit</h6>
<p>Chill Vibes: Walking into a Tommy Hilfiger store feels laid-back and cool.</p>
<p>Their Logo's Everywhere: You'll spot their red, white, and blue logo all over
the place.</p>
<p>Loads of Clothes: They've got tons of clothes, shoes, and accessories to
check out.</p>
<p>Friendly Folks: The people working there are nice and can help you find
stuff if you need it.</p>
<p>Looks Good: The way they set up the clothes makes them look really good,
like you're in a magazine.</p>
<p>Good Deals: Sometimes they have sales or cool deals, so keep an eye out
for those.</p>
<p>Cool Extras: Some stores have neat stuff like screens or pictures that tell
you more about Tommy Hilfiger.</p>
      </section>
      </>
    ),
  },

  {
    id: "analysis",
    title:
      "Multidisciplinary analysis of interfaces; supply chain Event management (SCEM) – RFID control theory",
    content: (
      <>
      <section id="multidisciplinary">
        <h6>Analyzing the interfaces between Supply Chain Event
Management (SCEM), Radio-Frequency Identification (RFID),
and control theory requires a multi-disciplinary approach.</h6>

<h6>KEY AREAS</h6>
<ul>
  <li><strong>Data Integration:</strong> Integrating data from RFID systems with SCEM platforms allows for
real-time tracking of goods, enabling proactive event management and decision-making.</li>
<li><strong>Predictive Analytics:</strong> Applying control theory principles to analyze RFID data within
SCEM systems can help predict supply chain events and optimize responses in advance.</li>
<li><strong>Process Optimization:</strong> Utilizing control theory algorithms to adjust parameters in SCEM
systems based on RFID data can optimise inventory levels, transportation routes, and
production schedules to improve overall supply chain performance.</li>
<li><strong>Risk Management:</strong> By combining RFID data with SCEM analytics and control theory
models, supply chain managers can better assess and mitigate risks such as disruptions,
inventory shortages, or delays.</li>
</ul>

<h6>SUPPLY CHAIN EVENT MANAGEMENT
(SCEM)</h6>

<p>This involves tracking and managing events throughout the supply chain to improve visibility,
responsiveness, and decision-making. SCEM systems capture and analyze real-time data to
identify disruptions, delays, or opportunities for optimization.</p>
<p>In event management, the supply chain involves the process of sourcing, procuring, and
managing all the necessary resources and services to execute an event successfully. This
includes everything from venue selection and setup, to catering, equipment rental, staffing,
transportation, and more. Each element of the event's supply chain must be carefully
coordinated to ensure that everything is delivered on time and within budget, ultimately
contributing to the seamless execution of the event.</p>

<h6>RADIO FREQUENCY IDENTIFICATION</h6>
<h6>1.INTRODUCTION</h6>

<p>Radio Frequency Identification (RFID) is a technology which allows contact less access to data
on a trans- ponder (also called tag or chip). Already in the late forties of the last century RFID
was used to identify friendly aircraft. Ongoing miniaturization and advance- ments in
technology have lead to smaller and cheaper tags, which have made widespread use of RFID
possible in supply chains. The benefits of RFID in supply chains are well documented. Large
retailers, e.g. Wal-Mart and the Metro Group as well as large consumer goods pro- ducers like
Procter & Gamble and Unilever, are amongst the early adaptors of the technology. Defence
Depart- ments also expect significant efficiency gains and cost reduction for their Military
Logistics Operations. Better stock keeping, reduced shrinkage, improved tracking, better
information flows along the supply chain and a higher service level are some of the benefits
attributed to the introduction of RFID. RFID is sometimes presented as a more sophisticated
barcode or simply as the natural evolution from a paper-based to an electronic auto-ID
technology. This analogy is dangerous, as it could result in inadequate risk management of
RFID projects and sys- tems. If not addressed, the specific nature of RFID, namely the wireless
interface and the small computa- tional footprint, might lead to security problems.</p>

<p>However, RFID specific security risks such as information leakage and data inconsistency
arise along the entire supply chain. Ignoring the RFID specific risks in a supply chain environment can become quite costly. A preliminary consid- eration of the security risks is a
prerequisite to achieve a successful RFID implementation. Rather surprisingly, the security
implications of RFID projects for the supply chain are rarely addressed in a structured manner,
but, if at all, on an ad hoc basis. First, we give a brief introduc- tion to Supply Chain
Management (SCM) and RFID, as well as to RFID specific supply chain setups. We explore the
possible relations between begin and malicious RFID- readers as well as genuine and forged
tags. The imple- mentation difficulty and the benefits for the attacker build the base for the
RFID risk classification. Finally we derive practical recommendations regarding risk
management in RFID supported supply chains.</p>

<h6>A. RFID Systems</h6>
<p>In a typical system tags are attached to objects. Each tag has a certain amount of internal
memory (EE- PROM) in which it stores information about the object, such as its unique ID
(serial) number, or in some cases more details including manufacture date and product
composition. When these tags pass through a field gener- ated by a reader, they transmit this information back to the reader, thereby identifying the object. Until recently the focus of RFID
technology was mainly on tags and readers which were being used in systems where relatively low volumes of data are involved. This is now chang- ing as RFID in the supply chain is
expected to generate huge volumes of data, which will have to be filtered and routed to the
backend IT systems.</p>

<p>To solve this problem companies have developed special software packages called savants,
which act as buffers between the RFID front end and the IT backend. Savants are the
equivalent to middleware in the IT industry.</p>

<h6>B. RFID Tags</h6>
<p>The heart of any RFID system is the tag, also known as the transponder. Two types of tags and
their variants – active and passive – dominate the marketplace and are designed for specific
applications. Active tags are battery powered with on-board battery power sources, contain up
to hundreds of kilobytes of memory and can communicate data over longer ranges than
passive tags. The tags are always on and always talking. Active tags, especially because of the
built-in batteries, are far more expensive than passive tags. Active tags have been used for
years and are typically used in long-range tracking applications and to track high-value
inventory.</p>

<h6>2.SUPPLY CHAIN MANAGEMENT</h6>
<p>The supply chain is a complex multi-stage process which involves everything from the
procurement of raw materials used to develop products, and their delivery to customers via
warehouses and distribution centres. Supply chains exist in service, manufacturing and retail
organizations. Although, the complexity of the chain may vary greatly from industry to industry
and firm to firm. Supply chain management (SCM) can be seen as the su- pervision of
information and finances of these materials, as they move through the different processes, by
coordi- nating and integrating the flows within and among the different companies involved.
The efficiency of the supply chain has a direct impact on the profitability of a company. It is no surprise therefore to find that many large corporate companies have made it a key part of their
strategy, and invested heavily in software systems (ERP, WMS.) and IT infrastructure designed
to control inventory, track products and manage associated finance.</p>

<h6>APPLICATION OF RFID IN SCM</h6>
<p>RFID provides a quick, flexible, and reliable electronic means to detect, identify, track, and
manage a va- riety of items. The technology is well-suited for many operations in all types of
industries provided that users develop new business processes to take advantage of RF- ID’s
special abilities. Merely substituting RFID for bar coding will not give users all the benefits that
the technology could provide. Many potential users of RFID technology try to make
comparisons between the relative cost of RFID and bar code, when comprehensive business
process return on investment (ROI) analyses should be conducted. In recent years,
interoperable products have emerged, helped by renewed standards efforts by EPC global and
other standards bodies. In addition, major sys- tems integrators have introduced RFID
offerings and products that can make the adoption of RFID, especially in the enterprise, more
straightforward as they build on existing and familiar systems. These efforts have enabled
many companies to implement RFID pilots in their organ- izations and begin to calculate the
ROI this technology can bring to their operations. The Proposed work chart diagram is given
below.</p>
<h6>OPTIMAL DESIGN OF SUPPLY CHAIN NETWORK</h6>
<p>The proposed work of optimization of Open loop Supply Chain Distribution network by using
RFID tech- niques flow chart are also given below. Here, we have used the RFID tags to form
the distance matrix of the all the customers distance. Then by using the random walker
method used to solve the problem of ATSP. Then we are going the validate the results with the
existing algorithm. The TSP has been studied with much interest within the last three to four decades. The majority of these works focus on the static and deterministic case of vehicle
routing in which all information is known at the time ofthe planning of the routes. In most real –
life applications though, stochastic and dynamic information occurs paral- lel to the routes
being carried out. Real – life examples of stochastic and dynamic routing problems include the
dis- tribution of oil to private house holds, the pick-up of courier mail and packages and the
dispatching of buses for the transportation of elderly and handicapped people. In these
examples the customer profiles (i.e. the time to begin service, the geographic location, the
actual demand etc.) may not be known at the time of the planning or even when service has
begun for the advance request cus- tomers. Two distinct features make the planning of high
quality routes in this environment much more difficult than it its deterministic counterpart;
firstly, the constant change, secondly, the time horizon. A growing number of companies offer
to service the customers within a few hours from the time the request is received. Naturally,
such customer service oriented policies increase the dy- namism of the system and therefore
its complexity. Dur- ing the past decade the number of published papers deal- ing with
dynamic transportation models has been growing.</p>
      </section>
      </>
    ),
      
  },
  {
    id: "google",
    title: "Google organisational culture",
    content: (
      <>
      <section id="google">
        <h6>INTRODUCTION</h6>
        <p>Google founded in 1998 by Larry Page and Sergey Brin, is a multinational technology
company, has evolved far beyond its origins as a search engine. The company is deeply
involved in various technological domains, including artificial intelligence, cloud computing,
online advertising, and the development of software and hardware products. Google's search
engine remains one of the most widely used globally, and its suite of services, including
Gmail, Google Maps, YouTube, and the Android operating system, continues to shape the
digital landscape.
</p>
<p>In recent times, Google has been focusing on advancements in machine learning, AI-driven
technologies, and sustainability initiatives. The company has also been actively involved in
the development of innovative products and services, reflecting its commitment to staying at
the forefront of technological innovation.</p>
<h6>ORGANISATIONAL STRUCTURE</h6>
<p>Alphabet Inc. was established and became the parent company of Google after restructuring
the business organization. In the new organizational design, the company retains its
organizational structure characteristics, considering that its core business processes remain
the same, including online advertising, cloud computing, digital content distribution, and
consumer electronics. The multinational business develops its corporate structure to match
the complexity of Alphabet’s operations spanning different regional markets. Considering the
rapid technological development involved in the industry and the aggressiveness of
competitors, Google’s company structure is expected to continue changing over time.</p>
<p>In this case of Google, the business structure design supports innovation and creativity.
Innovation is a characteristic of the corporate culture (business culture) of Google (Alphabet).
In this regard, the company structure and culture facilitate product development for growth
and competitiveness in the information technology and services industry. Product
development is an approach to growing the business, as identified in Google’s (Alphabet’s)
generic competitive strategy and intensive growth strategies. Also, the organizational
structure optimizes the business to address competitors, like the digital advertising
businesses of Facebook, eBay, and others; the consumer electronics operations of Apple,
Microsoft, Samsung, and Sony; the media streaming services of Netflix, Disney, and Amazon;
and the Internet services of Verizon.
</p>
<h6>Google’s Organisational Structure Type &
Characteristics</h6>
<p>Google has a cross-functional matrix organizational structure. The company maintains
flatness as a major factor that influences functions throughout the corporate structure. The
following are the main characteristics of Google’s structure:</p>
<ol>
  <li>Function-based</li>
  <li>Product-based</li>
  <li>Flatness</li>
</ol>
<p><strong>Function-Based :</strong> This structural characteristic refers to the grouping of resources and
processes based on business function. For example, Google’s organizational structure
involves a group or department for Global Marketing, and another group for Finance. An
executive heads each of these groups. This function-based grouping is responsible for
Alphabet’s organization-wide strategic decisions and direction. For instance, Google’s
(Alphabet’s) operations management approaches are developed and defined through these
function-based groups at the corporate headquarters. This characteristic of the company’s
corporate structure influences business processes, such as top-down and bottom-up
communications, as well as strategic management to solve problems encountered at various levels and areas of Google’s organization. The following business function-based groups or
departments are in Google’s structure:</p>
<ol>
  <li>Office of the CEO</li>
  <li>Business</li>
  <li>Corporate Development</li>
  <li>Global Affairs</li>
  <li>Marketing</li>
</ol>
<p><strong>Product-Based :</strong> Google’s products are developed through the support of product-based
groups in the company’s corporate structure. This structural feature addresses the need to
develop innovative and competitive products, such as the ones enumerated in the marketing
mix or 4Ps of Google (Alphabet). For example, the company has a group or division for Cloud
operations, and another group for Artificial Intelligence operations. An executive heads each
of these groups. Through this characteristic of Alphabet’s organizational structure, the
business satisfies current and future market demand and consumer preferences regarding
consumer electronics and information technology products, such as Search, mobile apps,
and smartphones. Thus, the company structure helps fulfill Google’s (Alphabet’s) mission
statement and vision statement. The company’s product lines considered in the business
structure are aimed at enhancing people’s access to organized information, especially
information through the online environment. Google’s structure has the following productbased groups or divisions:</p>
<ul>
  <li>Platforms and Ecosystems</li>
  <li>Devices and Services</li>
  <li>Ads and Commerce</li>
  <li>Search, News, and Assistant</li>
  <li>Cloud</li>
  <li>Artificial Intelligence</li>
  <li>YouTube</li>
</ul>
<p><strong>Flatness:</strong> This structural characteristic involves the minimization of vertical hierarchical lines
of communication and authority, despite Google’s function-based groups. For example,
through its flatness, the company’s organizational structure enables employees, teams, and
groups to bypass middle management and communicate directly with upper management
regarding non-critical issues. Also, in this way, Google’s corporate structure facilitates
meetings and information-sharing among employees and teams belonging to different areas
of the organisation.
</p>

<h6>Human Resource Management</h6>
<p>Google, as a large and innovative company, addresses problems and concerns among its
employees through a combination of structured processes, open communication, and a
commitment to maintaining a positive and inclusive work environment. Some of the ways
Google addresses issues and supports its employees include:</p>
<p><strong>1. Open Communication Channels: -</strong> Google encourages open and transparent
communication between employees and leadership. Regular team meetings, town hall
sessions, and feedback mechanisms provide opportunities for employees to express
concerns or raise issues.</p>
<p><strong>2. Employee Assistance Programs: -</strong>  Google typically offers employee assistance programs
(EAPs) that provide confidential counseling and support services. These programs are
designed to help employees manage personal or work-related challenges.</p>

<p><strong>3. Diversity and Inclusion Initiatives: -</strong> Google places a strong emphasis on diversity and
inclusion. The company actively works to create a workplace where employees from diverse
backgrounds feel included and valued. There are initiatives and employee resource groups
dedicated to supporting underrepresented groups.</p>

<p><strong>4. Internal Support Resources: - </strong> Google has internal resources such as HR teams and
employee relations specialists who are available to assist with problem-solving and conflict
resolution. These teams work to address issues in a fair and impartial manner.
</p>

<p><strong>5. Anonymous Reporting Channels: -</strong> Google typically provides anonymous reporting
channels for employees who wish to report concerns or issues without fear of retaliation. This
encourages a culture of trust and ensures that problems can be addressed discreetly.
</p>

<p><strong>6. Employee Feedback Surveys: -</strong> Google often conducts employee surveys to gather
feedback on various aspects of the workplace. These surveys help identify areas of
improvement and allow the company to proactively address concerns.</p>

<p><strong>7. Mental Health and Well-being Support: -</strong> Google places a strong emphasis on employee
well-being, including mental health. The company provides resources and programs to
support mental health, and there is an awareness of the importance of work-life balance.</p>

<p><strong>8.Learning and Development Opportunities: -</strong>  Google invests in the learning and
development of its employees. Offering opportunities for skill development and career
growth helps employees feel supported and valued.
</p>

<p><strong>9.Flexible Work Arrangements: -</strong> The company recognizes the importance of work-life
balance and typically offers flexible work arrangements. This can include options for remote
work, flexible hours, and other accommodations.</p>

<p><strong>10. Conflict Resolution Processes: -</strong>  Google typically has structured processes for conflict
resolution. This may involve mediation, facilitated discussions, or other mechanisms to
address and resolve workplace conflicts.
</p>

<h6>Management style</h6>
<p>All Google employees follow a rule called the 70/20/10 rule, under which they are expected to devote
70 percent of every work day to whichever projects are assigned by management, 20 percent of each
day to new projects or ideas related to their core projects, and 10 percent to any new ideas they want
to pursue.</p>
<p>Indeed, Google's work environment promotes a work-life balance by focusing on the major aspects of
positive work environment that promote employee engagement and organizational identity. These
strategies include organizational culture, retention strategies, career development, leadership style,
and employee engagement.</p>
<p>There are also generous rewards and awards for implementing innovative ideas. Though employees
perceive such systems as perks, the company sees these systems as “the seed corn for its future,” as it
would ensure that entrepreneurial employees implement their innovative ideas within the company rather
than go out and create a competing new venture. It is estimated that about 50 percent of Google’s new
products are generated using the ‘free’ time that employees are granted.
</p>

<h6>LEADERSHIP THAT EMPOWERS</h6>
<p>Interestingly, the choice of a new product or strategy is not dictated by the founders nor is it based on the
grandeur of its sponsor’s title. Ideas must compete on their merits, in a ‘Darwinian environment’ of survival
of the fittest. Many of Google’s popular products and strategies came on the market through this process,
as exemplified by the creation of Gmail by Paul Buchheit, or the informal motto of the company (“Don’t be
evil”) coined by Buchheit and Amit Patel. Though this slogan does not appear in the exposition of the
official management philosophy of Google, it was a major theme in the founders’ letter in connection with
their 2004 IPO, so much so that this letter was subsequently called the “Don’t-Be-Evil Manifesto.” The
basic thrust of this manifesto is that one should not exploit customers’ ignorance, but should be ready to
forego short-term gains if this is what is required to provide sustainable services to society. One specific
implication of this belief is that the company will not strive to get the authentic search content confused
with or influenced by the advertised material.</p>

<p><strong>Schmidt’s leadership practices could be summarized in the following five precepts
followed by google:</strong></p>

<ol>
  <li>Get to know your employees.</li>
  <li>Create new ways to reward and promote your high-performing employees.</li>
  <li>Let your employees own the problems you want them to solve.</li>
  <li>Allow employees to function outside the company hierarchy.</li>
  <li>Have your employees’ performance reviewed by someone they respect for their
objectivity and impartiality.</li>
</ol>

<h6>The happiness trickles down and out the door</h6>

<p>The leadership practices of the triumvirate cascaded throughout the organization and had an enormous impact on
the cadres. According to Laszlo Bock, Google’s innovative Senior Vice-President for Human Resources, the teams
working under the best managers perform better, are happier, and stay longer with the company. He therefore
initiated a project to identify the key qualities of such managers based on an analysis of data available and collected
internally. His research team has come up with the following eight qualities of leader-managers at Google (listed in
the order of importance as identified by the study):</p>

<ol>
  <li>Be a good coach</li>
  <li>Empower your team and don’t micromanage</li>
  <li>Express interest in your team members’ success and well-being</li>
  <li>Be productive and results-oriented</li>
  <li>Be a good communicator and listen to your team</li>
  <li>Help your employees with career development</li>
  <li>Have a clear vision and strategy for the team</li>
  <li>Have technical skills so you can advise the team</li>
</ol>

<p>The qualities identified are amazingly simple and do not require a manager to change his or her personality. Rather,
the changes required are a matter of behavioral changes, which can be accomplished by regular and deliberate
practice. Bock simplifies them further: “The two most important things I can do are to make sure that I have some
time for them and to be consistent.” It may be noted, ironically, that though Google is a hi-tech company, having the
technical skills has emerged as the least important among the eight qualities of leadership. Obviously, the quality of
any technology will only be as good as the quality of the people who operate it.</p>

<h6>PROBLEMS AND SOLUTIONS</h6>

<p>While Google is a highly successful company, like any large organization, it faces its share of
challenges. Here are some potential problems and general solutions that companies like Google
might encounter:</p>

<p><strong>Problem:</strong> Workplace Diversity and Inclusion</p>
<p><strong>Solution:</strong> Google has actively worked on diversity and inclusion initiatives. Continued efforts in
recruiting from diverse talent pools, creating an inclusive culture, and fostering diversity at all levels
are ongoing solutions.</p>
<p><strong>Problem:</strong> Privacy Concerns</p>
<p><strong>Solution:</strong> Google addresses privacy concerns through transparency, providing users with control over
their data, and adhering to privacy regulations. Clear communication about data usage and
continuous improvements in privacy features are essential.
</p>
<p><strong>Problem:</strong> Competition and Antitrust Issues</p>
<p><strong>Solution:</strong> Google faces scrutiny regarding antitrust concerns. Collaboration with regulatory bodies,
transparent business practices, and fair competition are vital. Implementing measures to ensure a
level playing field and addressing concerns raised by regulators are ongoing efforts.
</p>
<p><strong>Problem:</strong> Workplace Culture Criticism</p>
<p><strong>Solution:</strong> Addressing workplace culture concerns involves transparent communication, taking
employee feedback seriously, and implementing changes as needed. Google has been known to
adjust policies and practices in response to internal and external feedback.</p>
<p><strong>Problem:</strong> Ethical Considerations in AI</p>
<p><strong>Solution:</strong> With its focus on artificial intelligence, Google grapples with ethical considerations.
Establishing clear ethical guidelines for AI development, engaging in open dialogue with stakeholders,
and seeking external input are strategies to address these concerns.</p>
<p><strong>Problem:</strong> Employee Burnout</p>
<p><strong>Solution:</strong> Google addresses employee burnout by emphasizing work-life balance, offering wellness
programs, and encouraging breaks. Continuous monitoring of workloads, providing resources for
stress management, and fostering a supportive work environment are ongoing solutions.</p>
<p><strong>Problem:</strong> Political and Regulatory Challenges</p>
<p><strong>Solution:</strong> Google navigates political and regulatory challenges by engaging in constructive dialogue
with policymakers, advocating for fair policies, and adapting to comply with evolving regulations.</p>
<p><strong>Problem:</strong> Ad Fraud and Brand Safety</p>
<p><strong>Solution:</strong> Given its involvement in online advertising, Google addresses ad fraud and brand safety
through advanced algorithms, strict ad policies, and collaboration with advertisers to ensure the
integrity of its advertising platforms.</p>
<p><strong>Problem:</strong> In conclusion, Google's organizational structure is characterized by a unique blend of
innovation, flexibility, and a commitment to fostering a dynamic work environment. While it may not
strictly adhere to a completely flat structure, Google emphasizes a more open and less hierarchical
culture, encouraging collaboration and creativity across various levels of the organisation: Technology
and Cybersecurity Threats
</p>

<p><strong>Solution:</strong> :Google invests heavily in cybersecurity measures to protect user data and ensure platform
security. Regular audits, employing advanced security technologies, and educating employees about
cybersecurity risks are essential strategies.
</p>

<p><strong>Problem:</strong> Balancing Innovation with Regulation</p>
<p><strong>Solution:</strong> Google must balance its innovative pursuits with compliance with regulations. Collaborating
with regulatory bodies, staying informed about legal requirements, and proactively addressing
compliance challenges are ongoing solutions.
</p>
<br></br>
<p>In conclusion, Google's organizational structure is characterized by a unique blend of innovation,
flexibility, and a commitment to fostering a dynamic work environment. While it may not strictly adhere
to a completely flat structure, Google emphasizes a more open and less hierarchical culture,
encouraging collaboration and creativity across various levels of the organisation.
</p>
      </section>
      </>
    )
      
  },
  {
    id: "ai",
    title: "Artificial intelligence vs Human intelligence",
    content: (
      <>
      <section id="artificial">
        <h6>Artifi cial Intelligence (AI):</h6>
        <p>Artifi cial Intelligence refers to the development of computer systems that can perform tasks that
typically require human intelligence. These tasks include learning, reasoning, problem-solving,
perception, language understanding, and speech recognition. AI systems are designed to analyze and
interpret data, adapt to changing circumstances, and improve their performance over time. They can
operate in a variety of domains, from simple rule-based tasks to complex decision-making processes,
often using machine learning algorithms.</p>

<h6>Human Intelligence:</h6>
<p>Human Intelligence is the cognitive ability inherent in humans that encompasses various mental
abilities, including reasoning, problem-solving, learning, perception, and emotional understanding. It
involves the capacity to acquire knowledge, apply logic, adapt to new situations, and interact
eff ectively in a social and cultural context. Human intelligence is characterized by creativity,
consciousness, self-awareness, and the ability to experience emotions. It enables individuals to
navigate complex environments, make decisions based on ethical considerations, and engage in a
wide range of intellectual and emotional experiences.</p>

<h6>COMPARISON</h6>
<p><strong>1. Learning Ability:</strong></p>
<ul>
  <li><strong>AI:</strong> AI systems excel in specifi c tasks and can learn from large datasets through machine learning
algorithms. They can recognize patterns, make predictions, and improve performance over time.</li>
<li><strong>Human Intelligence:</strong> Humans possess a remarkable capacity for generalization and learning
across a wide range of tasks. Human learning involves abstract thinking, creativity, and adaptation
to diverse situations.</li>
</ul>

<p><strong>2. Processing Speed:</strong></p>
<ul>
  <li><strong>AI:</strong> AI systems can process vast amounts of data at incredible speeds, making them effi cient for
certain computational tasks.</li>
<li><strong>Human Intelligence:</strong> While not as fast as computers for certain calculations, human brains are
highly parallel and can process information from various sources simultaneously.</li>
</ul>

<p><strong>3. Creativity:</strong></p>
<ul>
  <li><strong>AI:</strong> AI can generate creative outputs, such as art, music, or literature, based on learned patterns.
However, it lacks the intrinsic emotional and experiential understanding that often accompanies
human creativity.</li>
<li><strong>Human Intelligence:</strong> Humans exhibit creativity that arises from a combination of emotions,
experiences, and abstract thinking. Human creativity often involves novel ideas, emotional
expression, and the ability to imagine beyond existing patterns.</li>
</ul>

<p><strong>4. Emotional Intelligence:</strong></p>
<ul>
  <li><strong>AI:</strong> AI lacks true emotional intelligence. While some AI systems can recognize and respond to
emotions, they don't genuinely experience emotions.</li>
<li><strong>Human Intelligence:</strong> Humans possess emotional intelligence, allowing them to understand,
express, and manage their emotions and those of others. Emotional intelligence plays a crucial
role in social interactions and decision-making.</li>
</ul>

<p><strong>5. Adaptability:</strong></p>
<ul>
  <li><strong>AI:</strong> AI systems excel in specifi c tasks they are designed for but may struggle when faced with
unfamiliar or unexpected situations outside their programmed scope.</li>
<li><strong>Human Intelligence:</strong> Humans exhibit a high degree of adaptability. They can learn new skills,
solve novel problems, and navigate diverse and dynamic environments.</li>
</ul>

<p><strong>6. Ethical Considerations:</strong></p>
<ul>
  <li><strong>AI:</strong> Ethical concerns arise in AI, especially in decision-making processes, biases in algorithms, and
potential societal impact. Ensuring ethical AI requires careful design and oversight.</li>
<li><strong>Human Intelligence:</strong> Humans grapple with ethical dilemmas as well, but ethical considerations
are often deeply rooted in cultural, moral, and philosophical frameworks.</li>
</ul>

<p><strong>7. Consciousness:</strong></p>
<ul>
  <li><strong>AI:</strong> AI lacks consciousness and self-awareness. It operates based on programmed algorithms and
does not possess subjective experiences.</li>
<li><strong>Human Intelligence:</strong> Human consciousness involves self-awareness, introspection, and a
subjective experience of the world.</li>
</ul>

<p>In summary, while AI has made remarkable advancements and excels in specifi c tasks, it lacks the
depth and breadth of human intelligence. Human intelligence is marked by adaptability, emotional
understanding, creativity, and consciousness—qualities that remain distinct and complex. The ongoing
development and ethical use of AI will continue to raise important questions about the relationship
between artifi cial and human intelligence.</p>

<h6>Types of AI</h6>

<p><strong>Narrow or Weak AI:</strong></p>
<ul>
  <li>Narrow AI is designed for a specific task or a set of closely related tasks. It operates within a
predefined scope and lacks the ability to generalize beyond its designated function.</li>
</ul>

<p><strong>General or Strong AI:</strong></p>
<ul>
  <li>General AI refers to a system with the ability to understand, learn, and apply intelligence
across a broad range of tasks, similar to human intelligence. This level of AI remains largely
theoretical and does not yet exist.</li>
</ul>

<p><strong>Reactive Machines:</strong></p>
<ul>
  <li>Reactive machines are AI systems that operate based on predefined rules and respond to
specific inputs. They do not have the ability to learn from experience or adapt to new
situations.</li>
</ul>

<p><strong>Limited Memory:</strong></p>
<ul>
  <li>Limited Memory AI, such as machine learning models, can learn from historical data and
make predictions. These systems retain information for a certain period but do not possess
the extensive memory capabilities of humans.</li>
</ul>

<p><strong>Theory of Mind:</strong></p>
<ul>
  <li>The concept of Theory of Mind in AI involves developing systems that can understand and
attribute mental states to others. This capability is essential for understanding human
behavior, intentions, and emotions.</li>
</ul>

<p><strong>Self-aware AI:</strong></p>
<ul>
  <li>Self-aware AI is a theoretical concept where AI systems would possess a level of
consciousness and self-awareness. This level of AI remains speculative and is a topic of
philosophical debate.</li>
</ul>

<h6>Types of Human Intelligence</h6>
<p><strong>Analytical Intelligence:</strong></p>
<ul>
  <li>Analytical intelligence involves problem-solving, logical reasoning, and critical thinking. It is
the ability to analyze information, make decisions, and solve complex problems.</li>
</ul>

<p><strong>Creative Intelligence:</strong></p>
<ul>
  <li>Creative intelligence is the ability to think creatively, generate innovative ideas, and approach
challenges with originality. It involves imagination, artistic expression, and the creation of new
solutions.</li>
</ul>

<p><strong>Practical Intelligence:</strong></p>
<ul>
  <li>Practical intelligence, also known as street smarts, involves the ability to navigate real-world
situations effectively. It includes practical problem-solving, adaptability, and interpersonal
skills.</li>
</ul>

<p><strong>Emotional Intelligence:</strong></p>
<ul>
  <li>Emotional intelligence encompasses the ability to understand, manage, and express
emotions effectively. It involves empathy, self-awareness, and the ability to navigate social
interactions.</li>
</ul>

<p><strong>Social Intelligence:</strong></p>
<ul>
  <li>Social intelligence is the capacity to understand and navigate social dynamics. It includes
recognizing social cues, building relationships, and effectively communicating with others.</li>
</ul>

<p><strong>Cultural Intelligence:</strong></p>
<ul>
  <li>Cultural intelligence involves the ability to understand and adapt to different cultural contexts.
It includes awareness of cultural norms, customs, and effective cross-cultural communication.</li>
</ul>

<p><strong>Ethical Intelligence:</strong></p>
<ul>
  <li>Ethical intelligence involves the ability to make moral and ethical decisions. It includes
understanding ethical principles, considering the consequences of actions, and making
choices aligned with ethical values.</li>
</ul>


<p>Artificial intelligence (AI) can play a significant role in reducing bias, but it also has the potential to
perpetuate or exacerbate bias if not carefully designed and implemented. Here are some ways AI can
contribute to reducing bias:</p>

<p><strong>Diverse and Representative Data:</strong></p>
<ul>
  <li>AI algorithms learn from data, so using diverse and representative datasets is crucial.
Ensuring that the data used for training AI models includes a broad range of demographics
helps reduce biases that may be present in a more limited dataset.</li>
</ul>

<p><strong>Fair and Transparent Algorithms:</strong></p>
<ul>
  <li>Designing algorithms that are fair and transparent is essential. This involves using techniques
that ensure decisions are not discriminatory and can be easily understood by users.
Implementing fairness-aware machine learning approaches can help achieve this goal.</li>
</ul>

<p><strong>Bias Detection and Mitigation:</strong></p>
<ul>
  <li>Implementing mechanisms to detect and mitigate bias during the development and
deployment of AI systems is important. Regularly auditing models for bias and addressing any
identified issues can contribute to fairness.</li>
</ul>

<p><strong>Explainable AI (XAI):</strong></p>
<ul>
  <li>Employing explainable AI techniques allows users to understand how AI systems make
decisions. This transparency helps identify and rectify any biased patterns in the decision-making process.</li>
</ul>

<p><strong>Diversity in AI Development Teams:</strong></p>
<ul>
  <li>Ensuring diversity within the teams developing AI systems can bring a range of perspectives
and insights. This diversity helps in identifying and addressing potential biases during the
development process.</li>
</ul>

<p><strong>Continuous Monitoring and Improvement:</strong></p>
<ul>
  <li>Implementing a continuous monitoring system to assess the performance of AI models over
time is crucial. Regular updates and improvements based on feedback and new data
contribute to reducing bias and Standards.</li>
<li>Establishing and adhering to ethical guidelines and standards in AI development is important.
This includes guidelines for fairness, accountability, and transparency to ensure responsible
AI practices.</li>
</ul>

<p><strong>User Feedback and Involvement:</strong></p>
<ul>
  <li>Collecting user feedback and involving users in the development process helps identify any
unintended biases in AI systems. Users can provide insights into potential issues and
contribute to improving system fairness.</li>
</ul>

<p><strong>Bias Education and Awareness:</strong></p>
<ul>
  <li>Educating AI developers, data scientists, and stakeholders about the risks and consequences
of bias is essential. Raising awareness about bias in AI systems promotes a proactive
approach to addressing and preventing it.</li>
</ul>

<h6>CAN AI REPLACE HUMAN INTELLIGENCE ?</h6>
<p>The idea of artificial intelligence (AI) replacing human intelligence raises complex ethical, social, and
practical considerations. Here are some potential pros and cons.</p>
<p><strong>Pros:</strong></p>
<p><strong>Efficiency and Productivity:</strong></p>
<ul>
  <li><strong>Pro:</strong> AI systems can perform repetitive and mundane tasks more efficiently than humans,
leading to increased productivity in various industries.</li>
</ul>

<p><strong>Precision and Accuracy:</strong></p>
<ul>
  <li><strong>Pro:</strong> AI can analyze vast amounts of data with precision and accuracy, making it valuable for
tasks such as data analysis, pattern recognition, and decision-making.</li>
</ul>

<p><strong>24/7 Availability:</strong></p>
<ul>
  <li><strong>Pro:</strong> AI systems do not require rest or breaks, allowing for continuous operation and
availability, especially in applications like customer service and data processing.</li>
</ul>

<p><strong>Handling Dangerous Tasks:</strong></p>
<ul>
  <li><strong>Pro:</strong> AI can be deployed for tasks that are dangerous or harmful to humans, such as
exploring hazardous environments, handling toxic substances, or performing tasks in extreme
conditions.</li>
</ul>

<p><strong>Medical Applications:</strong></p>
<ul>
  <li><strong>Pro:</strong> AI has the potential to contribute significantly to medical diagnostics, personalized
medicine, and drug discovery, improving healthcare outcomes.</li>
</ul>

<p><strong>Cons:</strong></p>
<p><strong>Job Displacement:</strong></p>
<ul>
  <li><strong>Con:</strong> Automation and AI can lead to job displacement in certain industries, potentially causing
economic challenges and social inequality.</li>
</ul>

<p><strong>Ethical Concerns:</strong></p>
<ul>
  <li><strong>Con:</strong> AI decision-making can raise ethical concerns, especially when it comes to issues like
bias, privacy infringement, and accountability. AI systems may lack a moral compass and may
not make decisions aligned with human values.</li>
</ul>

<p><strong>Creativity and Emotional Understanding:</strong></p>
<ul>
  <li><strong>Con:</strong> AI struggles with tasks that require creativity, emotional understanding, and complex
social interactions—areas where human intelligence excels.</li>
</ul>

<p><strong>Loss of Human Connection:</strong></p>
<ul>
  <li><strong>Con:</strong> Increased reliance on AI could lead to a reduction in meaningful human interactions,
affecting relationships and social dynamics.</li>
</ul>

<p><strong>Security Risks:</strong></p>
<ul>
  <li><strong>Con:</strong> AI systems can be vulnerable to security threats, including hacking and manipulation.
Ensuring the security of AI systems is a significant challenge</li>
</ul>

<p><strong>Unemployment and Economic Disparity:</strong></p>
<ul>
  <li><strong>Con:</strong> The widespread adoption of AI could contribute to unemployment, potentially leading to
economic disparity and social unrest if not managed properly.</li>
</ul>

<p><strong>Dependency and Loss of Skills:</strong></p>
<ul>
  <li><strong>Con:</strong> : Overreliance on AI may lead to a decline in certain human skills and competencies,
potentially affecting education and personal development.</li>
</ul>

<p><strong>Unintended Consequences:</strong></p>
<ul>
  <li><strong>Con:</strong> The complexity of AI systems makes it challenging to predict all potential
consequences. Unintended outcomes and ethical dilemmas may arise.</li>
</ul>

<h6> FUTURE OF HUMAN VS AI</h6>

<p><strong>Collaborative Coexistence:</strong></p>
<ul>
  <li>One plausible future involves a collaborative coexistence where humans and AI work together
synergistically. AI systems may complement human skills, assisting in decision-making,
problem-solving, and automating routine tasks.</li>
</ul>

<p><strong>AI as Tools and Assistants:</strong></p>
<ul>
  <li>AI could serve as advanced tools and assistants, enhancing human capabilities across
various domains. This scenario emphasizes the idea that AI is a tool for human empowerment
rather than a replacement for human intelligence.</li>
</ul>

<p><strong>Specialized Expertise:</strong></p>
<ul>
  <li>AI systems may continue to specialize in specific domains, becoming expert systems in areas
such as medicine, finance, or logistics. Humans would leverage these AI specialists to
enhance their expertise and decision-making.</li>
</ul>

<p><strong>New Job Opportunities:</strong></p>
<ul>
  <li>The integration of AI could lead to the creation of new job opportunities in fields related to AI
development, maintenance, and oversight. Humans may be involved in designing, training,
and ensuring the ethical use of AI systems.</li>
</ul>

<p><strong>Enhanced Personalization:</strong></p>
<ul>
  <li>AI-driven technologies may contribute to enhanced personalization in various aspects of life,
from healthcare to entertainment. AI could tailor experiences based on individual preferences,
leading to more personalized and efficient services.</li>
</ul>

<p><strong>AI in Creative Endeavors:</strong></p>
<ul>
  <li>AI might become more involved in creative endeavors, contributing to fields such as art,
music, and literature. Collaborations between humans and AI may result in novel and
innovative creations.</li>
</ul>

<p><strong>Ethical and Regulatory Focus</strong></p>
<ul>
  <li>As AI becomes more integrated into society, there may be an increased focus on ethical
considerations and regulatory frameworks. Ensuring the responsible and ethical use of AI will
be a critical aspect of its future development.</li>
</ul>

<p><strong>Human-AI Integration:</strong></p>
<ul>
  <li>Advances in human-AI integration, such as brain-machine interfaces, could lead to new forms
of communication and interaction between humans and AI. This could blur the lines between
human and artificial intelligence.</li>
</ul>

<p><strong>Continuous Learning and Adaptation:</strong></p>
<ul>
  <li>Future AI systems may exhibit improved learning capabilities, allowing them to adapt more
seamlessly to dynamic and evolving environments. This adaptability could enhance their
utility in various applications.</li>
</ul>

<p><strong>Addressing Bias and Fairness:</strong></p>
<ul>
  <li>Efforts to address bias in AI algorithms and ensure fairness in decision-making processes will
likely intensify. There will be a growing emphasis on developing AI systems that are
transparent, accountable, and unbiased.</li>
</ul>

<p><strong>Public Awareness and Education:</strong></p>
<ul>
  <li>As AI becomes more integrated into daily life, there may be an increased emphasis on public
awareness and education about AI technologies. Understanding the capabilities and
limitations of AI will be crucial for informed decision-making.</li>
</ul>
<br></br>
<p><strong>It's important to approach the future of human vs AI with a focus on responsible development,
ethical considerations, and the well-being of society. While AI presents exciting possibilities,
careful planning and thoughtful integration are essential to navigate the challenges and
opportunities that lie ahead.</strong></p>

    </section>
    </>
    ),
      
  },
  {
    id: "nike",
    title:
      "Reviewing of Nike supply chain and Stake holder engagement ",
    content: (
      <>
      <section id="nike">
        <p>Nike is a globally recognized brand known for its innovative sports apparel and
footwear. Founded in 1964, Nike's core values include innovation, sustainability,
and empowerment. The company off ers a wide range of products for various
sports and activities, leveraging cutting-edge technologies to enhance athletic
performance. Nike's marketing campaigns, featuring high-profile athletes and
inspirational messaging, have contributed to its iconic status in the sports
industry</p>
<h6>Understanding the market:</h6>
<p>Nike operates globally in the competitive athletic footwear and apparel market,
targeting athletes of all levels and lifestyle consumers. It faces competition
from major brands like Adidas and Under Armour. With a strong brand
reputation, diverse product lines, and extensive retail presence, Nike maintains
its market leadership by emphasizing innovation, quality, and style. Expanding
into emerging markets further enhances its global reach and growth prospects.</p>
<h6>1. Engagement of Key Stakeholders:</h6>
<p>Nike recognizes the importance of engaging with a diverse set of stakeholders
to ensure alignment with sustainability goals and address concerns eff ectively.
Key stakeholders include suppliers, employees, communities, NGOs, and
customers. Nike employs various communication channels such as stakeholder
forums, workshops, surveys, and online platforms to engage with these
stakeholders. Through open dialogue and collaboration, Nike fosters trust,
builds relationships, and promotes a shared understanding of sustainability
challenges and opportunities.</p>
<h6>2. Overcoming Potential Objections to Participation:</h6>
<p>Nike proactively addresses potential objections to stakeholder participation
by promoting transparency, providing incentives for engagement, and actively
listening to stakeholder concerns. By demonstrating commitment to
sustainability, acknowledging stakeholder perspectives, and implementing
feedback mechanisms, Nike encourages stakeholders to actively participate in
sustainable supply chain initiatives. Additionally, Nike leverages its influence
and resources to support stakeholders in overcoming barriers to participation,
such as financial constraints or technical limitations.</p>
<h6>3. RASCI & Supplier’s Role During Sourcing:</h6>
<p>Nike utilizes the RASCI framework (Responsible, Accountable, Supportive,
Consulted, and Informed) to clarify roles and responsibilities throughout the
sourcing process. Suppliers play a crucial role in implementing sustainability
practices by adhering to Nike's Supplier Code of Conduct, which outlines
expectations related to labor standards, environmental protection, ethical
business practices, and compliance with regulations. Nike works closely with
suppliers to provide guidance, training, and support in implementing
sustainable practices and continuously improving performance.</p>
<h6>4. Sources of Information:</h6>
<p>Nike gathers information from various sources to inform decision-making and
continuous improvement in its sustainable supply chain initiatives. These
sources include sustainability reports, supplier assessments, industry
benchmarks, stakeholder feedback, market research, and regulatory updates. By
analyzing data and insights from these sources, Nike identifies trends, assesses
risks, and identifies opportunities for innovation and collaboration.</p>
<h6>5. Supplier Appraisal:</h6>
<p>Nike conducts regular supplier appraisals to evaluate performance against
sustainability criteria. This includes assessing suppliers' environmental impact,
labor practices, ethical standards, and compliance with regulations. Nike
employs performance metrics and key performance indicators (KPIs) aligned
with its sustainability goals to measure supplier performance objectively.
Suppliers are provided with feedback on their performance and support in
addressing areas for improvement to ensure alignment with Nike's sustainability
objectives.</p>
<h6>6. Developing Market Enquiries (RFI & EOI):</h6>
<p>Nike utilizes Requests for Information (RFI) and Expressions of Interest (EOI) to
gather information from potential suppliers regarding their sustainability
practices, capabilities, and willingness to participate in Nike's sustainable
supply chain initiatives. These inquiries help Nike assess the sustainability
performance and commitment of prospective suppliers and identify partners
who share its values and goals.</p>
<h6>7. Understanding Market Structure:</h6>
<p>Nike conducts thorough market analysis to understand the structure of its
supply chain, including the geographic distribution of suppliers, market trends,
and emerging sustainability practices. By analyzing market dynamics, Nike
identifies opportunities for collaboration, innovation, and improvement.
Understanding the market structure enables Nike to make informed decisions,
mitigate risks, and optimize its supply chain for sustainability and
competitiveness.</p>
<h6>8. Understanding Market Dynamics:</h6>
<p>Nike closely monitors market dynamics such as changes in consumer
preferences, regulatory developments, and industry trends related to
sustainability. By staying abreast of market developments, Nike can anticipate
challenges, identify opportunities, and adapt its strategies accordingly.
Understanding market dynamics enables Nike to remain responsive to
stakeholder expectations, mitigate risks, and drive continuous improvement in
its sustainable supply chain initiatives.</p>
<h6>9. Total Supply Chain Analysis:</h6>
<p>Nike conducts comprehensive analyses of its entire supply chain, from raw
material sourcing to product distribution, to identify opportunities for
optimization and sustainability improvement. This includes assessing the
environmental and social impacts of each stage of the supply chain, identifying
hotspots, and prioritizing areas for intervention. By taking a holistic approach to
supply chain analysis, Nike ensures that sustainability considerations are
integrated into every aspect of its operations, driving positive environmental
and social outcomes.</p>
      </section>
      </>
    ),
      
  },
  {
    id: "raymonds",
    title: "Raymonds",
    content: (
      <>
      <section id="raymond">
        <p>The largest integrated 
manufacturer of fabric in the 
world that is based in Mumbai 
Maharashtra. It has over 60% 
share in suiting in India. It is 
also the India’s biggest 
woolen and fabric maker. 
Raymond was incorporated in 
1925 and is a leading Indian 
textile, major company and a 
part of global conglomerate 
Raymond group.</p>

<p><strong>AJ RAYMOND is the founder of Raymond 
fine fabrics. Raymond had set up a ready-made garment plant at Thane.</strong></p>

<p>In 2011, the company launched 600 
Raymond shop outlet. In 2013, Raymond 
premium April crossed Rs.1 billion mark and 
the company marked the pan India launch of 
makers brand.</p>

<h6>MISSION</h6>
<p>Raymond, A diversified 
group shaping a stronger 
and better tomorrow. 
“ The future lies in the 
imagining the 
unimaginable ! At re-, 
imagined Raymond, we 
aspire to just the same. 
We aim to create not just 
offerings but an 
organisation that is built 
for the future</p>

<h6>THE 7 P’S OF 
MARKETING MIX</h6>
<ol>
  <li>PRODUCT</li>
  <li>PRICE</li>
  <li>PLACE</li>
  <li>PROMOTION</li>
  <li>PEOPLE</li>
  <li>PROCESS</li>
  <li>PHYSICAl DAMAGE</li>
</ol>

<h6>PRODUCT</h6>
<p>It produces suiting fabric, with the 
capacity of producing 31 million meters 
of wool and wool -blended fabrics.</p>

<p><strong>PRODUCT CATEGORIES</strong></p>
<ol>
  <li>Total textiles solutions.</li>
  <li>Fabrics (worsted , denim and shirting)</li>
  <li>Apparels (tailored, clothing, jeans, wear, and dress 
shirts)</li>
<li>Wollen outerwear</li>
<li>Furnishings</li>
<li>Engineering(files, cutting wools, hand tools and 
agriculture tools and auto components)</li>
<li>Personal care(Park Avenue and Kama Sutra)</li>
<li>Prophylactic(Kama Sutra and surgical gloves)</li>
</ol>

<h6>PRICE</h6>
<p>In India, shootings and trousers begin from rupees thousand going all the 
way up to Rs.10,000, depending on the type of fabric, stitching and 
workmanship in world, retail outlet, location, colour and size. Besides these 
Raymonds through its flagship, Raymond and park avenue cater to get 
higher spending is customer will do not mind being extra premium for a 
product offering superior quality stitching, wrinkle free and other features.</p>

<h6>PLACE</h6>
<p>Raymond has got a significant presence 
not only in India but also a global imprint. 
Raymond has made its presence felt in 
over 55 countries.</p>

<h6>PROMOTION</h6>
<p>Raymond promotional marketing efforts follow a well structured approach 
to clearly relay product information based on several parameters to clearly 
defined and segregated market strategy.
The “Complete Man “ tagline is very popular.
They do advertising through newspapers ,tv, Radio, Magazines, Fashion 
channels.</p>

<h6>COLLABORATIONS</h6>
<p>Raymond is among the largest integrated manufacturers 
of worsted fabrics in the world, Raymond Ltd, on some of 
the most highly respected Apple brands in its portfolio 
like Manzoni, park avenue , ColorPlus, Parx and GAS</p>

<h6>PEOPLE</h6>
<p>Level of hierarchy In Raymond is as follows
Group chief financial officer, CEO ,Director, 
Chairman, Managing director, President, Company 
secretary.</p>

<h6>PROCESS</h6>
<p>Most of the Raymond’s fabric is manufactured and 
distributed from Vapi and Chhindwara. The 
manufacturing of these two plants involve dyeing, recombing, spinning ,weaving and mending, finishing 
and folding.</p>

<h6>PHYSICAL EVIDENCE</h6>
<p>Raymond have been analogous with class ,elegance and 
individuality which is evident in their mens 
fashion.Raymond with its 97 year old expertise is a textile 
powerhouse with modern infrastructure aking with being 
reputed.</p>
      </section>
      </>
    )
  },
  {
    id: "legal",
    title: "Legal policies and best practices",
    content:
      "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior.",
  },
//   {
//     id: "visual",
//     title:
//       "Visual merchandise",
//     content:
//       "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity. Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.Put in 100+ hours of research per case study checking trends, testing ideas, and working with remote teams. Turned weak posts into 3x engagement wins and up to 300% growth in followers and sales.",
//   },
//   {
//     id: "VM",
//     title: "Materials used in VM",
//     content: (
//         <>
//             <h6>INTRODUCTION</h6>
//             <p>Visual merchandising involves using different
// materials and elements to create visually appealing
// displays and improve the overall shopping
// experience for customers. These documents help
// showcase the product, tell a story, and grab the
// buyer's attention. Here are some common materials
// used in visual sales:</p>
// <p><strong>Mannequins - Forms</strong></p>
// <p>Mannequins, body shapes
// and skirts are essential for
// displaying clothing and
// accessories, allowing
// customers to visualize
// how items will look once
// they are put on.</p>

// <p><strong>PROPS</strong></p>
// <p>Props can range from
// simple items like crates,
// baskets, and stands to
// more complex items
// like themed
// decorations, sculptures
// or installations that
// create an atmosphere or
// specific context.</p>

// <p><strong>Signage and Graphics</strong></p>
// <p>Clear and eye-catching
// signs, banners, posters
// and graphics help convey
// important
// information,promotions
// and brand messages to
// customers. 
// </p>


// <p><strong>Lighting</strong></p>
// <p>The right lighting can have a huge
// impact on the visual appeal of a
// display. Different types of lighting,
// such as spotlights, ambient lighting,
// and accent lighting, can create mood
// and focus on specific products.</p>

// <p><strong>Mirror</strong></p>
// <p>Mirrors are often strategically placed
// to help customers see themselves
// wearing or using a product. They can
// also be used to create the illusion of a
// larger space. 
// </p>

// <p><strong>Shelves</strong></p>

// <p>Racks, display tables and shelves
// are well designed to help organize
// products, making it easy for
// customers to access products. They
// also contribute to the overall
// aesthetic of the display.
// </p>


// <p><strong>Flooring</strong></p>
// <p>Flooring materials, textures, and
// patterns can complement the overall
// aesthetic and theme of a display
// area. Different flooring choices can
// influence how customers perceive
// the products and the brand.
// </p>


// <p><strong>Textures and Fabrics</strong></p>
// <p>Incorporating different textures and
// fabrics can add depth and tactile
// appeal to displays. These materials
// can be used as backdrops,
// tablecloths, or drapery.
// </p>


// <p><strong>Graphics and Branding</strong></p>
// <p>Graphics, including logos, product
// images, and brand messages,
// contribute to brand identity and
// recognition. They can be applied to
// various surfaces like walls, windows,
// and floors.
// </p>

// <p><strong>Interactive Elements</strong></p>
// <p>Interactive displays, touchscreens,
// and digital interfaces engage
// customers and provide additional
// information about products,
// promotions, or brand stories.
// </p>


// <p><strong>Natural Elements</strong></p>
// <p>Natural elements such as plants,
// flowers, and natural materials like
// wood and stone can add an organic
// and refreshing touch to displays.
// </p>


// <p><strong>Technology</strong></p>
// <p>Modern visual merchandising often
// integrates technology, such as
// digital screens, augmented reality,
// and virtual reality, to provide
// interactive and dynamic displays.
// </p>
//         </>
//     ),
      
//   },
  // {
  //   id: "evolution",
  //   title:
  //     "Evolution of luxury brands",
  //   content:
  //     "Achieved consistent growth across platforms, increased saves, shares, and conversions while maintaining brand authenticity.",
  // },
  {
    id: "display",
    title: "Display dissapointment",
    content: (
                <>
                <section id="display">
                    <h6>what is the greatest
challenge a visual
merchandiser faces
when it comes  to
window displays ?
Elaborate .</h6>

<p>The greatest challenge for a visual merchandiser when it comes to
window displays is navigating the fine line between artistic creativity
and practical considerations. Balancing the need for attention
grabbing, on-brand visuals with the limitations of space, changing
trends, and the preferences of the target audience is a complex
task that requires a unique blend of artistic flair</p>

<p><strong>Story Telling</strong></p>
<p>Effective window displays tell a story that resonates
with customers. Whether it's showcasing a collection,
highlighting a theme, or communicating a specific
message, the visual merchandiser must use design
elements such as colors, props, and layout to convey a
narrative that engages and resonates with viewers.</p>


<p><strong>Limited space and layout</strong></p>
<p>Limited Space and Layout : Storefront windows often have
limited space, which means that the visual merchandiser
must work within these constraints to create a display that is
both visually appealing and effectively communicates the
brand's story or the current promotion. Deciding what
products to feature and how to arrange them to maximize
impact can be a complex task. </p>


<p><strong>Being creative and practicle both</strong></p>
<p>Conveying  the brand's message, and entice them
to enter the store. The visual merchandiser wants
to create eye-catching and unique displays, they
also need to consider practical aspects such as
product visibility, ease of maintenance, and
adherence to safety regulations.
</p>


<h6>what do customers expect
froma display ? Discuss
why they expect the same.</h6>

<p>Customers have specific expectations when it
comes to window displays, and meeting these
expectations can greatly influence their
perception of a brand and their likelihood to
enter a store. Here are some key things that
customers expect from a window display:</p>
<ol>
    <li>Visual appeal </li>
    <li>Relevance</li>
    <li>Creativity and Innovation.</li>
    <li>Storytelling</li>
    <li>Product showcase</li>
    <li>Variety</li>
    <li>Aspirational value</li>
    <li>Quality</li>
    <li>Engagement</li>
    <li>Brand values</li>
</ol>

<p>Customers' expectations from window displays
stem from their desire for engaging, relevant, and
enjoyable shopping experiences. Meeting these
expectations helps brands stand out in a
competitive market, establish emotional
connections with customers, and create positive
associations that drive foot traffic and foster
brand loyalty.</p>

<p>Window displays makes it easyfor customers to make
discisions on what to buy what to not.  
</p>

<h6>Name the stores among which the
survey was conducted. What themes
were on diaplay ,and which display was
appriciated the most? Why?</h6>

<p><strong>Pre diwali theme and Autumn winter
displays were there in stores.</strong></p>

<p>Lifestyle was apprecited the most because it had most
organised Autumn winter displays as compared to  other
two similar brands. Customers said that the displays were
not up to the nark in terms of their expectations. 
most of customers looked for new arrivals iand latest
collection from them but they were dissapointed with
pantaloons and shopperstop.</p>
<p>They gave many reviews like mannequins were not
grouped properly acc to the theme and storytelling , the
background was overshadowing the merchandise , color
coordination was bad so overall it was fail.
</p>
                </section>
                </>
    ),
      
  },
  {
    id: "men",
    title:
      "Men buy women shop",
    content: (
        <>
        <section id="men">
            <h6>Why do most stores display merchandise on hang rods rather than in stacks?</h6>
            <p><strong>Visibility and Accessibility:</strong> Hanging merchandise on rods provides better visibility of individual items. Shoppers can easily see the colors, patterns, and styles without needing to dig through stacks of clothing.</p>

            <p><strong>Organization:</strong> Hanging clothes on rods allows for a more organized and tidy display. Each item has its designated place, making it easier for both shoppers and store staff to find and restock items.</p>

            <p><strong>Prevention of Damage:</strong> Stacking clothing items can lead to wrinkles, creases, and potential damage to delicate fabrics.</p>

            <p><strong>Prevention of Theft:</strong> Hanging merchandise on rods can also serve as a deterrent to theft. It's more difficult for shoplifters to conceal items when they are hanging individually on hangers, compared to grabbing items from stacks.</p>

            <p><strong>Fitting Rooms:</strong> Many women's clothing items need to be tried on before purchase to ensure proper fit. Hanging items are easier to take into fitting rooms and put back afterward, as opposed to items stacked in piles.</p>

            <p><strong>Enhanced Presentation:</strong> Hanging merchandise provides an opportunity for stores to create visually appealing displays.</p>

            <p><strong>Brand Image:</strong> Displaying merchandise on hang-rods can be a part of a store's branding strategy. It can convey a sense of sophistication, professionalism.</p>

            <p><strong>Space Efficiency:</strong> Stacking clothes in piles requires more floor space and can make a store feel cluttered.</p>


            <h6>Visit a popular mall in your city and see the various types of length of hang rods</h6>

            <p>Straight hang rods</p>
            <p>Waves hang rods</p>
            <p>Round hang rods</p>

            <h6>A women's shopping experience is different from mans shopping behaviour. Discuss.</h6>

            <p><strong>Mens Behaviour</strong></p>
            <ul>
                <li>Want their shopping experience simple and straightforwward</li>
                <li>Focused on the goal-purchase</li>
                <li>Interested in the result - not captivated by the process.</li>
                <li>Stop shopping after they find te first workable product.</li>
                <li>Tend to purchase when the need is immediate</li>
                <li>Tend to think logically when making purchase decisions.</li>
                <li>Less interested in discounts, deals, or out-of-season sales.</li>
            </ul>

            <p><strong>Womens Behaviour</strong></p>
            <p>Women shopping is based on future needs. Tend to follow trends and fashion and make the purchasing decision with them in mind. Enjoy the shopping process as a whole
                and tend to spend more time shopping. More selective and more likely to buy a product that fits their requirements.
                Buy gifts for others too.
                Make impulse purchases.
                More responsive to marketing emails, coupons and sales. More respective to other people's opinions. Need online chat feature,
                discussion forums, high-quality visuals, customer reviews.
            </p>
        </section>
        </>
    ),
      
  },
  {
    id: "Loreal",
    title: "Loreal ",
    content: (
      <>
      <section id="loreal">
        <h6>1. Distinguish between thecore,tangible and augmented productthatL’Oréalsells.</h6>
        <p><strong>Three levels of a product</strong></p>
        <ul>
          <li><strong>The core product</strong> is defined as the benefit that the
product brings to the customer.</li>
<li><strong>The actual product</strong> refers to the tangible object
and relates to the physical quality and the design</li>
<li><strong>The augmented product</strong> consists of the measures
taken to help the consumer put the actual
product to use.</li>
        </ul>
        <h6>1.2. A hair careproduct’s nameis a centralproduct
attribute. What arethe key branding decisionsthat
L’Oréal’s marketing managers haveto make?</h6>
<p>Branding increases trust, and trust is a pillar of customer loyalty.
Your identity attracts customers because they can tell what you
stand for, which helps them feel connected to you. When
customers feel connected to a business, they're more likely to
be loyal</p>
<ul>
  <li>Age Perfect Makeup</li>
  <li>Colour Riche</li>
  <li>Magic Nude</li>
  <li>Summer Belle</li>
  <li>Bambi Eye</li>
  <li>Double Extend</li>
  <li>Paradise</li>
  <li>Unbelieva-Brow</li>
</ul>
<h6>LOREAL Strategy: Universalisation</h6>
<p>Loreal focus on differences in desires, needs and traditions. To offer tailor-made beauty,
and meet the aspirations of consumers in every part of the world. L'Oréal is driven by this
vision of the world. For L'Oréal, universalization is about having a truly global presence
through a unique organization.</p>
<p>Marketing managers come upwith the product name that connects with customers
emotions and match their thoughts to solve their inferiority .Few product names of loreal
are:-</p>

<h6>3.L’Oréal marketsits hair careproducts worldwide. What
major considerations doesthefirm facein determining
globalproduct decisions?</h6>
<p><strong>L’Oréal has chosen a unique strategy:
Universalization. It means globalization that captures,
understands and respects differences. Differences in
desires, needs and traditions. To offer tailor-made
beauty, and meet the aspirations of consumers in
every part of the world. L’Oréal is driven by this vision
of the world.</strong></p>
<p>All over considering the fact that loreal makes decisions
keeping in mind world wide customers while naming the
products and considering all the women.Marketing managers
follow naming strategy, Tangible and intangible product
launches. The company has been successful in the aspects to
cater their products to world wide customers.</p>
<p><strong>For L’Oréal, universalization is about having a
truly global presence through a unique
organization. We are strategically
concentrated yet operationally decentralized.
Local teams are empowered. They ensure that
in every country we are close and relevant to
our consumers.</strong></p>
      </section>
      </>
      ),
  },
  
  // {
  //   id: "mobilink",
  //   title: "Mobilink",
  //   content:
  //     "Designed content systems, posting calendars, and brand voice guides that aligned marketing goals with audience behavior.",
  // },
  
  {
    id: "lV",
    title: "LV Buisness Plan",
    content: (
      <>
      <section id="lv">
        <h6>INTRODUCTION</h6>
        <p><strong>Who are we ?</strong></p>
        <p>A French luxury fashion house and company founded in 1854 by Louis vuitton. The 
label’s LV monogram appears on most of its products, ranging from luxury bags and 
leather goods to ready to wear shoes, perfumes , watched jewellery, accessories, 
sunglasses and books.</p>

<p><strong>Company Overview</strong></p>
<p>One of the world’s leading international fashion houses.</p>
<p>Sells its products through standalone boutiques, lease departments in high -end 
departmental stores and through e- commerce section of its website</p>

<h6>Vision And Mission</h6>

<p><strong>Mission</strong></p>

<p>The mission of the LVMH group is to represent the most refined qualities of 
Western "Art de Vivre" around the world. LVMH must continue to be synonymous 
with both elegance and creativity. Our products, and the cultural values they 
embody, blend tradition and innovation, and kindle dream and fantasy.</p>

<p><strong>Vision</strong></p>
<p>LVMH has successfully preserved a family spirit that places priority on long-term 
vision. The Group s vocation is to ensure the development of each of its Houses 
while respecting their identities and their autonomy, providing the resources 
needed to create, produce and market their products and services through 
carefully selected channels. The three fundamental values articulated by Bernard 
Arnault are shared by every member of LVMH. These three imperatives inspire 
excellence and constitute the pillars of our performance and long-term success.</p>

<p>Presentations are communication tools that can be used as demonstrations, 
lectures, speeches, reports, and more. Most of the time, they’re presented before 
an audience.</p>

<h6>Market Analysis</h6>
<p><strong>Target market</strong></p>

<p><strong>Demographic segmentation :</strong>  Louis Vuitton’s target market consists of individuals 
who have a higher income and thus they have found that the higher the income of 
an individual, the higher the propensity to purchase luxury goods. .The products 
can also be bought for personal use or for gift. Therefore, for this segmentation, 
our targeted clients are both sex, aged between 25-50 years old, who have earned 
an income between 30-50 lakhs yearly and most of them would be graduate 
professionals with sense of self-worth and high social status.</p>

<p><strong>Geographic segmentation :</strong> This segmentation will help the brand to do better 
positioning by enhancing its status symbols in its wealthy market such as China, 
Japan, India and other developing countries. One of the most important markets of 
Louis Vuitton is not from Paris where its original is, but Asia. The brand has pursued 
a consistent approach to developing the foreign market, never compromising in 
the face of di cult operational obstacles, and, as always, controlling every aspect 
of the business.</p>

<h6>CONSUMER BEHAVIOUR</h6>

<p><strong>1.Problem recognition stage:</strong> The people who believe that carrying a branded 
product will enhance their status and wealth as well as fashionable.Most of the 
users are mature (25+), female, working population with stable financial 
background.</p>

<p><strong>2.Information search:</strong> Once the consumer has recognized a problem, they start to 
search for information on products and services that can solve that problem. First 
time buyer will engage a little bit of time to recall their awareness about brands. 
And each brand will carry a series of models which are suitable for di erent 
occasions. They are tote bags, evening clutches, top handles and even accessories.</p>

<p><strong>3.Evaluating and selecting alternatives:</strong> At this time, the consumer compares the 
brands and products that are in their evoked set. They will have some choices in 
mind for a luxury bag such as Louis Vuitton, Channel, Burberry, Gucci.</p>

<p><strong>4.Outlet selection and product:</strong> For branding and luxury handbag 
boutiques like Louis Vuitton, they are located in prestige shopping malls, whereby 
the customers are being well-taken care of and being served as a queen when 
shopping. Therefore, we will never experience that an LV boutiquek outlet is 
located in any wet-markets or any neighbour-hood shopping market. 
</p>

<p><strong>5.Post purchase process:</strong> The customer, having bought a product, may feel that an 
alternative would have been preferable. In these circumstances that customer will 
not repurchase immediately, but is likely to switch brands next time. As mentioned 
above, 65% of correspondents of those who have owed an LV bag in our survey 
don’t want to be loyal with the brand and tend to select another brand for their 
next purchase.</p>

<h6>COMPETITOR ANALYSIS</h6>

<p><strong>HERMES:</strong> It is well-known for their portfolio which produces about 14 products like 
ties, scarves, leather goods, apparel for men and women, jewelry, perfume, gloves, 
watches, footwear, tableware, and decorative items.</p>

<p><strong>GUCCI:</strong>  The brand of Gucci is ranked 38th in the world during the year 2015. The 
products of Gucci are of highest quality and it is the most luxurious items in the 
fashion market. Very few companies match the standards of Gucci in the fashion 
world.</p>

<p><strong>PRADA:</strong> Prada is a leading player in the world of luxury. It is located in Italy. Their 
portfolio includes manufacturing various products like clothing, fashion 
accessories, cosmetics, jewelry, perfumes, and handbags. Prada has powerful 
skilled employees to take up the experimentation of various products.</p>

<p><strong>CHANNEL:</strong> Has a total brand value of $7 billion. It is ranked 80th among the world’s 
most valuable brand. It is popular for its comfortable and functional clothes that 
carry a perfect style. Due to their brand value and various products, Chanel is 
considered one of the top luxury brands in the world.
</p>

<h6>SWOT</h6>

<p><strong>Strengths</strong></p>
<ol>
  <li>High level of brand recognition and brand value of USD 33,6 billion[1]</li>
  <li>Effective implementation of celebrity endorsement strategy</li>
  <li>E cient collaboration with top designers worldwide</li>
  <li>High level of customer loyalty</li>
</ol>

<p><strong>Weakness</strong></p>
<ol>
  <li>Overly expensive product prices</li>
  <li>Lack of product innovation over the years</li>
  <li>Weak online presence and online sales</li>
  <li>Limited distribution channel – selling products through own stores only.</li>
</ol>

<p><strong>Opportunities</strong></p>
<ol>
  <li>Potential in Asia in general and in China and India in particular</li>
  <li>Formation of strategic collaboration with other companies in other industries 
targeting the same customer segment</li>
<li>Revamping the brand image to make it more attractive to Millenials and 
Generation Z</li>
<li>Development of new products and services applying Louis Vuitton competitive 
advantages.</li>
</ol>

<p><strong>Threats</strong></p>
<ol>
  <li>Increase in the cases of counterfeit of Louis Vuitton products</li>
  <li>Global economic and/or financial crisis similar to crisis of 2008 – 2010</li>
  <li>Intensification of competition, specifically from emerging economies</li>
  <li>Increase in the popularity of substitute fashion products and service</li>
</ol>

<h6>ENVIRONMENTAL SCAN</h6>

<p><strong>SOCIOLOGICAL:</strong> The luxury buyers are shifting to a di erent direction that Louis 
Vuitton was not expecting. Logo- free pieces is shared by a growing number of 
wealthy shoppers, who prefer to search for unique, hard to find pieces instead of 
highly recognizable handbags from big recognisable brands . As Louis Vuitton, is 
trying to boost their sales, luxury consumers are also spending their dollars into 
experiences rather than on goods. Things such as an extravagant island.</p>

<p><strong>TECHNOLOGICAL :</strong> Luxury is a synonym with Louis Vuitton and needs to serve like 
so. We live in a world where technology reflects purchasing power and exclusivity. 
In 2017 Louis Vuitton wanted to reflect their traveler's heritage with the release of 
the Tambour Smart Watch and the Horizon. Earphones because they travel with 
you. These accessories are equipped with Bluetooth technology. Created to take 
phone calls, listen to music, multitask and be alert without the look of popular Air 
pods. But with the exclusive design that Louis Vuitton grants. The traveler's 
location is now synchronised with hot spots in more than seven capitals 
worldwide. </p>

<p><strong>ECONOMIC:</strong> Despite a noisy year in global stock markets and trade tensions. There 
is only one branch of the world economy that came out of 2018 literally unscathed: 
the luxury goods sector. LVMH, the world's largest luxury conglomerate, posted a 
record revenue of $53.4 billion, this was a 9% increase from 2017.18% of the sales, 
which are $9.6 billion, were net profits.</p>

<p><strong>ECOLOGICAL:</strong> Louis Vuitton is in the process of implementing a responsible 
sourcing program for all raw materials. In 2018, Louis Vuitton reached the LIFE 
2020 target of 70% of leather goods tanneries becoming Leather Working Group 
certified. At the same time, the House's jewelry activities have obtained the 
Responsible Jewelry Council certification, and diamonds are
certified by Kimberley Process as conflict free. Louis Vuitton is finding new 
alternatives to raw materials that bring an equivalent or higher quality but with the 
goal of lowering environmental footprints. The LVMH Eco-Material Library is 
working on educating creative teams on the use of innovative and eco-friendly 
materials. one of Louis Vuitton strong commitments, is making sure these 
processes of cutting raw materials.</p>

<p><strong>POLITICAL:</strong> Louis Vuitton is just finishing their new factory in the U.S outside of 
Fort Worth, Texas. A large ranch just outside of Keene, about 28 miles south of 
downtown Fort Worth, has been purchased by Louis Vuitton for construction of a 
leather goods workshop to make luggage and purses.</p>

<p><strong>LEGAL:</strong> In January 2016 LVMH lost for the first time in the District Court. Louis 
Vuitton filed formal claims for trademark dilution, violation of fair use, trademark 
infringement and copyright infringement, against My Other Bag. This brand 
introduces itself as an "eco-friendly canvas bag with a designer twist". And its 
products price in a very low range from $28 - $55 compared to Louis Vuitton. The 
article states: "obvious di erences in My Other Bag's mimicking of Louis Vuitton's 
mark, the lack of market proximity between the products at issue, and minimal, 
unconvincing evidence of consumer confusion compel a judgment in favor of My 
Other Bag on
Louis Vuitton's trademark infringement claim."</p>

<p><strong>ETHICAL:</strong> Louis Vuitton views protecting the environment as not simply an 
obligation, but as source of competitiveness. Vuitton's success over the years has 
depended directly on preserving and respecting the natural resources they use to 
make their products. Taking environmental factors into account in their production 
processes makes their products more reliable and appealing for consumers. As well 
as setting the example for their competitors.</p>

<h6>ECONOMICS OF BUSINESS</h6>

<p><strong>Louis Vuitton’s E-commerce Revenue Model</strong></p>

<p>The companies e-commerce revenue model is strictly the sale of its leather goods.
Louis Vuitton’s site brings in as much money as some of its biggest bricks-and
mortar shops, according to the firm’s communications director Antoine Arnault.</p>
<p>LVMH is very selective of the sales figures they post on their corporate site, making 
it di cult to determine the exact profit earned from its EC channel. However, on 
April 18,2012 the company posted its earnings from the first Quarter of 2012.</p>
<p>The group’s revenue (for the LVMH conglomerate) was up an astonishing 25 
percent in Q1, totaling a healthy $8.6 billion.</p>

<h6>MARKETING PLAN</h6>

<p><strong>Product strategy:</strong></p>
<p>Louis Vuitton is a premium luxury brand that sells finest products. It makes 100% 
pure leather products and pays utmost care to not let be the designs and make of 
the product easily imitable. Louis Vuitton has consciously chosen to only make 
handmade products and not make machine made. The company hires finest 
craftsmen and ensures that the product is completely unique.</p>

<p><strong>Pricing strategy:</strong></p>
<p>Louis Vuitton uses value based pricing in its marketing mix for its products. Since 
customers perceive the company’s products as high value products, the customers 
are willing to pay the amount.</p>

<p><strong>Place and distribution strategy:</strong></p>
<p>Their products are not sold at any departmental stores. The company believes in 
having their own stores. Louis Vuitton have their highly specialized sales persons 
trained to treat their customers with utmost care. They treat their customers with 
high warmth and provide personalised attention.
</p>

<p><strong>Promotion and advertisements strategy:</strong></p>
<p>Louis Vuitton employs famous musicians, actors and models in their marketing 
campaigns. Some of the well-known personalities who have been associated with 
the brand are Jennifer Lopez, Kate Moss, etc. Louis Vuitton Is a luxury brand and 
hence the celebrities make a better emotional connect with the celebrities.</p>

<h6>DESIGN AND DEVELOPMENT</h6>
<p>The design depicted a Japanese-inspired flower motif, chiefly created to prevent 
any duplicity of the Parisian company's designer luggage. This iconic LV logo has 
now become synonymous with class, comfort, grandeur and luxury.</p>
<p>With a brand value of over $51 million in 2020, Louis Vuitton is the most valuable 
luxury brand in the world.</p>
<p>The company operates in 50 countries, has a retail network of 5003 stores 
worldwide and earned 44,7 billion euros in revenue for 2020.</p>
<p>One of its latest flagship stores was inaugurated in February last year, in Japan.</p>

<p>Business in Asia is booming for Louis Vuitton and other luxury brands. Countries 
such as Japan, China, India and Singapore have welcomed Louis Vuitton.</p>

<p>The brand opened its first store in Japan in 1918 and up until the early 2000s, the 
Country of the Rising Sun accounted for more than half of its sales.</p>

<p>China is another success story for the brand. The French leader entered the 
Chinese market in 1992 and has seen a steady rise in its sales there. How else to 
show success and status than to flaunt an elegant Louis Vuitton bag on your arm?
</p>

<h6>Georges Vuitton — developing the brand</h6>
<p>When Louis passed away at 70, his son, Georges took his place at the helm of the 
company.</p>
<p>His father established the company, but Georges developed it into a global brand.</p>
<p>The travel trunks made by the Vuitton company were sturdy and luxurious looking 
which attracted burglars. With the goal to protect the traveler’s belongings from 
burglars, Georges designed a new lock for the brand’s trunks.</p>
<p>After years of development, the locking system, which is still used today, proved 
revolutionary, making the Vuitton trunks impossible to be picked by burglars.</p>
<p>In 1896, to honor his father’s legacy, Georges introduced the first LV monogram. 
The monogram was patterned with LVs, quatrefoils, and flowers.</p>

<h6>From Louis Vuitton, the company to LVMH, the luxury brand 
powerhouse</h6>
<p>The LVMH conglomerate came to be in 1987 when Louis Vuitton merged with 
champagne and cognac producer Moët Hennessy.</p>
<p>In the following years, LVMH acquired over 70 brands becoming the world’s largest 
and most valuable luxury goods conglomerate.</p>
<p>Here are some of the most famous luxury brands that LVMH has acquired so far:</p>
<ul>
  <li>Dom Pérignon (vintage Champagne)</li>
  <li>Givenchy (fashion, cosmetics and fragrances)</li>
  <li>Guerlain (perfume and cosmetics)</li>
  <li>Celine (ready-to-wear and leather luxury goods)</li>
  <li>Loewe (ready-to-wear and leather luxury goods)</li>
  <li>Marc Jacobs (fashion)</li>
  <li>Sephora (multinational beauty chain)</li>
  <li>TAG Heuer (luxury watch)</li>
  <li>Bulgari (jewelry)</li>
  <li>Christian Dior (fashion, cosmetics and fragrances)</li>
  <li>Ti any & Co. (jewelry)</li>
</ul>

<h6>ORGANISATIONAL FEASIBILITY</h6>
<p><strong>Business model</strong></p>
<p>Louis Vuitton, a luxury fashion brand and a subsidiary of the LVMH Group, operates 
under a compelling and e ective business model. Utilizing the Business Model 
Canvas framework, we can dissect the company’s success into these nine 
elements:</p>
<ol>
  <li><strong>Value Proposition:</strong> Louis Vuitton o ers high-quality, luxury products that 
combine style, prestige, and exclusivity. This attracts loyal customers who seek 
unique designs and superior craftsmanship, reinforcing the brand’s strong 
reputation in the luxury market.</li>
<li><strong>Customer Segments:</strong> Louis Vuitton caters to a luent customers seeking high
end fashion, leather goods, and accessories. Its primary target audience includes 
high-net-worth individuals, celebrities, and fashion-conscious consumers from 
around the world.</li>
<li><strong>Channels:</strong> The brand utilizes both online and o line channels for distribution. 
Their brick-and-mortar stores, located in prestigious shopping districts worldwide, 
provide a luxury shopping experience. Additionally, their e-commerce platform 
enables convenient online shopping for customers.</li>
<li><strong>Customer Relationships:</strong> Louis Vuitton fosters strong customer relationships by 
o ering personalized services and engaging with customers through its retail 
stores, exclusive events, and online platforms. The brand’s trained sales associates 
ensure a seamless shopping experience, maintaining a high level of customer 
satisfaction.</li>

<li><strong>Revenue Streams:</strong> Louis Vuitton generates revenue from the sale of luxury 
goods, including handbags, footwear, apparel, accessories, jewelry, and timepieces. 
The brand also derives income from licensing agreements and collaborations with 
other brands.</li>

<li><strong>Key Resources:</strong> Louis Vuitton’s key resources include its skilled artisans, 
innovative product designers, exclusive manufacturing facilities, and extensive 
supply chain network. Additionally, its strong brand identity and reputation are 
integral to its continued success.
</li>

<li><strong>Key Activities:</strong> The company’s primary activities include designing, 
manufacturing, and marketing of luxury products. They also invest in research and 
development, ensuring innovation and creativity in new product o erings. Louis 
Vuitton’s continuous e orts to uphold its brand image through store ambience, 
marketing campaigns, and celebrity endorsements contribute to its overall 
success.</li>

<li><strong>Key Partners:</strong> Louis Vuitton’s partnerships range from suppliers to designers and 
celebrities. Collaborations with renowned designers and artists keep products 
fresh and innovative, while strategic partnerships with suppliers ensure high
quality materials that contribute to the brand’s value proposition.</li>

<li><strong>Cost Structure:</strong> The brand incurs significant costs in design, production, 
marketing, and retail operations. They invest substantially in employing skilled 
artisans, procurement of top-quality materials, and maintaining their exclusive 
stores. However, these costs contribute to Louis Vuitton’s overall luxury branding, 
justifying the premium prices charged for their products.</li>
</ol>

<h6>Organisational Type</h6>
<p><strong>DECENTRALISED ORGANISATION </strong></p>
<p>structure and operating principles ensure that our Maisons are both autonomous 
and responsive. This allows them to be extremely close to customers, to ensure 
that rapid, effective and appropriate decisions can be made. This approach also 
sustains the motivation of employees, encouraging them to show true 
entrepreneurial spirit.</p>

<p><strong>SUPPLY CHAIN</strong></p>
<p>To achieve certification the team focused on two key components in the supply 
chain:</p>
<ul>
  <li>Inventory and supplies: precise management of sales forecasts and inventory 
quality enables the House to use maritime shipping for part of its international 
shipments.</li>
<li>Logistics and transportation: Louis Vuitton uses external partners who are 
regularly challenged against environmental criteria in requests for proposals.</li>
</ul>
<p>For logistics, partners work together to drive continuous improvements, mainly to 
reduce water, electricity and packaging consumption. All Louis Vuitton logistics 
platforms worldwide have now obtained ISO 14001. Two of its warehouses have 
also received LEED (Leadership in Energy and Environmental Design) certification.</p>
<p>The Louis Vuitton EOLE logistics center in Cergy, outside Paris, spearheaded and is 
emblematic of this commitment. The center integrates exemplary environmental 
standards with geothermal heating, enhanced building insulation, and filtering of 
rain and wastewater. All Louis Vuitton logistics centers also combine respect for 
the environment with optimal working conditions for employees.</p>
<p>For product transportation, environmental impact is included right from the first 
request for proposals sent to a dozen service providers. The RFP is written in 
collaboration with the Logistics department, but also includes input from 
specialists in customs clearance, finance and security. Selected transport partners 
must then provide comprehensive reporting on their compliance with ISO 14001 
norms.</p>
<p>Concretely, every e ort is made to reduce greenhouse gas emissions from 
transportation. Louis Vuitton asks its transport partners to train their drivers in 
eco-driving, give priority to nonstop flights with a low carbon footprint and 
whenever possible use trucks compliant with the Euro 5 and Euro 6 standards 
(either hybrid or electric) for the final delivery kilometers to stores, whether in 
Paris, Tokyo or Hong Kong.</p>

<p>To monitor environmental performance, each zone where Louis Vuitton is present 
around the world has an internal environmental representative who has direct 
contact with suppliers for key environmental issues. Thanks to this proactive and 
ongoing environmental commitment, supply chain certification is now a reality at 
Louis Vuitton.</p>

<h6>FINANCIAL PLAN</h6>
<ul>
  <li>An excellent first half in a still disrupted environment</li>
  <li>Double-digit organic revenue growth for all business groups</li>
  <li>Strong growth in Europe, Japan and the United States</li>
  <li>Exceptional momentum in champagne and cognac</li>
  <li>Remarkable performance by the Fashion & Leather Goods business group, 
particularly Louis Vuitton, Christian Dior, Fendi, Celine, Loro Piana and Loewe, 
which gained market share across the board and achieved new record highs for 
profitability</li>
</ul>

<h6>SOURCE OF FUNDING</h6>

<p><strong>Sales Revenue:</strong> The primary source of funding for Louis Vuitton is the revenue 
generated from the sale of its luxury goods, including handbags, clothing, 
accessories, and other products.</p>
<p><strong>LVMH Group:</strong> Louis Vuitton is part of the larger LVMH Group, which owns multiple 
luxury brands. The group's revenue and profits from its various subsidiaries 
contribute to funding Louis Vuitton's operations.</p>

<p><strong>Investors:</strong> LVMH is a publicly traded company, so it can raise funds by selling 
shares of stock to investors. This capital can then be allocated to various brands 
within the LVMH portfolio, including Louis Vuitton.</p>

<p><strong>Debt Financing:</strong> Like many companies, LVMH may also use debt financing by 
issuing bonds or taking out loans to fund its operations and expansion efforts.</p>

<p><strong>Licensing and Collaborations:</strong> Louis Vuitton may engage in licensing agreements 
and collaborations with other brands or designers, which can generate additional 
revenue.</p>

<p><strong>Retail Stores:</strong> Louis Vuitton operates a network of retail stores worldwide, and the 
profits from these stores contribute to its funding.</p>

<h6>MANUFACTURING BUDGET</h6>
<ol>
  <li>Material and fabric costs</li>
  <li>Labour cost</li>
  <li>Production FACILITIEs</li>
  <li>Quality control</li>
  <li>Research and development</li>
  <li>Logistics and management</li>
  <li>Marketing and branding</li>
  <li>Miscellaneous costs</li>
</ol>

<h6>CONSOLIDATED INCOME STATEMENT</h6>
{/* <img src={incomeStmImg} alt="Income Statement" /> */}

      </section>
      </>
    ),
      
  },
  
  
];

/* ===== Helper to detect sub-headings ===== */
const isSubHeading = (child) => {
  if (!React.isValidElement(child)) return false;
  if (child.props?.variant === "h6") return true; // MUI Typography
  if (child.type === "h6") return true;           // HTML h6
  return false;
};

/* ===== Recursive rendering of content with stable sub IDs ===== */
const renderContent = (content, itemId, subSectionRefs, counter = { value: 0 }) => {
  if (!React.isValidElement(content)) return <Typography>{content}</Typography>;

  if (isSubHeading(content)) {
    const subId = `${itemId}-sub-${counter.value}`;
    counter.value += 1;

    return (
      <Typography
        key={subId}
        ref={(el) => (subSectionRefs.current[subId] = el)}
        data-id={subId}
        variant="h6"
        sx={{ mt: 3, mb: 1, fontWeight: 600, scrollMarginTop: "120px" }}
      >
        {content.props.children}
      </Typography>
    );
  }

  if (content.props?.children) {
    return React.Children.map(content.props.children, (child) =>
      renderContent(child, itemId, subSectionRefs, counter)
    );
  }

  return <Typography>{content.props?.children || null}</Typography>;
};

/* ===== Recursive extraction of sub-topics with stable IDs ===== */
const getSubTopics = (content, itemId, counter = { value: 0 }) => {
  if (!React.isValidElement(content)) return [];

  let topics = [];

  if (isSubHeading(content)) {
    const subId = `${itemId}-sub-${counter.value}`;
    counter.value += 1;
    topics.push({ id: subId, label: content.props.children });
  }

  if (content.props?.children) {
    React.Children.forEach(content.props.children, (child) => {
      topics = topics.concat(getSubTopics(child, itemId, counter));
    });
  }

  return topics;
};

/* ================= COMPONENT ================= */
export default function CaseStudy() {
  const sectionRefs = useRef({});
  const subSectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  /* ===== ROUTE SCROLL ===== */
  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
      }, 300);
    }
  }, [location.state]);

  /* ===== SCROLL SPY ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    Object.values(subSectionRefs.current).forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff", pb: 12 }}>
      <Navbar />
      <Toolbar />

      {/* ===== HERO ===== */}
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 6,
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 700, letterSpacing: "2px", mb: 3, color: "#db00009b" }}>
            MEMES TO METRICS
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.85, mb: 2 }}>
            Building Brands That Stick
          </Typography>
          <Typography sx={{ opacity: 0.85, lineHeight: 1.8 }}>
            Put in 100+ hours of research per case study checking trends, testing ideas,
            and working with remote teams. Turned weak posts into 3x engagement wins and
            up to 300% growth in followers and sales.
          </Typography>
        </Box>

        <Box sx={{ borderRadius: "18px", overflow: "hidden" }}>
          <img src={caseStudyImg} alt="Case Study" style={{ width: "100%" }} />
        </Box>
      </Box>

      {/* ===== MAIN GRID ===== */}
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          mt: 8,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "8fr 4fr" },
          gap: 6,
        }}
      >
        {/* ===== LEFT CONTENT ===== */}
        <Box>
          {caseStudies.map((item) => (
            <Box
              key={item.id}
              ref={(el) => (sectionRefs.current[item.id] = el)}
              data-id={item.id}
              sx={{ mb: 6, scrollMarginTop: "120px" }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, letterSpacing: "1.5px", color: "#db00009b", mb: 2 }}
              >
                {item.title}
              </Typography>

              <Box sx={{ fontSize: "0.75rem", lineHeight: 1.8, opacity: 0.85 }}>
                {renderContent(item.content, item.id, subSectionRefs)}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ===== RIGHT HIGHLIGHTS ===== */}
        <Box
          sx={{
            backgroundColor: "#0e0e0e",
            borderRadius: "16px",
            p: 4,
            maxHeight: "70vh",
            overflowY: "auto",
            position: { md: "sticky" },
            top: 100,
            scrollbarWidth: "thin",
            scrollbarColor: "#db0000 #1a1a1a",
            "&::-webkit-scrollbar": { width: "6px" },
            "&::-webkit-scrollbar-track": { background: "#1a1a1a" },
            "&::-webkit-scrollbar-thumb": {
              background: "#db0000",
              borderRadius: "10px",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 3,
              p: 1.5,
              borderRadius: "10px",
              border: "1px solid rgba(219,0,0,0.25)",
              boxShadow: "0 0 18px rgba(219,0,0,0.35)",
            }}
          >
            CASE STUDY HIGHLIGHTS
          </Typography>

          <Divider sx={{ mb: 3, backgroundColor: "#333" }} />

          {caseStudies.map((item) => {
            const subTopics = getSubTopics(item.content, item.id);

            return (
              <Box key={item.id} sx={{ mb: 2 }}>
                {/* MAIN */}
                <Typography
                  onClick={() =>
                    sectionRefs.current[item.id]?.scrollIntoView({ behavior: "smooth" })
                  }
                  sx={{
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    mb: 0.5,
                    color: activeSection === item.id ? "#db0000" : "rgba(255,255,255,0.85)",
                    fontWeight: activeSection === item.id ? 600 : 400,
                  }}
                >
                  • {item.title}
                </Typography>

                {/* SUB TOPICS */}
                {subTopics.map((sub) => (
                  <Typography
                    key={sub.id}
                    onClick={() =>
                      subSectionRefs.current[sub.id]?.scrollIntoView({ behavior: "smooth" })
                    }
                    sx={{
                      ml: 2,
                      mb: 0.3,
                      cursor: "pointer",
                      fontSize: "0.72rem",
                      color: activeSection === sub.id ? "#db0000" : "rgba(255,255,255,0.6)",
                      fontWeight: activeSection === sub.id ? 500 : 400,
                      "&:hover": { color: "#db0000" },
                    }}
                  >
                    – {sub.label}
                  </Typography>
                ))}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}