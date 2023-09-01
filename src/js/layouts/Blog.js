import React from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const BlogPost = () => {
  const themeColor = 'skyblue'; // Define the theme color

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: themeColor, color: 'white' }}>
        <div className="logo" style={{ fontSize: '40px' }}>
        Mindset: Can I Use My Work Skills to Pass the Exam?
        </div>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Row gutter={16}>
          <Col span={16}>
          <Card
  title="Mindset: Can I Use My Work Skills to Pass the Exam?"
  bordered={false}
  style={{ marginBottom: '16px', backgroundColor: 'lightgray' }}
>

            
              <img
                src="https://images.squarespace-cdn.com/content/v1/63da6efe2fdb0e6e5759772a/8f4c7453-0920-4a45-8e3e-f3eff220a57a/barriers-learning-challenges-to-learner-engagement-980x261.jpg?format=2500w"
                alt="Blog Post Cover"
                style={{ width: '100%' }}
              />
              <Typography>
                <Title level={2}>Why Self Study is so hard</Title>
                <Paragraph>
                "The biggest reason for failure in the CFA exams is the difficulty of self-study", says Mark Meldrum. He's in a position to know. For most of his career, he had the benefit of teaching in a structured educational setting. Students left their rooms, entered the building, and crossed the threshold of the classroom. Through that series of tasks, almost a ritual, students prepped their brain to be ready to learn. 

However, when sitting alone after or before a long day of demanding work, without a structured environment, candidates who already have professional commitments face a disadvantage. Longing for the “good old days,” when the transition into a learning mindset was automatic, with syllabi, quizzes, assignments, and midterms providing crucial feedback on progress before the big exam.


                </Paragraph>
                <Title level={2}>Shifting Gears: from Work Mindset to Study Mindset</Title>
                <Paragraph>
                Success at work = knowing a lot, being an expert. 

Success in study prep = learning a lot of new things you don't already know. 

A successful student mindset is one that is open to learning and able to focus on absorbing new concepts. It revolves around growth rather than expertise.

So, what's the magic formula to get into the winning mindset? 

We see 3 factors that contribute to success:

Acceptance of the needed mindset shift. Embrace the fact that not knowing something is the initial step toward learning — not a barrier.

Carving out specific times dedicated to learning, with a defined beginning and an end. This helps you maintain discipline and prioritize learning goals.

Practicing a ritual that allows you to transition from a work mindset to a study mindset and back again.

By incorporating these factors into your study routine, you can overcome the difficulties of self-study and cultivate a winning mindset that fosters growth and open-mindedness. 

Remember, success in study preparation comes from being receptive to new concepts and investing time and effort into learning.

You have the ability to implement these steps independently and set yourself up for success.
                </Paragraph>
                {/* Add more content here */}
              </Typography>
            </Card>
            {/* Add more blog posts or pagination here */}
          </Col>
          <Col span={8}>
            <Card title="Recent Posts" bordered={false}>
              <ul>
                <li>
                  <a href="#">Assess the Strength of Your CFA Prep</a>
                </li>
                <li>
                  <a href="#">5 Must-Know Learning Strategies</a>
                </li>
                <li>
                  <a href="#">Time-Saving CFA Level I Prep</a>
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Content>
    
    </Layout>
  );
};

export default BlogPost;
