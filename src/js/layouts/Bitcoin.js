import React from 'react';
import { Typography, Avatar, Divider, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function Bitcoin() {
    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: '"Arial", sans-serif', backgroundColor: '#f9f9f9' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <Avatar size={64} icon={<UserOutlined />} src="URL_TO_YOUR_IMAGE_HERE" />
                <div style={{ marginLeft: '20px' }}>
                    <Title level={4}>Nirvan Panjwani</Title>
                    <Paragraph>Mar 29, 2021 • 3 min read</Paragraph>
                </div>
            </div>
            
            <Title>Bitcoin Or Bust</Title>
            
            <Paragraph>
                <span role="img" aria-label="wave">👋</span> My investment strategy when it comes to Bitcoin is the opposite of logical — it's 100% emotionally based, a gut feeling. Bitcoin’s main selling point is decentralization. This contrasts with today’s currency, which is often shrouded in opacity, making me skeptical about its true movements and intents.
            </Paragraph>
            
            <Paragraph>
                Bitcoin doesn't solve transparency problems in politics or media, but it does represent a new age of open-sourced technologies that empower individuals. Every transaction is recorded. A future where all funds are traceable is appealing to me. 
            </Paragraph>
            
            <Paragraph>
                Let's examine the dynamics of the US dollar and silver. While indicators like silver's price might suggest the dollar’s value has been steady, this is far from reality. Consider the contrast between silver prices in 1980 and 2019. Adjusted for inflation, 50 dollars in 1980 equates to roughly 160 dollars today, showcasing the dollar’s diminishing purchasing power over time.
            </Paragraph>
            
            <Divider dashed />
            
            <Paragraph>
                The criticisms of Bitcoin, especially its association with illegal transactions, are often mirrored by the US dollar. For instance, a significant cocaine seizure was linked to a boat owned by JPMorgan. The US government itself has faced allegations related to the war on drugs. 
            </Paragraph>
            
            <Divider dashed />
            
            <Paragraph>
                Moreover, institutions like Tesla and Goldman Sachs are increasingly involved in cryptocurrency. Their consistent bitcoin purchases provide a foundation of support for the cryptocurrency, buffering against potential market panics.
            </Paragraph>
            
            <Divider dashed />
            
            <Paragraph>
                This isn't a critique of the US government. I value the freedoms and security it provides. But the growing mistrust between the government and its people is undeniable. A decentralized currency like Bitcoin offers an alternative for those skeptical of traditional financial systems.
            </Paragraph>
            
            <Divider />

        </div>
    );
}

export default Bitcoin;
