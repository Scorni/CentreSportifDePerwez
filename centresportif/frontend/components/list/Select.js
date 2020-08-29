import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Button,  FormGroup} from 'reactstrap';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
import {ROOMS_QUERY,LOCATIONS_QUERY,ROOMSFILTER_QUERY} from '../list/Query'
import {CREATE_LOCATION_MUTATION} from '../list/Mutation'
import { Query,Mutation } from 'react-apollo';

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

const ErrorMessage = ({error}) => {
  if(!error || !error.message) return null;
  if(
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
    ){
      return error.networkError.result.errors.map((error, i) => (
        <p>
          <strong>
            ERREUR : {error.message.replace("GrapQL error: ", "")}
          </strong>
        </p>
      ));
    }
  return(
    <p>
          <strong>
            ERREUR : {error.message.replace("GrapQL error: ", "")}
          </strong>
        </p>
  );
};
 
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
  var hours = [
    {
    value : 8,
    label : 8
  },{
    value : 9,
    label : 9
  },{
    value : 10,
    label : 10
  },{
    value : 11,
    label : 11
  },{
    value : 12,
    label : 12
  },{
    value : 13,
    label : 13
  },{
    value : 14,
    label : 14
  },{
    value : 15,
    label : 15
  },{
    value : 16,
    label : 16
  },{
    value : 17,
    label : 17
  },{
    value : 18,
    label : 18
  },{
    value : 20,
    label : 20
  },{
    value : 21,
    label : 21
  },{
    value : 22,
    label : 22
  }]
  
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
  for ( let i in hours) {
    setHourPicks(hourPicks => [...hourPicks,{
      value : hours[i].value,
      label : hours[i].label,
    }])
    setOldHourPick(hourPick);
  }


}
const initialFormData = Object.freeze({});
export default function MultilineTextFields(props) {

    /** select part */
    const [sportPick, setSportPick] = React.useState('');
    const [hourPick, setHourPick] = React.useState('');
    const [roomPick, setRoomPick] = React.useState('');
    const [datePick, setdatePick] = React.useState(new Date('Jan 01 2020'));
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
            [event.target.name]: event.target.value
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
      var lefrr;
      
      if((date.getMonth()+1) < 10){
        lefrr = (date.getDate() + "/0" + (date.getMonth()+1) + "/"+ date.getFullYear());

      }else{
        lefrr = (date.getDate() + "/" + (date.getMonth()+1) +"/"+ date.getFullYear());

      }
      
      updateFormData({
        ...formData,
        ["Date"]: lefrr
      });
    };
    const handleSubmit = (e) => {
      /*var lefrr
      
      if(formData.Date === undefined){
        if((datePick.getMonth()+1) < 10){
          lefrr = (datePick.getDate() + "/0" + (datePick.getMonth()+1) + "/"+ datePick.getFullYear());
  
        }else{
          lefrr = (datePick.getDate() + "/" + (datePick.getMonth()+1) +"/"+ datePick.getFullYear());
  
        }
        updateFormData({
          ...formData,
          ["Date"]: lefrr
        });
      }
      console.log(formData)
      console.log(e)
     
        e.preventDefault();
        // ... submit to API or something
        response = createLocation({ variables: { sport: formData.Sport,hour: formData.Hour, day: formData.Date }});
        console.log(response)
        Router.push({
          query : {sport : response.e.createLocation.sport}
        })
      return <div></div>
        */
    };

    if(Object.keys(formData).length > 0){
        return (
          
      <Mutation mutation={CREATE_LOCATION_MUTATION} >
        {(createLocation, {data, loading, error}) =>(
          <form
          aria-disabled={loading} 
          disabled={loading}
          onSubmit= {
            async e => {
              console.log(formData.Date)

              e.preventDefault();
              const response = await createLocation({ variables :{sport :formData.Sport,hour:formData.Hour,day:formData.Date}});
              console.log(response);
              /**Router.push({
                pathname : '/creation',
                query : {sport : "Football"}
                
              });*/
            }} 
            
          >
            <ErrorMessage error={error}/>
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
                if(sportPick){
                  console.log("sportPick : " + sportPick)
                  
                  return(
                    <div>
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
                </div>
                )}})()}
                {(() => {
                  if(sportPick && roomPick){
                    return(
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
                                    helperText="Veuillez choisir votre date."

                                />      
                            </MuiPickersUtilsProvider>
                        </FormGroup>
                      </div>
                  )}})()}
                  {(() => {
                  if(sportPick && roomPick && datePick){
                    console.log(datePick)
                    return(
                      <div>
                        <FormGroup>
                            <TextField
                            id="Hour"
                            label="Heure"
                            name ="Hour"
                            select
                            value={hourPick}
                            onChange={handleChangeHour}
                            helperText="La période de réservation s'étend sur une heure à partir de celle choisie"
                            >
                            {hourPicks.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                          </FormGroup>
                      </div>
                    )}})()}
                    {(() => {
                    if(sportPick && roomPick && datePick && hourPick){
                    return(
                      <div>
                          <div>
                          <Button type="submit">Submit</Button>
                          
                        </div>
                      </div>
                      
                    )}})()}
                
                
              <Query query={ROOMS_QUERY}>
                  {({ data, error, loading }) => {
                      if(data.rooms) {
                        if(roomPicks.length == 0){
                          sortDataRoom(data,sportPick,setRoomPicks,setOldSportPick)
                        }else if(oldSportPick !== sportPick){
                          sortDataRoom(data,sportPick,setRoomPicks,setOldSportPick)
                        }                         
                      }
                      return <div></div>
                      }               
                  }
              </Query>
              <Query query={LOCATIONS_QUERY}>
                  {({ data, error, loading }) => {
                    if(data.locations) {
                      if(hourPicks.length == 0){
                        sortDataHour(data,sportPick,roomPick,datePick,setHourPicks,setOldHourPick)
                      }else if(oldHourPick !== hourPick){
                        if(sportPick !== oldSportPick){
                          if(roomPick){
                            sortDataHour(data,sportPick,roomPick,datePick,setHourPicks,setOldHourPick)
                          }
                        }
                      }                         
                    }
                      return <div></div>
                  }}
              </Query>
              <Query query={ROOMSFILTER_QUERY}>
                  {(roomsFilter ) => {
                    async e => {

                    const value  = await roomsFilter({variables : {name: formData.Room, sport: formData.sport}})
                    console.log(value)
                    
                    }
                    return <div></div>
                  }}
              </Query>
          </div>     
        
        </form>
      )}
    </Mutation>
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
            </div>
        )
    }
        
}
