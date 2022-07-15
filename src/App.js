// import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Taskbar from './Taskbar';
import Header from './Header';
import {rooms}from './data';
import React from 'react';
import Model from './Model';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      rooms:rooms,
      model:false,
      location:"",
      locationValue:"",
      adultguests:Number(0),
      childguests:Number(0),
      locationDetails:false,
      guestsDetails:false
    }
  }
  closeModel=()=>{
    // console.log("Clicked!!!");
    this.setState({model:!this.state.model})
  }
  locationInput=(e)=>{
    console.log(e.target.attributes[0].value);
    this.setState({locationValue:e.target.attributes[0].value,location:e.target.textContent})
  }




  adultguestsInputIncrease=()=>{
    console.log("adult "+this.state.adultguests);
    let val=this.state.adultguests+1;
    if(val<=10){
      this.setState({adultguests:val});
    }
    else{
      alert("Max 10 people allowed")
    }
  }
  adultguestsInputDecrease=()=>{
    console.log("adult "+this.state.adultguests);
    let val=this.state.adultguests-1;
    if(val>=0){
      this.setState({adultguests:val});
    }
    else {
      alert("Add People")
    }
  }
  childguestsInputIncrease=()=>{
    console.log("child "+this.state.childguests);
    let val=this.state.childguests+1;
    if(val<=5){
      this.setState({childguests:val});
    }
    else{
      alert("Only 5 max children allowed")
    }
    
  }
  childguestsInputDecrease=()=>{
    console.log("child "+this.state.childguests);
    let val=this.state.childguests-1;
    if(val>=0){
      this.setState({childguests:val});
    }
    else {
      alert("add Child");
    }
  }
  
  
  roomList=()=>{
    let list=rooms.filter((room)=>{
      return room.city===this.state.locationValue;
    });
    console.log(list,this.state.locationValue);
    this.setState({rooms:list,model:false});
  }





  locationMenu=()=>{
    this.setState({locationDetails:true,guestsDetails:false})
  }
  guestsMenu=()=>{
    this.setState({locationDetails:false,guestsDetails:true})
  }
  render(){
    // let cardArray;
    
    let  cardArray=this.state.rooms.map((user,i)=>{
        return <Card key={Math.random()}
                    photo={rooms[i].photo}
                    beds={rooms[i].beds}
                    type={rooms[i].type}
                    title={rooms[i].title}
                    rating={rooms[i].rating}
                    superHost={rooms[i].superHost}
                />
      })
    
    // else{
    //   cardArray=rooms.map((user,i)=>{
    //     if(rooms[i].city===this.state.location){
    //       return <Card
    //       key={Math.random()}
    //       photo={rooms[i].photo}
    //       beds={rooms[i].beds}
    //       type={rooms[i].type}
    //       title={rooms[i].title}
    //       rating={rooms[i].rating}
    //       superHost={rooms[i].superHost}
    //           />
    //     }
    //   })
    // }
    const len=cardArray.length;
    // console.log(len);
    return(
      <>
      <Taskbar openModel={this.closeModel}/>
      <Model 
      modelState={this.state.model} 
      openModel={this.closeModel} 
      locationValue={this.state.location} 
      changeLocationInput={this.locationInput}
      adultguestsValue={this.state.adultguests}
      childguestsValue={this.state.childguests}
      adultchangeGuestsInputIncrease={this.adultguestsInputIncrease}
      adultchangeGuestsInputDecrease={this.adultguestsInputDecrease}
      childchangeGuestsInputIncrease={this.childguestsInputIncrease}
      childchangeGuestsInputDecrease={this.childguestsInputDecrease}
      roomList={this.roomList}
      locationDetails={this.state.locationDetails}
      guestsDetails={this.state.guestsDetails}
      locationMenu={this.locationMenu}
      guestsMenu={this.guestsMenu}
      />
      <Header length={len}/>
      <div className="wrapper">  
      {
        cardArray
      }
      </div>
      </>
    )
  }
}


export default App;
