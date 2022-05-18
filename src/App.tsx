import React from 'react';
import { useState } from "react";
import {createUseStyles} from 'react-jss';
import Draggable from "react-draggable"

const useWindowStyles = createUseStyles({
  window: {
    padding: "0px",
    margin: "0px",
    width: '328px',
    height: '328px',
    boxSizing: 'border-box',
  },
  titleBar: {
    height: "30px",
    backgroundColor: "#e3e3e3",
    color: "black",
    boxSizing: 'border-box',
    border: 'ridge 4px #e3e3e3',
    display: 'flex',
    justifyContent: 'space-between',
  },
  windowBody: {
    width: '320px',
    height: '320px',
    border: 'ridge 4px #e3e3e3',
    borderTop: '0px',
  },
  title: {
  },
  closeButton: {
    cursor: "pointer"
  },
});

function ChessWindow(props: {
  closeWindow: () => void
}) {
  const classes = useWindowStyles();
  return (
    <Draggable
      axis="both"
      handle=".titleBar"
      defaultPosition={{x: 0, y: 0}}
      position={null}
      grid={[5, 5]}
      scale={1}
      onStart={(e) => console.log("start", e)}
      onDrag={(e) => console.log("drag", e)}
      onStop={(e) => console.log("stop", e)}
    >
      <div className={classes.window}>
        <div className={"titleBar " + classes.titleBar}>
          <div className={classes.title}>Chess</div>
          <div onClick={props.closeWindow} className={classes.closeButton}>X</div>
        </div>
        <iframe className={classes.windowBody} src="https://cburke.me/chess" />
      </div>
    </Draggable>
  );
}

const useMainStyles = createUseStyles({
  icon: {
    width: "50px",
    height: "50px",
    cursor: "pointer",
    '& img': {
      width: "100%",
    }
  }
});

function App() {
  const [isChessOpen, setIsChessOpen] = useState(false);
  const classes = useMainStyles();
  return (
    <div>
      <div className={classes.icon}>
        <img onClick={() => setIsChessOpen(true)} src="./chesshorse.png" />
      </div>
      {isChessOpen && <ChessWindow closeWindow={()=>setIsChessOpen(false)} />}
    </div>
  );
}

export default App;
