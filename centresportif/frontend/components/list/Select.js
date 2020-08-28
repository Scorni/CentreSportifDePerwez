import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button,  FormGroup, Label, Input, FormText } from 'reactstrap';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import {ROOMS_QUERY,LOCATIONS_QUERY} from '../list/Query'
import { Query } from 'react-apollo';
import {Table} from 'reactstrap'
import { validate } from 'graphql';


const sportPicks = [
  {
    value: 'Football',
    label: 'Football',
  },
  {
    value: 'Tennis',
    label: 'Tennis',
  },
  {
    value: 'Badminton',
    label: 'Badminton',
  },
  {
    value: 'Athletisme',
    label: 'Athletisme',
  },
  {
    value: 'Judo',
    label: 'Judo',
  },
];

 
 
function sortDataRoom(data,sportPick,setRoomPicks,setOldSportPick){
  var dataMaped = data.rooms.map(rooms => rooms)
  setRoomPicks([])
  for ( let i in dataMaped) {
    if( dataMaped[i].sport === sportPick){
      setRoomPicks(roomPicks => [...roomPicks, 
        {
        value : dataMaped[i].name,
        label : dataMaped[i].name,
      }])
      setOldSportPick(sportPick);
    }
  }
}
function sortDataHour(data,hourPick,roomPick,datePick,setHourPicks,setOldHourPick){
  var dataMaped = data.locations.map(locations => locations)
  var hours = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
  
  /*for ( let i in dataMaped) {
    if( dataMaped[i].sport === sportPick){
      if(dataMaped[i].room === roomPick){
        if(dataMaped[i].date === datePick){
          setHourPicks(hourPicks => [...hourPicks,[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]])
        }
      }
      setOldSportPick(sportPick);
    }
  }*/
  setHourPicks(hourPicks => [...hourPicks,
    {
    value : "8",
    label : "8"
  }])
  setOldHourPick(hourPick);


}
const initialFormData = Object.freeze({});
export default function MultilineTextFields(props) {

    /** select part */
    const [sportPick, setSportPick] = React.useState('');
    const [hourPick, setHourPick] = React.useState('');
    const [roomPick, setRoomPick] = React.useState('');
    const [datePick, setdatePick] = React.useState(new Date());
    const [formData, updateFormData] = React.useState(initialFormData);
    /** sort part */
    const [roomPicks, setRoomPicks] = React.useState([])
    const [oldSportPick, setOldSportPick] = React.useState('')
    const [oldHourPick, setOldHourPick] = React.useState('')
    const [hourPicks, setHourPicks] = React.useState([]);


    /** Handle part */ 
    const handleChangeSport = (event) => {
        updateFormData({
            ...formData,
            [event.target.name]: event.target.value.trim()
        });
        setSportPick(event.target.value);

    };
    const handleChangeHour = (event) => {
        updateFormData({
            ...formData,
            [event.target.name]: event.target.value.trim()
        });
        setHourPick(event.target.value);

    };
    const handleChangeRoom = (event) => {
        updateFormData({
            ...formData,
            [event.target.name]: event.target.value.trim()
        });
        setRoomPick(event.target.value);

    };
    const handleDateChange = (date) => {
        setdatePick(date);
        
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        // ... submit to API or something
        console.log(formData)
        
    };
    if(Object.keys(formData).length > 0){
        return (
            <div>
                <div>
                  <FormGroup>
                    <TextField
                    id="Sport"
                    label="Sport"
                    name ="Sport"
                    select
                    value={sportPick}
                    onChange={handleChangeSport}
                    helperText="Veuillez choisir votre sport."
                    >
                    {sportPicks.map((option) => (
                        <MenuItem key={option.value} value={option.value} name= "menuSport">
                        {option.label}

                        </MenuItem>
                    ))}
                    </TextField>
                  </FormGroup>
                </div>
                {(() => {
                  if(roomPicks.length > 0){
                    return(
                    <div>
                      <FormGroup>
                        <TextField
                        id="Room"
                        label="Salle / Terrain"
                        name ="Room"
                        select
                        value={roomPick}
                        onChange={handleChangeRoom}
                        helperText="Veuillez choisir votre salle / terrain."
                        >
                        {roomPicks.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                        ))}
                        </TextField>
                      </FormGroup>
                    </div>
                  )
                  }
                })()}              
                <div>
                    <FormGroup>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>        
                            <KeyboardDatePicker
                                margin="normal"
                                id="Date"
                                name = "Date"
                                label="Date"
                                format="dd/MM/yyyy"
                                value={datePick}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            />      
                        </MuiPickersUtilsProvider>
                    </FormGroup>
                </div>
                <div>
                    <TextField
                    id="Hour"
                    label="Heure"
                    name ="Heure"
                    select
                    value={hourPick}
                    onChange={handleChangeHour}
                    helperText="La réservation commence à l'heure choisie dans ce formulaire et ce,sur une période de 1H00"
                    >
                    {hourPicks.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </div>
                
                <div>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
                <div>
                <p> Les réservations </p>
                <Query query={ROOMS_QUERY}>
                    {({ data, error, loading }) => {
                       if(data.rooms) {
                          //setRoomPicks(roomPicks => [...roomPicks, sortData(data,sportPick)])
                          if(roomPicks.length == 0){
                            sortDataRoom(data,sportPick,setRoomPicks,setOldSportPick)
                          }else if(oldSportPick !== sportPick){
                            sortDataRoom(data,sportPick,setRoomPicks,setOldSportPick)
                          }                         
                        }
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        return <div>
                            <Table dark hover responsive striped>
                            <thead>
                                    <tr>
                                        <th>Salle</th>
                                        <th>Sport</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.rooms.map(
                                        rooms => 
                                            <tr key= {rooms.id}>
                                                <td key= {rooms.name}>{rooms.name}</td>
                                                <td key= {rooms.sport}>{rooms.sport}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table> 
                        </div>
                        }               
                    }
                </Query>
                <Query query={LOCATIONS_QUERY}>
                    {({ data, error, loading }) => {
                   if(data.locations) {
                          //setRoomPicks(roomPicks => [...roomPicks, sortData(data,sportPick)])
                          console.log(data.locations)
                          if(hourPicks.length == 0){

                            sortDataHour(data,sportPick,roomPick,datePick,setHourPicks,setOldHourPick)
                            console.log(datePick)
                            console.log(hourPicks)
                            console.log("t nouvo toi")
                          }else if(oldHourPick !== hourPick){
                            console.log(oldHourPick)
                            console.log(hourPick)
                            console.log("pas les memes frr")
                            sortDataHour(data,sportPick,roomPick,datePick,setHourPicks,setOldHourPick)
                          }                         
                        }
                        console.log(roomPick)
                        console.log(datePick)
                        if(loading) return <p> Loading...</p>
                        if(error) return <p> Error : { error.message }</p>
                        return <div>
                            <Table dark hover responsive striped>
                            <thead>
                                    <tr>
                                        <th>Heure</th>
                                        <th>Sport</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.locations.map(
                                        locations => 
                                            <tr key= {locations.id}>
                                                <td key= {locations.hour}>{locations.hour}</td>
                                                <td key= {locations.sport}>{locations.sport}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table> 
                        </div>
                        }               
                    }
                </Query>
            </div>
               
            </div>
        )          
    }else {
        return (
            <div>
                <div>
                    <TextField
                    id="Sport"
                    label="Sport"
                    name ="Sport"
                    select
                    value={sportPick}
                    onChange={handleChangeSport}
                    helperText="Veuillez choisir votre sport."
                    >
                    {sportPicks.map((option) => (
                        <MenuItem key={option.value} value={option.value} name= "menuSport">
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </div>
                
                <div>
                      <FormGroup>
                        <TextField
                        id="Room"
                        label="Salle / Terrain"
                        name ="Room"
                        select
                        value={roomPick}
                        onChange={handleChangeRoom}
                        helperText="Veuillez choisir votre salle / terrain."
                        >
                        {roomPicks.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                      </FormGroup>
                    </div>
                <div>
                    <FormGroup>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>        
                            <KeyboardDatePicker
                                margin="normal"
                                id="Date"
                                name = "Date"
                                label="Date"
                                format="dd/MM/yyyy"
                                value={datePick}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                'aria-label': 'change date',
                                }}
                            />      
                        </MuiPickersUtilsProvider>
                    </FormGroup>
                </div>
                <div>
                    <TextField
                    id="Hour"
                    label="Heure"
                    name ="Heure"
                    select
                    value={hourPick}
                    onChange={handleChangeHour}
                    helperText="La réservation commence à l'heure choisie dans ce formulaire et ce,sur une période de 1H00"
                    >
                    {hourPicks.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </div>
                
                 
                <div>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
               
            </div>
        )
                    }
        
    }
