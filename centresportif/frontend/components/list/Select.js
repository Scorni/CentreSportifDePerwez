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

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
const sportPicks = [
    {
      value: 'ballon',
      label: 'football',
    },
    {
      value: 'balle',
      label: 'tennis',
    },
    {
      value: 'volant',
      label: 'badminton',
    },
    {
      value: 'baton',
      label: 'course-relais',
    },
  ];

  const hourPicks = [
    {
      value: 'ballon',
      label: 'football',
    },
    {
      value: 'balle',
      label: 'tennis',
    },
    {
      value: 'volant',
      label: 'badminton',
    },
    {
      value: 'baton',
      label: 'course-relais',
    },
  ];
  const roomPicks = [
    {
      value: 'ballon',
      label: 'football',
    },
    {
      value: 'balle',
      label: 'tennis',
    },
    {
      value: 'volant',
      label: 'badminton',
    },
    {
      value: 'baton',
      label: 'course-relais',
    },
  ];
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

    const [currency, setCurrency] = React.useState('EUR');
    const [sportPick, setSportPick] = React.useState('ballon');
    const [hourPick, setHourPick] = React.useState('ballon');
    const [roomPick, setRoomPick] = React.useState('ballon');
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
        console.log(formData);
        // ... submit to API or something
      };

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
                    helperText="Veuillez choisir votre sport svp."
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
                <div>
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
                    
                </div>
                <div>
                    <Button onClick = {handleSubmit}>Submit</Button>
                </div>
               
            </div>
        )
    }
