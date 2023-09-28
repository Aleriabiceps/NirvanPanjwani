import React from 'react';
import { Typography, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
function NFT() {
    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: '"Arial", sans-serif', backgroundColor: '#f9f9f9' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <Avatar size={64} icon={<UserOutlined />} src="URL_TO_YOUR_IMAGE_HERE" />
                <div style={{ marginLeft: '20px' }}>
                    <Paragraph style={{ fontWeight: 'bold' }}>Nirvan Panjwani</Paragraph>
                    <Paragraph>Mar 21, 2021 • 3 min read</Paragraph>
                </div>
            </div>
            <Title>The Future Of NFTs</Title>

            <Paragraph>
                <span role="img" aria-label="wave">👋</span> NFTs, the new blockchain-based tech hoping to revolutionize the way we consume and display art. With prominent backers like the NBA, and their NBA Topshot franchise, are NFTs destined for wide-scale adoption? 
            </Paragraph>

            <Paragraph>
            I’d like to preface this by saying most of the current NFT projects are garbage. Like buying tokenized colors: Who in their right mind would spend 10,000 dollars on singular color? Heading over to BakerySwap’s new listings, we can check out thousands of more NFT projects that are auctioning for insane prices but in reality, are sometimes actual 3rd grader’s art projects.
            </Paragraph>

            <Paragraph>
            I think what is happening here is people are bidding on the technology and novelty rather than the art itself, which results in uber high bids for art that really doesn’t warrant that price. 
            </Paragraph>

            <Divider dashed />

            <Paragraph>
            I believe the future of NFTs lies in bringing art to the masses in a secure, transparent way. A large problem with today’s art community is the prominence of fakes, a problem that blockchain solves easily with its transparency of seeing exactly when each piece was minted, and who’s hands exchanged it. Furthermore, the basis of smart contracts on the Ethereum blockchain ensure that buyers and sellers are less likely to get scammed. 
            </Paragraph>

            <Paragraph>
            This generation loves to show off via the internet, as it offers selective snapshots of people’s lives that encompass only what they want you to see. Imagine a world where your art collection is integrated and synonymous with your Instagram or Twitter profile.
            </Paragraph>

            <Divider dashed />

            <Paragraph>
            Another integration of NFTs I’m looking forward to is when celebrities and brands are able to offer experiences with them. You can digitally own limited covers of your favorite albums and display them for even more people to see, compared to owning them physically and hanging them in your room. Not everyone will visit your room, but everyone can click a link in your Instagram bio to check out all the vinyl NFTs you own. Furthermore, NFTs that come with exclusive content could be cool as well. A simple Spotify or Apple Music integration would add even more value.
            </Paragraph>

            <Paragraph>
            Outside of the music industry, NFTs will find homes in all aspects of our lives, since every piece of content we consume is digital. Leveraging the benefits of the blockchain is the logical next step, leaving me excited for the future of NFTs. 
            </Paragraph>

            <Divider />

        </div>
    );
}

export default NFT;
