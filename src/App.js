import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonGroup,Form,FormGroup,ControlLabel,FormControl,HelpBlock,Checkbox,Radio,Grid,Row,Col} from 'react-bootstrap';

class App extends Component {
  
  
  state= {
      name:"",
      address:"",
      color:"",
      movies:[],
      book:[],
      gender:"",
      subject:""
    };
  
  
  onChange = (fieldName) => {
    return (event)=>{
      var state = this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
    var targetArray = this.state[fieldName];
    if(targetArray.indexOf(event.target.value) >=0)
    targetArray.splice(
      targetArray.indexOf(event.target.value),
      1
      );
      else
      targetArray.push(event.target.value);
      
      var state=this.state;
      state[fieldName]=targetArray;
      this.setState(state);
    }
  };
  
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h2>Student Survey</h2>
        </div>
        <p className="jumbotron">
        <Grid>
        <Row>
          <Col md={6}>
           <Form>
          <FormGroup>
          <ControlLabel>Name please...</ControlLabel>
          <FormControl type="text" placeholder="Name here..."
                value={this.state.name}
                onChange={this.onChange('name')} />
          <HelpBlock>use to identify you</HelpBlock>
          </FormGroup>
         
          
          <FormGroup>
          <ControlLabel>Choosefavorite color</ControlLabel>
          <FormControl componentClass="select" placeholder="Color here..."
                   value={this.state.color}
                   onChange={this.onChange('color')} >
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  
          </FormControl>
          <HelpBlock>use to identify you</HelpBlock>
          </FormGroup>
          
          
          <FormGroup>
          <ControlLabel>Favorite Movies</ControlLabel>
            <Checkbox value="Harry Potter"
                      checked={this.state.movies.indexOf('Harry Potter')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')}>HarryPotter</Checkbox>
             <Checkbox value="lotr"
                      checked={this.state.movies.indexOf('lotr')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')}>Lord of the Rings</Checkbox>
            <Checkbox value="Twilight"
                      checked={this.state.movies.indexOf('Twilight')>=0 ? true:false}
                      onChange={this.checkboxChange('movies')}>Twilight</Checkbox>
     
           
            </FormGroup>
           
            <FormGroup>
            <ControlLabel>Gender</ControlLabel>
              <Radio name="gender" value="Male"
                      onChange={this.onChange('gender')}>Male</Radio>
              <Radio name="gender"value="Female"
                      onChange={this.onChange('gender')}>Female</Radio>
              <Radio name="gender"value="Gay"
                      onChange={this.onChange('gender')}>Gay</Radio>
              <Radio name="gender"value="Lesbian"
                      onChange={this.onChange('gender')}>Lesbian</Radio>
              <Radio name="gender"value="Bisexual"
                      onChange={this.onChange('gender')}>Bisexual</Radio>
             </FormGroup>
          
          <ButtonGroup>
          <Button bsStyle="info"><span className="glyphicon glyphicon-th-large"></span>&nbsp; Info </Button>
           <Button bsStyle="primary"><span className="glyphicon glyphicon-headphones"></span>&nbsp; Primary </Button>
            <Button bsStyle="warning"><span className="glyphicon glyphicon-film"></span>&nbsp;Warning </Button>
             <Button bsStyle="danger"><span className="glyphicon glyphicon-remove-sign"></span>&nbsp;Error </Button>
             </ButtonGroup>
             </Form>
          </Col>
          <Col md={6}>
          <strong>Name is {this.state.name}</strong><br/><br/>
          <strong>Color is {this.state.color}</strong><br/><br/>
          <strong>Movies are {
            this.state.movies.map((item,i)=>{
              return <div>
                <span className="label label-info">{item}</span>
                </div>
            })}</strong><br/><br/>
          <strong>Gender is {this.state.gender}</strong><br/><br/>
          
          
          
          
          <Form>
          <FormGroup>
          <ControlLabel>YOUR ADDRESS</ControlLabel>
          <FormControl type="text" placeholder="Adress here..."
                value={this.state.address}
                onChange={this.onChange('address')} />
          <HelpBlock>use to identify your address</HelpBlock>
          </FormGroup>
          
          
          <FormGroup>
          <ControlLabel>FAVORITE BOOKS</ControlLabel>
            <Checkbox value="Harry Potter"
                      checked={this.state.book.indexOf('Harry Potter')>=0 ? true:false}
                      onChange={this.checkboxChange('book')}>HarryPotter</Checkbox>
             <Checkbox value="lotr"
                      checked={this.state.book.indexOf('lotr')>=0 ? true:false}
                      onChange={this.checkboxChange('book')}>Lord of the Rings</Checkbox>
            <Checkbox value="Twilight"
                      checked={this.state.book.indexOf('Twilight')>=0 ? true:false}
                      onChange={this.checkboxChange('book')}>Twilight</Checkbox>
            <Checkbox value="Vampire Diaries"
                      checked={this.state.book.indexOf('Vampire Diaries')>=0? true:false}
                      onChange={this.checkboxChange('book')}>Vampire Diaries</Checkbox>
           
           
           
            </FormGroup>
            
            <FormGroup>
            <ControlLabel>FAVORITE SUBJECT</ControlLabel>
              <Radio name="subject" value="Math"
                      onChange={this.onChange('subject')}>Math</Radio>
              <Radio name="subject" value="English"
                      onChange={this.onChange('subject')}>English</Radio>
              <Radio name="subject" value="Science"
                      onChange={this.onChange('subject')}>Science</Radio>
             </FormGroup>
          
         
             
           <form>
           <strong>My address is {this.state.address}</strong><br/><br/>
          <strong>My favorite books are {
            this.state.book.map((item,i)=>{
              return <div>
                <span className="label label-info">{item}</span>
                </div>
            })}<br/></strong><br/>
          <strong>Favorite subject {this.state.subject}<br/><br/></strong>
          </form>
          
             </Form>
          </Col>
        
        </Row>
        </Grid>
         
        </p>
      </div>
    );
  }
}

export default App;
