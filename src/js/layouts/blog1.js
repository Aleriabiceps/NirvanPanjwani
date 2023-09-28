import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Modal, Row, Col, Button } from 'antd';



const BlogPost = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  const blogData = [
    {
      title: 'A High Schooler Guide to LinkedIn Cold DMs',
      description: 'A High Schoolers Guide',
      externalUrl: '/Linkedin',
      image: `https://static.wixstatic.com/media/a05cab_3d5593a82fb74428973491e9fb8e5c06~mv2.png/v1/fill/w_740,h_182,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a05cab_3d5593a82fb74428973491e9fb8e5c06~mv2.png`,
      
      content: `👋 Hi David - I'm a junior in high school interested in brand strategy and marketing. I noticed your involvement with companies like Gemini and would love some insight into student involvement in the industry. 


      This cold DM was sent 4 months ago and completely changed my life. 
      
      
      
      
      After months of looking for a summer internship, my prospects were grim. It was 23 days before school was due to end, and I had no summer plans. Over 500 DMs were sent and no results to show for those hours spent browsing LinkedIn looking for marketing PMs. Finding a summer internship as a high schooler seemed impossible. 
      
      
      
      
      Here are a few tips that helped me crack the code. `,
    },
    {
      title: 'Lessons From My First Start-Up',
      description: 'Lessons From My First Start-Up',
      image: `https://static.wixstatic.com/media/a05cab_47cbbaf40b084bf7b906cee7f7792799~mv2.jpeg/v1/fill/w_375,h_263,al_c,lg_1,q_80,enc_auto/a05cab_47cbbaf40b084bf7b906cee7f7792799~mv2.jpeg`,
      externalUrl: '/startup',
      content:`This past summer, during quarantine I started my own membership-based community, https://nirvanbrickseek.com. I used a popular website from the lego collecting community, brickseek.com to track down discounts and deals and organize that info in short form consumable posts in a discord group. I started it in January, and by March we had 200 members. At this point, there was no charge to be in the group, however, I monetized the service by offering to post deals in similar groups for a fee. This funded the adventure, and soon I had around 3000 members in my own free group, along with around 25 employees consisting of developers, support team, and social media content curators. We had a suite of monitors for sites like slick deals and forums on Reddit that pinged as soon as deals with important keywords were posted. From here, I monetized once again and decided to offer a monthly subscription membership on a limited basis to those 3000 members to unlock more/better deals. The move was a success, however, personal issues came up and I decided to sell a portion of the brand. I am still an active partner, however, I don’t commit hours a day to the project. Here are some of the lessons I’ve learned: `,
      
    },
    {
      title: 'Bitcoin Or Bust', 
      description: 'Investment strategy',
      image: `https://static.wixstatic.com/media/a05cab_f9cb6143bb1a4766973c93b76a6ede6a~mv2.jpg/v1/fill/w_740,h_494,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a05cab_f9cb6143bb1a4766973c93b76a6ede6a~mv2.jpg`,
      externalUrl: '/Bitcoin',
      content: `My investment strategy when it comes to Bitcoin is the opposite of logical — it's 100% emotionally based, a gut feeling. Bit


      coin’s (and other cryptocurrencies) main selling point is that they are decentralized so there isn’t a singular entity that props up its value or regulates it, compared to today’s currency. My issue with today’s currency and politics, in general, is that there is a lack of transparency. I don’t know where my tax money specifically goes, I don’t know if Jeffery Epstein actually killed himself or not, I don’t know if the media is lying. The only thing I know is never to trust a politician. `
    },
    {
      title: 'The Future Of NFTs',
      description: 'The new blockchain-based tech',
      image: `https://static.wixstatic.com/media/a05cab_934b0133cdfb4d9395b002ef86074b41~mv2.jpg/v1/fill/w_740,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a05cab_934b0133cdfb4d9395b002ef86074b41~mv2.jpg`,
      externalUrl: '/NFT',
      content: `NFTs, the new blockchain-based tech hoping to revolutionize the way we consume and display art. With prominent backers like the NBA, and their NBA Topshot franchise, are NFTs destined for wide-scale adoption? 


      I’d like to preface this by saying most of the current NFT projects are garbage. Like buying tokenized colors: Who in their right mind would spend 10,000 dollars on singular color? Heading over to BakerySwap’s new listings, we can check out thousands of more NFT projects that are auctioning for insane prices but in reality, are sometimes actual 3rd grader’s art projects. I think what is happening here is people are bidding on the technology and novelty rather than the art itself, which results in uber high bids for art that really doesn’t warrant that price. 
      
      `
    },
    {
      title: 'Getting out of a Funk',
      description: 'Stress is what fuels me',
      image: `https://static.wixstatic.com/media/a05cab_c6286361105b46e284fd8fbaa86ce2b8~mv2.jpg/v1/fill/w_740,h_530,al_c,lg_1,q_85,enc_auto/a05cab_c6286361105b46e284fd8fbaa86ce2b8~mv2.jpg`,
      externalUrl: '/stress',
      content: `For me, stress is what fuels me. The constant sense of fire under me is what pushes me every morning to get out of bed and do something with my time. However, some mornings I just don't. I want to take that 1-hour long breakfast where I scroll endlessly on my phone for 40 minutes after my bowl of cereal and milk is over — and suddenly that leads to a full day, or sometimes multiple days of a funk. 




      Now I’m not saying that you should never take an extra-long breakfast, or never sleep in a bit, rather cautioning that a lot of the times this can lead to more time wasted than you  intended. Here are 3 things that personally helped me:`
    },
    {
      title: 'Using Twitter to Boost Your Brand',
      description: 'Using Twitter to Boost Your Brand',
      image: `https://static.wixstatic.com/media/a05cab_182219ee91904d4f992fb4d86162752b~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a05cab_182219ee91904d4f992fb4d86162752b~mv2.jpg`,
      externalUrl: '/Boost',
      content: `Twitter is one of the best tools in a social media toolbox, due to its ability to let 280 character text bursts go viral within the hour. With an advertising audience of almost 300 million users, you’re bound to find a niche that your product fits in. 
 However, there is a steep learning curve, so here are 3 important lessons I’ve absorbed so far. `
    },
    {
      title: 'The To-Do List:',
      description: 'A Procrastinator’s Saving Grace',
      image: `https://static.wixstatic.com/media/a05cab_bd601b2a64324cbda01f666a73790bdc~mv2.png/v1/fill/w_740,h_383,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a05cab_bd601b2a64324cbda01f666a73790bdc~mv2.png`,
      externalUrl: '/list',
      content: `I used to come home from school and jump straight into my bed. Sometimes to sleep, sometimes to endlessly scroll on my phone,


      or sometimes to finish entire seasons of shows in one sitting. I would always think to myself, “just 10 more minutes, I’ll start my work at 3:30”, and slowly it would become 4, then 4:30, and pretty soon my mom was calling me down for dinner. After dinner, I would make one last-ditch effort to avoid my homework and take a shower. At this point, it was 8:30, my homework was due in less than 12 hours, and I knew there was no avoiding it.  `
    }
  ];

  const modalImageStyle = {
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
};

  const modalImageContainerStyle = {
    width: '100%',
    height: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '20px', };

  const blogContainerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0',
    float: 'left', // Align to the left
  };

  const blogTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
  };

  const blogListStyle = {
    listStyleType: 'disc', // disc is the default bullet point for unordered lists
    padding: '0',
    marginLeft: `20px`
};


  const blogLinkStyle = {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',

  };

  const blogNavigationStyle = {
    textAlign: 'left',
    marginTop: '16px',
  };

  const blogNavLinkStyle = {
    textDecoration: 'none',
    marginRight: '10px',
  };

  const modalContentStyle = {
    maxWidth: '600px',
    margin: '0 auto',
  };

  const modalTitleStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const modalDescriptionStyle = {
    marginBottom: '20px',
    fontWeight: 'bold'
  };

  const modalContentContentStyle = {
    marginBottom: '20px',
    fontWeight: '200px'
};


  const modalCloseBtnStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const modalCloseBtnHoverStyle = {
    backgroundColor: '#0056b3',
  };
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 15px 0px #000000'
    }
  };
  const navigationStyle = {
    // ...styles specific to the <nav> element
    display: 'flex',
    // example to space out the links
  };
  const navigationContainerStyle = {
    // ...your container styles here
  };
  
  const linkStyle = {
    textDecoration: 'none',          // No underline for the link
    color: '#333',                  // Text color (dark gray)
    backgroundColor: '#f2f2f2',     // Light gray background color
    padding: '8px 16px',            // Padding around the text
    borderRadius: '4px',            // Slight rounded corners for the button
    display: 'inline-block',        // Allows for padding and maintains inline behavior
    border: '1px solid #ccc',       // Gray border
    transition: 'background-color 0.2s',  // Smoothens the hover effect transition
    cursor: 'pointer'               // Hand cursor when hovering over the link
};


const [show, setShow] = useState(true); // or false, depending on your default value

  return (
    <div style={Object.assign({}, blogContainerStyle, show ? {} : { display: 'none' })}>
    <h1 style={blogTitleStyle}>Blog Posts</h1>
    <ul style={blogListStyle}>
      {blogData.map((item) => (
        <li key={item.title}>
          <span
            style={blogLinkStyle}
            onClick={() => openModal(item)}
          >
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  
    <div style={navigationContainerStyle}>
    <nav style={navigationStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/experience" style={linkStyle}>Experience</Link>
    </nav>
  </div>

  
    <Modal
    visible={!!selectedBlog}
    onCancel={closeModal}
    footer={null}
    style={{ ...customStyles, top: '10px' }} // Here we set the top position to 10px
    wrapClassName="custom-modal-class"
    closable={false}
 >

  <Row gutter={16}>
    {/* Image row */}
    {selectedBlog?.image && (
      <Col xs={24} className="mobile-hidden">
        <div 
          style={{
            ...modalImageContainerStyle, 
            backgroundImage: `url(${selectedBlog.image})`,
            height: '200px', // Limit the image height
            backgroundSize: 'cover' // Cover the div area with the image
          }} 
        />
      </Col>
    )}

    {/* Title */}
    <Col xs={24} style={{ marginTop: '10px' }}> 
      <h2 style={modalTitleStyle}>
        {selectedBlog?.title}
      </h2>
    </Col>

    {/* Description and Content */}
    <Col xs={24} style={{ marginBottom: '10px' }}> 
      <p style={modalDescriptionStyle}>
        {selectedBlog?.description}
      </p>
      <p style={modalContentContentStyle}>
        {selectedBlog?.content}
      </p>
    </Col>

    {/* Link and Button */}
    <Col xs={24} style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Link 
    to={selectedBlog?.externalUrl}
    style={blogLinkStyle}
  >
    Read More
  </Link>
  <Button 
    style={{...modalCloseBtnStyle, marginLeft: '10px'}}
    onClick={closeModal}
    onMouseOver={(e) => e.target.style.backgroundColor = modalCloseBtnHoverStyle.backgroundColor}
    onMouseOut={(e) => e.target.style.backgroundColor = modalCloseBtnStyle.backgroundColor}
  >
    Close
  </Button>
</Col>
  </Row>
</Modal>


  </div>
  

  );
};

export default BlogPost;