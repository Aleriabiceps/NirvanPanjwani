import React from 'react';
import { Typography, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function Boost() {
    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: '"Arial", sans-serif', backgroundColor: '#f9f9f9' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <Avatar size={64} icon={<UserOutlined />} src="URL_TO_YOUR_IMAGE_HERE" />
                <div style={{ marginLeft: '20px' }}>
                    <Paragraph style={{ fontWeight: 'bold' }}>Nirvan Panjwani</Paragraph>
                    <Paragraph>Apr 5, 2021 • 3 min read</Paragraph>
                </div>
            </div>
            
            <Title>Using Twitter to Boost Your Brand</Title>
            <Paragraph>
                👋 Twitter is one of the best tools in a social media toolbox, due to its ability to let 280 character text bursts go viral within the hour. With an advertising audience of almost 300 million users, you’re bound to find a niche that your product fits in.
            </Paragraph>

            <Paragraph>
                👋 However, there is a steep learning curve, so here are 3 important lessons I’ve absorbed so far.
            </Paragraph>

            <Divider dashed />

            <Paragraph>
                <strong>1. Giveaways</strong> - We’ve all come across that tweet on our timeline: “Retweet, Like, and Follow for 1 Entry! Tag a friend for the 2nd Entry!” Giveaways seem great on the surface: they boost engagement and most of all rapidly gain us followers. They base themselves around the retweet feature, the most vital metric. If Company X tweets something, and person A retweets that, they lob that tweet onto their followers’ timeline, spreading Company X’s message. And the odds are that person A has followers with similar interests as person A, hence why they follow person A in the first place.
            </Paragraph>

            <Paragraph>
                However, getting a new audience means nothing if you’re unable to convey to them what your product does and why that matters to them. If done improperly, giveaways can ruin your engagement, and result in a mass exodus of followers after the giveaway has ended. This is where your profile comes in — You want to have a simple profile that clearly explains what the heck you provide, whether that’s custom clothing or a SaaS product targeted at e-commerce amateurs. We display these key details through our banner, bio, and website link. The logo/banner is what initially draws someone in to click on the profile, so make sure you have refreshing logo that doesn’t have any unreadable text (test it on your own phones and devices with different screen sizes to make sure).
            </Paragraph>

            <Paragraph>
                The banner should have the product itself, whether that’s pictures of your UI or pictures of your physical product. The bio should officially explain the service/product you provide in a concise manner. Test your profile on family and friends, making sure that if they have no prior understanding of what your company does, after reading your profile they have a basic understanding. This is vital to any brand with no prior identity, because it lets people coming from giveaways or those who randomly stumble on your profile quickly understand what you and then associate that with a logo and name.
            </Paragraph>

            <Paragraph>
                <strong>2. Consistency</strong> - The key to all of your communications is consistency. Your brand image itself needs to be cohesive, all the tweets need to be reflective of the brand you want to portray. You want to use similar colors and graphic themes if that’s what you’re using. As well as that, your tweets should all follow a theme of some sort. For example, maybe you have poem style tweets. That stuff is interesting to consumers, and gives them solid content they can look forward to getting from you. Tweeting out pictures of your product doesn’t really do much unless it’s in a creative way. You want to engage with followers, have conversations, and let them feel as if the brand isn’t just a large and distant company, rather a genuine “internet friend”.
            </Paragraph>

            <Paragraph>
                <strong>3. Keep Innovating</strong> - These tips above are just what worked for me, in my niche. However, you’ll never know what works for you till you try it. When you send out a “bad” tweet, and it flops, there aren’t any repercussions unless its in bad taste. Worst case people see it, and just keep scrolling. So keep trying and coming up with creative ideas to convey your brand identity until you find something that fits for you.
            </Paragraph>

            <Paragraph>
                If you enjoyed these tips, be sure to leave a like on this article!
            </Paragraph>

        </div>
    );
}

export default Boost;
