import React, {
    Component
} from 'react'
import {HiOutlineSearch,HiMinusSm} from 'react-icons/hi';
import {GrFormAdd} from 'react-icons/gr';
import {MdOutlineLocationOn} from 'react-icons/md'
import './model.css';


export default class Model extends Component {
    render() {
        const {modelState,
            openModel,
            locationValue,
            changeLocationInput,
            adultguestsValue,
            childguestsValue,
            adultchangeGuestsInputIncrease,
            adultchangeGuestsInputDecrease,
            childchangeGuestsInputIncrease,
            childchangeGuestsInputDecrease,
            roomList,
            locationDetails,
            guestsDetails,
            locationMenu,
            guestsMenu
        }
            =this.props;
        // console.log(modelState);

        if(modelState){
            return (
            <div className='container'>
            <div className='content'>
                <header>
                    <button onClick={openModel} style={{width:50}}>X</button>
                </header>
                <div className='modal-header'>
                    <div onClick={locationMenu} className="modal-header-div">
                        <label>Location</label>
                        <input placeholder='Helsinki, Finland' value={locationValue} className='modal-location-input'
                        ></input>
                    </div>
                    <div onClick={guestsMenu}>
                        <label>Guests </label>
                        <input value={adultguestsValue===0 && childguestsValue===0?`Add Guests `:`${Number(adultguestsValue)+Number(childguestsValue)} guests`} 
                        className='modal-guests-input'></input>
                    </div>
                    <div>
                        <button className='modal-submit' onClick={roomList}><HiOutlineSearch/>Submit</button>
                    </div>
                </div>
                <div className='modal-details'>
                    <div>
                    {locationDetails?
                    
                    <ul>
                        <li value='Helsinki' onClick={changeLocationInput}><span><MdOutlineLocationOn/></span>Helsinki, Finland</li>
                        <li value='Turku' onClick={changeLocationInput}><span><MdOutlineLocationOn/></span>Turku, Finland</li>
                        <li value='Oulu' onClick={changeLocationInput}><span><MdOutlineLocationOn/></span>Oulu, Finland</li>
                        <li value='Vaasa' onClick={changeLocationInput}><span><MdOutlineLocationOn/></span>Vaasa, Finland</li>
                    </ul>
                    
                    :null}
                    </div>
                    {guestsDetails?
                    <div>
                    <p className='guests-heading'>Adults</p>
                    <p className='guests-details'>Age 13 or above</p>
                    <div className='guests-number'>
                        <button onClick={adultchangeGuestsInputDecrease} className="plusMinus"><HiMinusSm/></button>
                        <p>{adultguestsValue}</p>
                        <button onClick={adultchangeGuestsInputIncrease} className="plusMinus"><GrFormAdd/></button>
                    </div>
                    <p className='guests-heading'>Children</p>
                    <p className='guests-details'>Age 2-12</p>
                    <div className='guests-number'>
                        <button onClick={childchangeGuestsInputDecrease} className="plusMinus"><HiMinusSm/></button>
                        <p>{childguestsValue}</p>
                        <button onClick={childchangeGuestsInputIncrease} className="plusMinus"><GrFormAdd/></button>
                    </div>
                    </div>
                    :null}
                    <div></div>
                </div>
            </div>
            </div>
            )
        }
        return null;
    }
}
