
.slide-container{
    display: flex;
    width: 80%;
    margin: auto;
    position: relative;
    margin-bottom: 10vh;
  }
  .slide-container i{
    top: 50%;
    height: 44px;
    width: 44px;
    color: #343F4F;
    cursor: pointer;
    font-size: 1.15rem;
    position: absolute;
    text-align: center;
    line-height: 44px;
    background: #fff;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: transform 0.1s linear;
  }
  .slide-container i:active{
    transform: translateY(-50%) scale(0.9);
  }
  .slide-container i:hover{
    background: #f2f2f2;
  }
  .slide-container i:first-child{
    left: -22px;
    display: none;
  }
  .slide-container i:last-child{
    right: -22px;
  }
  .slide-container .carousel{
    font-size: 0px;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    scroll-behavior: smooth;
  }
  .carousel.dragging{
    cursor: grab;
    scroll-behavior: auto;
  }
  .carousel.dragging img{
    pointer-events: none;
  }
  .carousel img{
    height: 340px;
    object-fit: cover;
    user-select: none;
    margin-left: 14px;
    width: calc(100% / 3);
  }
  .carousel img:first-child{
    margin-left: 0px;
  }
  
  @media screen and (max-width: 900px) {
    .carousel img{
      width: calc(100% / 2);
    }
  }
  
  @media screen and (max-width: 550px) {
    .carousel img{
      width: 100%;
    }
  }
