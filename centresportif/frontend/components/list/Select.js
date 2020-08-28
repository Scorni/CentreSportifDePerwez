import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MaterialUIPickers from '../list/DatePicker';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import {ROOMS_QUERY} from '../list/Query'
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

  const hourPicks = [
   
  {
    value: 'Football',
    label: 'Football',
  },
  {
    value: 'tennis',
    label: 'tenns',
  },
  {
    value: 'badminton',
    label: 'badmintn',
  },
  {
    value: 'course-relais',
    label: 'course-reais',
  },
  ];
  const roomPicks = [];
  
const test= <Query query={ROOMS_QUERY}>
            {({ data, error, loading }) => {
                console.log(data)
                if(loading) return <p> Loading...</p>
                if(error) return <p> Error : { error.message }</p>
                return data.rooms.map( rooms => rooms.name)
            }}
            </Query>;
function sortData(data,sportPick){
  var dataMaped = data.rooms.map(rooms => rooms)
  var validated = [];
  
  console.log(sportPick)
  for ( let i in dataMaped) {
    console.log(dataMaped[i].name)
    if( dataMaped[i].sport === sportPick){
      validated[i] = dataMaped[i].name;
      roomPicks[i] = { 
        value : dataMaped[i].name,
        label : dataMaped[i].name,

      }
    }
  }
  console.log(roomPicks)
  console.log("validated  : " + validated)
  return roomPicks
}
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const initialFormData = Object.freeze({
   
  });
export default function MultilineTextFields(props) {

    const [currency, setCurrency] = React.useState('');
    const [sportPick, setSportPick] = React.useState('');
    const [hourPick, setHourPick] = React.useState('');
    const [roomPick, setRoomPick] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [formData, updateFormData] = React.useState(initialFormData)

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
        setSelectedDate(date);
        
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        // ... submit to API or something
        //console.log(formData)
        
    };
    console.log(test);
    if(Object.keys(formData).length > 0){
      /** SUPPRIMER PARAGRAPHE P */
        return (
            <div>
                <p>formdata existe</p> 
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
                  console.log("roomPick" +roomPicks)
                  if(roomPicks){
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
                                value={selectedDate}
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
                        if(data.rooms) sortData(data,sportPick)
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
                                            <tr key= {rooms.name}>
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
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>        
                            <KeyboardDatePicker
                                margin="normal"
                                id="Date"
                                name = "Date"
                                label="Date"
                                format="dd/MM/yyyy"
                                value={selectedDate}
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
                {(() => {
                  console.log("roomPick" + roomPick)
                  /**if(roomPick){
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
                  }*/
                })()}
                <div>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
               
            </div>
        )
                    }
        
    }
