import React from 'react';
import { Typography, Avatar, Divider, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function Startup() {
    const article = {
        title: 'Lessons From My First Start-Up',
        description: 'Lessons From My First Start-Up',

        content: 'This past summer, during quarantine ... (rest of the content)',
    };

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: '"Arial", sans-serif', backgroundColor: '#f9f9f9' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <Avatar size={64} icon={<UserOutlined />} src="URL_TO_YOUR_IMAGE_HERE" />
                <div style={{ marginLeft: '20px' }}>
                    <Title level={4}>Nirvan Panjwani</Title>
                    <Paragraph>Apr 5, 2021 • 3 min read</Paragraph>
                </div>
            </div>
            
    
            
            <Title>{article.title}</Title>
            <Paragraph style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                {article.content.substring(0, article.content.indexOf('lessons I’ve learned:'))}
            </Paragraph>

            {[
                {
                    title: "1. Automate",
                    content: "Back in March 2020, I would spend an hour every day just scouring the website, looking up random SKUs to find deals. This was tedious and inefficient, as at the end of the hour I’d maybe have one or two good deals. This all changed when we created a web scraper to scrape the site and look for deals that were 70% off or more, and then send a webhook of each item that is found. This resulted in almost 100+ deals a day that I just had to scroll through, pick, and then post. Even with the group’s support, I found a way to automate it using a custom discord bot."
                },
                {
                    title: "2. Plan",
                    content: "When I initially started, I made a lot of mistakes, specifically on the marketing side. I only used Twitter and had no specific demographic in mind or direction. Eventually, the brand evolved into one that was more beginner-friendly, and as a result, we chose to push our TikTok campaigns the most. The beauty of this app was we could reach a large, new audience rapidly due to TikTok’s fine-tuned algorithm that made it easy for my team to have our videos go viral."
                },
                {
                    title: "3. Work Hard",
                    content: "This one is very cheesy, however, it's what I can attribute the most of my success to. When I came into the deal space in January, I was very new. I honestly had no knowledge of how anything worked and ran Nirvan’s Brickseek as a fun side project for a few friends. As I spent more hours on it, I slowly became an expert, in turn making me more qualified to help others."
                },
                {
                    title: "4. Build a community",
                    content: "This one is specific to subscription-based communities like Patreon and Subify, however, it was a key to my success. Upon paying, members unlocked chat channels (previously unavailable at the free tier). This allowed them to ask questions, and just talk about life. They discussed video games, school, sports, and everything in-between. By the end of the summer, many bonds had been built within the community."
                }
            ].map((lesson, idx) => (
                <div key={idx} style={{ marginBottom: '20px', padding: '10px', backgroundColor: idx % 2 === 0 ? '#ffffff' : 'transparent' }}>
                    <Title level={4} style={{ fontWeight: 'bold', marginBottom: '10px' }}>{lesson.title}</Title>
                    <Paragraph style={{ lineHeight: '1.6' }}>{lesson.content}</Paragraph>
                </div>
            ))}

            <Paragraph style={{ lineHeight: '1.6', marginTop: '20px' }}>
                I hope some of these tips help with your entrepreneurial journeys, and as always you can email me at nirvan.panjwani@gmail.com if you have any questions.
            </Paragraph>
          
            <Divider />

        </div>
    );
}

export default Startup;
