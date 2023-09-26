import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const BlogPost = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  const blogData = [
    {
      title: 'Guide to LinkedIn',
      description: 'A High Schoolers Guide',
      externalUrl: 'https://nirvanpanjwani.wixsite.com/mysite-2/post/a-high-schooler-s-guide-to-linkedin-cold-dms',
      content: `👋 Hi David - I'm a junior in high school interested in brand strategy and marketing. I noticed your involvement with companies like Gemini and would love some insight into student involvement in the industry. 


      This cold DM was sent 4 months ago and completely changed my life. 
      
      
      
      
      After months of looking for a summer internship, my prospects were grim. It was 23 days before school was due to end, and I had no summer plans. Over 500 DMs were sent and no results to show for those hours spent browsing LinkedIn looking for marketing PMs. Finding a summer internship as a high schooler seemed impossible. 
      
      
      
      
      Here are a few tips that helped me crack the code. `,
    },
    {
      title: 'My First Start-Up',
      description: 'Lessons From My First Start-Up',
      externalUrl: 'https://nirvanpanjwani.wixsite.com/mysite-2/post/lessons-from-my-first-start-up'
    },
    {
      title: 'Bitcoin Or Bust',
      description: 'Sample only',
      externalUrl: 'https://nirvanpanjwani.wixsite.com/mysite-2/post/bitcoin-or-bust'
    },
    {
      title: 'The Future Of NFTs',
      description: 'The new blockchain-based tech',
      externalUrl: 'https://nirvanpanjwani.wixsite.com/mysite-2/post/the-future-of-nfts'
    },
    {
      title: 'Getting out of a Funk',
      description: 'stress is what fuels me',
      externalUrl: 'https://nirvanpanjwani.wixsite.com/mysite-2/post/getting-out-of-a-funk'
    },
    {
      title: 'Boost Your Brand',
      description: 'Using Twitter to Boost Your Brand',
      externalUrl: 'https://nirvanpanjwani.wixsite.com/mysite-2/post/using-twitter-to-boost-your-brand'
    }
  ];

  const blogContainerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0',
    float: 'left', // Align to the left
  };

  const blogTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px',
  };

  const blogListStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const blogLinkStyle = {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
  };

  const blogNavigationStyle = {
    textAlign: 'left',
    marginTop: '16px',
  };

  const blogNavLinkStyle = {
    textDecoration: 'none',
    marginRight: '10px',
  };

  const modalContentStyle = {
    maxWidth: '600px',
    margin: '0 auto',
  };

  const modalTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const modalDescriptionStyle = {
    marginBottom: '20px',
  };

  const modalContentContentStyle = {
    marginBottom: '20px',
  };

  const modalCloseBtnStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const modalCloseBtnHoverStyle = {
    backgroundColor: '#0056b3',
  };
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 15px 0px #000000'
    }
  };

  return (
    <div style={blogContainerStyle}>
      <h1 style={blogTitleStyle}>Blog Posts</h1>
      <ul style={blogListStyle}>
        {blogData.map((item, index) => (
          <li key={index}>
            <span
              style={blogLinkStyle}
              onClick={() => openModal(item)} // Open the modal when title is clicked
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>

      <div style={blogNavigationStyle}>
        <Link to="/" style={blogNavLinkStyle}>
          Home
        </Link>
        <Link to="/experience" style={blogNavLinkStyle}>
          Experience
        </Link>
      </div>
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 15px 0px #000000',
    },
  }}
  ariaHideApp={false}
>
  <h2 style={{
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  }}>
    {selectedBlog?.title}
  </h2>
  <p style={{
    marginBottom: '20px',
    color: '#555',
    lineHeight: '1.5',
  }}>
    {selectedBlog?.description}
  </p>
  <p style={{
    marginBottom: '20px',
    color: '#555',
    lineHeight: '1.5',
  }}>
    {selectedBlog?.content}
  </p>
  <a style={{
    textDecoration: 'none',
    color: '#007BFF',
    marginBottom: '20px',
    display: 'block',
    fontSize: '16px',
  }}
    href={selectedBlog?.externalUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    Read More
  </a>
  <button style={{
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }}
    onClick={closeModal}
    onMouseOver={(e) => {
      e.target.style.backgroundColor = '#0056b3';
    }}
    onMouseOut={(e) => {
      e.target.style.backgroundColor = '#007BFF';
    }}
  >
    Close
  </button>
</Modal>



    </div>
  );
};

export default BlogPost;
