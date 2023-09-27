import React from 'react';
import { Typography, Avatar, Divider, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

function NFT() {
    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: '"Arial", sans-serif' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <Avatar size={64} icon={<UserOutlined />} src="URL_TO_YOUR_IMAGE_HERE" />
                <div style={{ marginLeft: '20px' }}>
                    <Title level={4}>Nirvan Panjwani</Title>
                    <Paragraph>Mar 21, 2021 • 3 min read</Paragraph>
                </div>
            </div>
            
            <Title>The Future Of NFTs</Title>
            <Paragraph>
                <span role="img" aria-label="wave">👋</span> NFTs, the new blockchain-based tech hoping to revolutionize the way we consume and display art. With prominent backers like the NBA, and their NBA Topshot franchise, are NFTs destined for wide-scale adoption? 
            </Paragraph>
            <Paragraph>
            I’d like to preface this by saying most of the current NFT projects are garbage. Like buying tokenized colors: Who in their right mind would spend 10,000 dollars on singular color? Heading over to BakerySwap’s new listings, we can check out thousands of more NFT projects that are auctioning for insane prices but in reality, are sometimes actual 3rd grader’s art projects. I think what is happening here is people are bidding on the technology and novelty rather than the art itself, which results in uber high bids for art that really doesn’t warrant that price. 


            </Paragraph>
            <Paragraph>
            I believe the future of NFTs lies in bringing art to the masses in a secure, transparent way. A large problem with today’s art community is the prominence of fakes, a problem that blockchain solves easily with its transparency of seeing exactly when each piece was minted, and who’s hands exchanged it. Furthermore, the basis of smart contracts on the Ethereum blockchain ensure that buyers and sellers are less likely to get scammed. 
            </Paragraph>
            <Paragraph>
            
This generation loves to show off via the internet, as it offers selective snapshots of people’s lives that encompass only what they want you to see. When I asked my friends if they would be willing to go on a vacation this summer, the immediate response was “That sounds like a great idea, the Instagram pics from that would be crazy!”. On the other side of the internet, people already pay thousands of dollars for social media usernames. Imagine a world where your art collection is integrated and synonymous with your Instagram or Twitter profile -- similar to putting your VSCO link in the bio of your Instagram in today’s world. It’s the perfect way for people to show off their collection in the digital age
            </Paragraph>
             <Paragraph>
             Another integration of NFTs I’m looking forward to is when celebrities and brands are able to offer experiences with them. More than 25% of Gen Zers are willing to pay for music on vinyl and almost 50% of the people who buy vinyl’s don’t even listen to them. Furthermore, certain limited editions of vinyl’s, like Travis Scott’s “Astroworld: Night Edition” retail at 25 dollars, yet sell for 350. Although this is the same musical content as the “Day” version of the Vinyl, because of its limited-edition cover which is artistically different, it’s worth more. When artists start to offer NFTs in a similar way, you can digitally own limited covers of your favorite albums and display them for even more people to see, compared to owning them physically and hanging them in your room. Not everyone will visit your room, but everyone can click a link in your Instagram bio to check out all the vinyl NFTs you own. Furthermore, NFTs that come with exclusive content could be cool as well. What if you could own a 1 of 100 version of Taylor Swift’s song that came with an extra verse from her? Some might say: “What about piracy? I can just play that same version on youtube” however a simple Spotify or Apple Music integration would fix that. If you could save them in your library and incorporate them into your playlists, it provides actual value over the versions on youtube and underground sites. 

            </Paragraph>
            <Paragraph>
            Outside of the music industry, NFTs will find homes in all aspects of our lives, since every piece of content we consume is digital. Leveraging the benefits of the blockchain is the logical next step, leaving me excited for the future of NFTs. 
            </Paragraph>
            <Divider />

          
            

        </div>
    );
}

export default NFT;
