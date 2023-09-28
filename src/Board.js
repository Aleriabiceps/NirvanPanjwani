import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import randomColor from "randomcolor";
import { Input, Button, Card, Typography, Space, Divider } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const isColorDark = (color) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
};

const Board = () => {
    const [message, setMessage] = useState("");
    const [author, setAuthor] = useState("");
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || []);
    const [backgroundColor, setBackgroundColor] = useState(
        `linear-gradient(45deg, ${randomColor()}, ${randomColor()})`
    );

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        // Change the background color every 2 minutes (120,000 milliseconds)
        const interval = setInterval(() => {
            setBackgroundColor(
                `linear-gradient(45deg, ${randomColor()}, ${randomColor()})`
            );
        }, 60000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    const newitem = () => {
        if (message.trim() !== "" && author.trim() !== "") {
            const newItemObj = {
                id: uuidv4(),
                message: message,
                author: author,
                color: randomColor({ luminosity: "light" }),
                defaultPos: { x: 100, y: 0 },
            };

            setItems((prevItems) => [...prevItems, newItemObj]);
            setMessage("");
            setAuthor("");
        } else {
            alert("Enter both a message and an author");
        }
    };

    const updatePos = (data, index) => {
        let newArr = [...items];
        newArr[index].defaultPos = { x: data.x, y: data.y };
        setItems(newArr);
    };

    const deleteNote = (id) => {
        const password = prompt("Enter the admin password to delete this note:");
        if (password === "YouDoNote!") {
            setItems(prevItems => prevItems.filter(itemObj => itemObj.id !== id));
        } else {
            alert("Incorrect password. You are not authorized to delete.");
        }
    };

    const keyPress = (event) => {
        var code = event.keyCode || event.which;
        if (code === 13) {
            newitem();
        }
    };

    // Define inline styles for mobile and desktop
    const containerStyle = {
        background: backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    };

    const titleStyle = {
        color: 'white',
        fontSize: '2.5rem',
        marginBottom: 0,
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };

    const inputContainerStyle = {
        width: '100%',
        maxWidth: '300px',
    };

    const inputStyle = {
        width: '100%',
        maxWidth: '100%',
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const noteCardStyle = {
        width: '100%',
        maxWidth: '250px',
        marginBottom: '15px',
        position: 'relative',
    };

    const deleteButtonStyle = {
        position: 'absolute',
        top: '5px',
        right: '5px',
    };

    return (
        <div style={containerStyle}>
            <Title level={2} style={titleStyle}>
                Visitor's Board
            </Title>
            <Divider />
            <Space direction="vertical" size="middle" style={inputContainerStyle}>
                <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message..."
                    style={inputStyle}
                />
                <Input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author"
                    style={inputStyle}
                />
                <div style={buttonContainerStyle}>
                    <Link to="/"> {/* Link to the home page route */}
                        <Button type="primary">Home</Button> {/* Home button */}
                    </Link>
                    <Button type="primary" onClick={newitem}>ENTER</Button>
                </div>
            </Space>
            <Divider />
            {items.map((itemObj, index) => {
                const textColor = isColorDark(itemObj.color) ? 'white' : 'black';
                return (
                    <Draggable
                        key={itemObj.id}
                        defaultPosition={itemObj.defaultPos}
                        onStop={(e, data) => updatePos(data, index)}
                    >
                        <Card
                            size="small"
                            style={{
                                ...noteCardStyle,
                                backgroundColor: itemObj.color,
                                color: textColor,
                            }}
                        >
                            <Space justify="space-between">
                                <div>
                                    <div>{itemObj.message}</div>
                                    <div style={{ fontWeight: 'bold' }}>Author: {itemObj.author}</div>
                                </div>
                                <div style={deleteButtonStyle}>
                                    <Button type="text" onClick={() => deleteNote(itemObj.id)} danger>
                                        X
                                    </Button>
                                </div>
                            </Space>
                        </Card>
                    </Draggable>
                );
            })}
        </div>
    );
};

export default Board;
