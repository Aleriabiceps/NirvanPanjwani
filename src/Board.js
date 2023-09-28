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
    const [item, setItem] = useState("");
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || []);

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    const newitem = () => {
        if (item.trim() !== "") {
            const newItemObj = {
                id: uuidv4(),
                item: item,
                color: randomColor({ luminosity: "light" }),
                defaultPos: { x: 100, y: 0 },
            };

            setItems((prevItems) => [...prevItems, newItemObj]);
            setItem("");
        } else {
            alert("Enter an item");
            setItem("");
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
    return (
        <div style={{ 
            background: `linear-gradient(45deg, ${randomColor()}, ${randomColor()})`, 
            minHeight: '100vh', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
           <Title
        level={2}
        style={{
          color: 'white',
          fontSize: '2.5rem',
          marginBottom: 0,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Visitor's Board
      </Title>
            <Divider />
            <Space direction="vertical" size="middle">
  <Input
    value={item}
    onChange={(e) => setItem(e.target.value)}
    placeholder="Enter something..."
    onKeyPress={(e) => keyPress(e)}
    style={{ width: '100%', maxWidth: '300px' }}
  />
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                        width: '100%',
                        maxWidth: '250px',
                        backgroundColor: itemObj.color,
                        cursor: 'move',
                        marginBottom: '15px',
                        color: textColor,
                        position: 'relative', // Establish a positioning context
                      }}
                    >
                      <Space justify="space-between">
                        <span>{itemObj.item}</span>
                        <div
                          style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                          }}
                        >
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
