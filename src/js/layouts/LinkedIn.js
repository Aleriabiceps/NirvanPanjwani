import React from 'react';
import { Typography, Avatar, Divider, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function BlogPost() {
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
                <span role="img" aria-label="wave">👋</span> Hi David - I'm a junior in high school interested in brand strategy and marketing...
            </Paragraph>
            <Paragraph>
                This cold DM was sent 4 months ago and completely changed my life.
            </Paragraph>
            
            <Divider />

            <Paragraph>
                After months of looking for a summer internship, my prospects were grim...
            </Paragraph>
            
            <Title level={2}>Here are a few tips that helped me crack the code.</Title>
            
            <Title level={3}>Numbers</Title>
            <Paragraph>
                The first one is simple and applies to a lot of things in life...
            </Paragraph>

            <Divider dashed />

            <Paragraph>
                <span role="img" aria-label="wave">👋</span>Hi ____ - I'm a junior in high school...
            </Paragraph>
            <Paragraph>
                <span role="img" aria-label="smile">😃</span>Hi ______ - I'm a junior in high school...
            </Paragraph>
            <Paragraph>
                <span role="img" aria-label="wave">👋</span>Hey Jessica, I’m a high schooler...
            </Paragraph>

            <Title level={3}>The Preview</Title>
            <Paragraph>
                These templates bring me to my next point...
            </Paragraph>

            <Divider dashed />

            <Paragraph>
                I liked using 3 things:
                Their name — the personalization...
            </Paragraph>

            <Title level={3}>Age</Title>
            <Paragraph>
                As mentioned in the last section, leveraging your age...
            </Paragraph>

            <Divider />

            <Title level={3}>Next Steps</Title>
            <Paragraph>
                Once you get a response, from there the easiest thing...
            </Paragraph>

            <Divider />

            <Paragraph>
                Using these tips, I was able to randomly stumble upon...
            </Paragraph>

            <Divider />

            <Button type="primary" style={{ margin: '20px 0' }}>Read More Articles</Button>
        </div>
    );
}

export default BlogPost;
