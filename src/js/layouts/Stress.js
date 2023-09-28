import React from 'react';
import { Typography, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function GettingOutOfFunk() {
    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: '"Arial", sans-serif', backgroundColor: '#f9f9f9' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <Avatar size={64} icon={<UserOutlined />} src="URL_TO_YOUR_IMAGE_HERE" />
                <div style={{ marginLeft: '20px' }}>
                    <Paragraph style={{ fontWeight: 'bold' }}>Nirvan Panjwani</Paragraph>
                    <Paragraph>Feb 23, 2021 • 2 min read</Paragraph>
                </div>
            </div>
            <Title>Stress is what fuels me</Title>

            <Paragraph>
                For me, stress is what fuels me. The constant sense of fire under me is what pushes me every morning to get out of bed and do something with my time. However, some mornings I just don't. I want to take that 1-hour long breakfast where I scroll endlessly on my phone for 40 minutes after my bowl of cereal and milk is over — and suddenly that leads to a full day, or sometimes multiple days of a funk.
            </Paragraph>

            <Paragraph>
                Now I’m not saying that you should never take an extra-long breakfast, or never sleep in a bit, rather cautioning that a lot of the times this can lead to more time wasted than you intended. Here are 3 things that personally helped me:
            </Paragraph>

            <Divider dashed />

            <Paragraph>
                <strong>Sleep</strong> - Getting enough sleep is important, however, the time when you get this sleep is what affected me. I would sleep at 9 pm one day, 3 am the next, and maybe at 11 pm the day after. On each day I got 9 hours of sleep, however, I woke up feeling groggy every morning. I didn’t realize it at the time but I was hurting my body’s internal clock. When you create a routine, like sleeping every night at 11 pm, the mind feels safe. So when you leave that pattern, and suddenly one night you sleep at 3 am, your caveman brain kicks in and suddenly the body feels like it's in trouble. You’ll wake up a couple of times during the night, or have super light sleep and wake up feeling lethargic. Falling asleep at around the same time and waking up at around the same time every single night helped me a lot with regaining motivation.
            </Paragraph>

            <Paragraph>
                <strong>Exercise</strong> - This one is pretty simple, but just walking around outside or taking a quick jog is always a good way to kickstart yourself. Playing tennis or a sport you enjoy with friends has helped me the most, however, even a quick walk outside gets me going usually.
            </Paragraph>

            <Paragraph>
                <strong>Friends</strong> - Sometimes, all you need is a quick call with one of your friends. Maybe they’ll remind you about something you need to get done, or just inspire you to come out for lunch with them. Either way, it's probably a better use of your time than TikTok.
            </Paragraph>

            <Paragraph>
                I hope with these tips you're able to maybe get rid of that funk. If not, maybe check out some of my other articles about productivity.
            </Paragraph>

            <Paragraph>
                As always, I am not a professional, this is just a reflection of my personal experiences.
            </Paragraph>

        </div>
    );
}

export default GettingOutOfFunk;
