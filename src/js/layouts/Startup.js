import React from 'react';
import { Typography, Avatar, Divider, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function Startup() {
    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: '"Arial", sans-serif' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <Avatar size={64} icon={<UserOutlined />} src="URL_TO_YOUR_IMAGE_HERE" />
                <div style={{ marginLeft: '20px' }}>
                    <Title level={4}>Nirvan Panjwani</Title>
                    <Paragraph>Apr 5, 2021 • 3 min read</Paragraph>
                </div>
            </div>
            
            <Title>Lessons From My First Start-Up</Title>
            <Paragraph>
                <span role="img" aria-label="wave">👋</span> This past summer, during quarantine I started my own membership-based community, https://nirvanbrickseek.com. I used a popular website from the lego collecting community, brickseek.com to track down discounts and deals and organize that info in short form consumable posts in a discord group. I started it in January, and by March we had 200 members. At this point, there was no charge to be in the group, however, I monetized the service by offering to post deals in similar groups for a fee. This funded the adventure, and soon I had around 3000 members in my own free group, along with around 25 employees consisting of developers, support team, and social media content curators. We had a suite of monitors for sites like slick deals and forums on Reddit that pinged as soon as deals with important keywords were posted. From here, I monetized once again and decided to offer a monthly subscription membership on a limited basis to those 3000 members to unlock more/better deals. The move was a success, however, personal issues came up and I decided to sell a portion of the brand. I am still an active partner, however, I don’t commit hours a day to the project. Here are some of the lessons I’ve learned: 
            </Paragraph>
            <Paragraph>
            <strong>  1. Automate </strong> Back in March 2020, I would spend an hour every day just scouring the website, looking up random SKUs to find deals. This was tedious and inefficient, as at the end of the hour I’d maybe have one or two good deals. This all changed when we created a web scraper to scrape the site and look for deals that were 70% off or more, and then send a webhook of each item that is found. This resulted in almost 100+ deals a day that I just had to scroll through, pick, and then post. Even with the group’s support, I found a way to automate it using a custom discord bot. Members could open a ticket and follow prompts about their issue. The bot would reply with remade guides based on the keywords that the user entered. This resulted in 40% of user support tickets being routed and solved through that system
            </Paragraph>
            <Paragraph>
            <strong>  2. Plan </strong> When I initially started, I made a lot of mistakes, specifically on the marketing side. I only used Twitter and had no specific demographic in mind or direction. Eventually, the brand evolved into one that was more beginner-friendly, and as a result, we chose to push our TikTok campaigns the most. The beauty of this app was we could reach a large, new audience rapidly due to TikTok’s fine-tuned algorithm that made it easy for my team to have our videos go viral. Through those thousands of views, we were able to gain around ~1000 new members and convert ~30% of them to active members of the free community and ~6% to be paying members. If I had started with a marketing plan, I would have been able to unlock that reach months in advance.
            </Paragraph>
            <Paragraph>
         <strong>  3.  Work Hard </strong> This one is very cheesy, however, it's what I can attribute the most of my success to. When I came into the deal space in January, I was very new. I honestly had no knowledge of how anything worked and ran Nirvan’s Brickseek as a fun side project for a few friends. As I spent more hours on it, I slowly became an expert, in turn making me more qualified to help others. This translated to raving reviews from beginners and advanced deal hunters alike, and a 10% overall conversion rate for the paid section of the group. There was obviously some luck involved, but the persistence of waking up every single morning and writing lengthy guides, and providing the best support I could in the ticket system lead to members that felt fulfilled with the service I provided. 
            </Paragraph>
             <Paragraph>
             <strong>4.  Build a community </strong> This one is specific to subscription-based communities like Patreon and Subify, however, it was a key to my success. Upon paying, members unlocked chat channels (previously unavailable at the free tier). This allowed them to ask questions, and just talk about life. They discussed video games, school, sports, and everything in-between. By the end of the summer, many bonds had been built within the community. Since the memberships were limited, people felt as if they were in a once-in-a-lifetime opportunity and that leads to users continuing to pay just for the chats even if they didn’t use the information anymore. 


            </Paragraph>
            <Paragraph>
            I hope some of these tips help with your entrepreneurial journeys, and as always you can email me at nirvan.panjwani@gmail.com if you have any questions. 
            </Paragraph>
            <Divider />

          
            

        </div>
    );
}

export default Startup;
