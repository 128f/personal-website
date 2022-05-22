import React from 'react';
import { useState } from "react";
import {createUseStyles} from 'react-jss';
import Draggable from "react-draggable"

const useWindowStyles = (width: number, height: number) => createUseStyles({
  window: {
    padding: "0px",
    margin: "0px",
    width: `${width + 8}px`,
    height: `${height + 8}px`,
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
    width: `${width}px`,
    height: `${height}px`,
    border: 'ridge 4px #e3e3e3',
    borderTop: '0px',
  },
  title: {
  },
  closeButton: {
    cursor: "pointer"
  },
});

function Window(props: {
  closeWindow: () => void,
  dimension: {
    w: number,
    h: number,
  },
  src: string,
}) {
  const classes = useWindowStyles(props.dimension.w, props.dimension.h)();
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
        <iframe className={classes.windowBody} src={props.src} />
      </div>
    </Draggable>
  );
}

const useMainStyles = createUseStyles({
  icon: {
    width: "200px",
    height: "200px",
    cursor: "pointer",
    margin: "5px",
    '& img': {
      width: "100%",
    }
  },
  windowSpawner: {
    position: 'absolute',
    width: "0px"
  }
});

function App() {
  const [isChessOpen, setIsChessOpen] = useState(false);
  const [isPokerOpen, setIsPokerOpen] = useState(false);
  const classes = useMainStyles();
  return (
    <div>
      <div className={classes.windowSpawner}>
        {isChessOpen && <Window
          closeWindow={()=>setIsChessOpen(false)}
          dimension={{w: 320, h: 320}}
          src="https://cburke.me/chess/index.html"
        />
        }
        {isPokerOpen && <Window
          closeWindow={()=>setIsPokerOpen(false)}
          dimension={{w: 500, h: 200}}
          src="https://cburke.me/poker/index.html"
        />}
      </div>

      <div className={classes.icon}>
        <img onClick={() => setIsChessOpen(true)} src="./chess.png" />
      </div>
      <div className={classes.icon}>
        <img onClick={() => setIsPokerOpen(true)} src="./card.png" />
      </div>
    </div>
  );
}

export default App;
