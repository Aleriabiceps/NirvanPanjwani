import React from 'react';
import { Typography, Avatar, Divider, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function BlogPost2() {
    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: '"Arial", sans-serif' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <Avatar size={64} icon={<UserOutlined />} src="URL_TO_YOUR_IMAGE_HERE" />
                <div style={{ marginLeft: '20px' }}>
                    <Title level={4}>Nirvan Panjwani</Title>
                    <Paragraph>Aug 13, 2021 • 3 min read</Paragraph>
                </div>
            </div>
            
            <Title>A High Schooler's Guide to LinkedIn Cold DMs</Title>
            <Paragraph>
                <span role="img" aria-label="wave">👋</span> Hi David - I'm a junior in high school interested in brand strategy and marketing. I noticed your involvement with companies like Gemini and would love some insight into student involvement in the industry. 
            </Paragraph>
            <Paragraph>
                This cold DM was sent 4 months ago and completely changed my life.
            </Paragraph>
            
            <Divider />

            <Paragraph>
            After months of looking for a summer internship, my prospects were grim. It was 23 days before school was due to end, and I had no summer plans. Over 500 DMs were sent and no results to show for those hours spent browsing LinkedIn looking for marketing PMs. Finding a summer internship as a high schooler seemed impossible. 
            </Paragraph>
            
            <Title level={2}>Here are a few tips that helped me crack the code.</Title>
            
            <Title level={3}>Numbers</Title>
            <Paragraph>
            The first one is simple and applies to a lot of things in life: It’s a numbers game. Let's say you have a 2.0 GPA and no prior work experience. Your odds of receiving an internship for the role in the industry you want are placed at 0.01%. Even someone with a 2.0 GPA would look at those odds and pass. However, all that % means is that it is going to statistically take 10,000 DMs before you get what you’re looking for. The key here is to treat each DM like you’re a Girl Scout knocking on someone's door to sell them cookies. Your goal is to be knocking at the 100th door by the time the 1st even rejects you. The worst case is you waste an hour sending 10,000 messages and in a few decades you can look back and be like “wow I can't believe Bezos passed on me” 😂 Create a few DM templates: 
            </Paragraph>

            <Divider dashed />

            <Paragraph>
                <span role="img" aria-label="wave">👋</span>👋Hi ____ - I'm a junior in high school highly interested in student opportunities to make a difference at _____. Would love to learn more about the program, so let's connect! - Nirvan
            </Paragraph>
            <Paragraph>
                <span role="img" aria-label="smile">😃</span>Hi ______ - I'm a junior in high school interested in brand strategy and marketing. I noticed your involvement with companies like _____ and would love some insight into student involvement in the industry. 
            </Paragraph>
            <Paragraph>
                <span role="img" aria-label="wave">👋</span>👋Hey Jessica, I’m a high schooler and stumbled across your LinkedIn profile while looking for internship opportunities. Would love to learn about any possible roles for students at ______. 
            </Paragraph>

            <Title level={3}>The Preview</Title>
            <Paragraph>
            These templates bring me to my next point — you have around 10 words to get a point across without the person actually opening the DM. 
            </Paragraph>

            <Divider dashed />

            <Paragraph>
                I liked using 3 things:
                Their name — the personalization here automatically adds warmth to the conversation and will be eye-catching in a sea of DMs

Emojis — for this use case, a simple 👋 is perfect. It's explanatory, colorful, and eye-catching. 

Age — If you’re reading this article you’re probably on the younger side. It’s important to leverage your age. Recruiters are met by thousands of college graduate candidates. But how many are 14 or 15? 
            </Paragraph>

            <Title level={3}>Age</Title>
            <Paragraph>
            As mentioned in the last section, leveraging your age will come in handy as people are generally more inclined to help out a younger person. For many, it’s fun to use your life experience to guide and mold the younger generation. 




The last tip I have is to scout the profile. If you’re trying to make a connection to someone who hasn’t posted on their profile in months, you probably won't be receiving any useful advice. 
            </Paragraph>

            <Divider />

            <Title level={3}>Next Steps</Title>
            <Paragraph>
            Once you get a response, from there the easiest thing to do is set up a call. Explain what you're looking for, and see if the position available is a good fit for you. Even if there is not a position available, a lot of times the recruiter or manager may have some cool tips or random life advice. Regardless of the internship status, you should still make an effort to maintain the relationship in case you need any help in the future. 
            </Paragraph>

            <Divider />

            <Paragraph>
            Using these tips, I was able to randomly stumble upon the most informative 3 months of my life. I sent a DM to a marketing lead at Gemini, and although Gemini was unable to offer me a position, he connected me with Big Time Studios, a brand new game studio integrating NFTs into their MMORPG. At the time, they were just launching their marketing efforts and were desperate for any help they could get managing the huge influx of demand for the game. Working alongside industry leaders like Ari, the founder of Decentraland immersed me in a 360 view of the marketing world -- more than any summer course run by Stanford ever could. 
            </Paragraph>

            <Divider />

           
        </div>
    );
}

export default BlogPost2;
