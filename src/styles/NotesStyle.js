import { css } from '@emotion/core'
export const blurMainWrapper = css`{
    opacity: 0.3;
}`

export const mainWrapper = css`{
    display: flex;
}`
export const noteList = css`{
    display: flex;
    margin-top: 50px;
    float:left;
    overflow-y: auto;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
  }`

export const buttonWrapper = css`{
    display: flex;
    align-items: center;
}`

export const addNote = css`{
    position:fixed;
    width: 60px;
    height: 60px;
    bottom: 0;
    right: 20px;
    background-color: #19647E;
    border-radius:50px;
    text-align: center;
    color: #fff;
    margin: 20px 12px 40px 40px;
    color:#FFF;
    box-shadow: 2px 2px 3px #000;
    font-size:40px;
    font-weight: bold;
}`

export const note = css`{
    position: relative;
    width: 320px;
    padding-bottom:16px;
    display: flex;
    justify-items: center;
    justify-content: center;
    height:auto;
    margin: 40px 20px; 
}`

export const paper = css`{
    color:#FFF;
    font-size:20px;
}`

export const textAreaStyle = css`{
    word-wrap: break-word;
    resize: none;
    overflow-y: scroll;
    box-sizing: content-box;
}`

export const text = css`{
    background-color:#FFF;
    color:#222;
    font-family:Courier, monospace;
    font-weight:normal;
    resize:none;
    line-height:40px;
    padding-left:50px;
    padding-right:20px;
    padding-top:45px;
    padding-bottom:34px;
    background-image:url(https://static.tumblr.com/maopbtg/E9Bmgtoht/lines.png), url(https://static.tumblr.com/maopbtg/nBUmgtogx/paper.png);
    background-repeat:repeat-y, repeat;
    border-radius:12px;
    box-shadow: 0px 2px 14px #000;
    border-top:1px solid #FFF;
    border-bottom:1px solid #FFF;
    background-position-x: -45px;
}`

export const minimizeTextArea = css`{
    width: 250px;
    height: 160px;
    font-size:14px;
}`

export const textAreaWrapper = css`{
    z-index: 2;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
}`

export const maximizeTextArea = css`{
    width: 600px;
    height: 480px;
    font-size: 18px;
}`

export const margin = css`{
    margin-left:12px;
    margin-bottom:20px;
    user-select: none; 
}`

export const title = css`{
    background-color:transparent;
    border-bottom:3px solid #FFF;
    color:#FFF;
    font-size: 16px;
    font-family:Courier, monospace;
    height:28px;
    font-weight:bold;
    width:200px;
}`

export const remove = css`{
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0;
    padding: 8px;
    cursor: pointer
}`

export const pin = css`{
    width: 24px;
    height: 24px;
    position: absolute;
    bottom: 20px;
    padding: 12px;
    cursor: pointer
}`

export const pinned = css`{
    background: #C2714F; 
}`

export const searchBar = css`{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 2;
}`

export const searchBarWrapper = css`{
    position: relative;
}`

export const input = css`{
    width: 200px;
    height: 35px;
    outline: none;
    border: none;
    background: #19647E;
    color: white;
    text-shadow: 0 0 10px #19647E;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 #19647E,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    z-index: 4;
    font-weight: bolder;
    letter-spacing: 0.1em;
    font-size: 16px;
    &::placeholder {
      color: white;
      font-weight: bold;
      opacity: 0.5
    }
}`

export const searchRemove = css`{
    position: absolute;
    width:20px;
    height: 20px;
    right: 0;
    padding-top: 8px;
    padding-bottom: 8px;
    z-index:6;
    margin-right: 8px;
}`

export const expand = css`{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 24px;
    padding: 12px;
    cursor: pointer
}`

export const date = css`{
    color: #19647E;
    font-size: 12px;
    position: absolute;
    padding: 26px 10px 0px 4px;
}`

/* setup tooltips */
export const tooltip = css`{
    position: relative;
    margin-left: 2px;
    :before,
  :after {
    width: 50px;
    height: 10px;
    color: #fff;
    display: block;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    margin-top: 20px;
  }
  :after {
    border-right: 6px solid transparent;
	border-bottom: 6px solid #19647E; 
    border-left: 6px solid transparent;
    height: 0;
    top: 20px;
    left: 15px;
    width: 0;
    content:'';
  }
  :before {
    padding: 6px;
    font-size: 8px;
    background: #19647E;
    border-radius: 10px;
    color: #fff;
    content: attr(data-title);
    top: 26px;
    white-space: nowrap;
  }
}`

export const swing = css`{
    :before,
    :after {
      transform: translate3d(0,30px,0) rotate3d(0,0,1,60deg);
      transform-origin: 0 0;
      transition: transform .15s ease-in-out, opacity .2s;
    }
    :after {
      transform: translate3d(0,60px,0);
      transition: transform .15s ease-in-out, opacity .2s;
    }
    :hover:before,
    :hover:after {
      opacity: 1;
      transform: translate3d(0,0,0) rotate3d(1,1,1,0deg);
    }
}`

export const closeFullView = css`{
    position: absolute;
    width:20px;
    height: 20px;
    margin: 8px;
    padding: 4px;
}`
