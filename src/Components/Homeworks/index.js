import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Tianna Lopes and I am student here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link to View Product</th>
          <th>Link to Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td><a href="https://github.com/TiannaLopes/gitpracticehw1"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/gitpracticehw1 "> Link to Code</a> </td>

      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/tiannalopes/pen/rNywXWd"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/rNywXWd"> Link to Code</a> </td>

       
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Homework 2.2</td>
          <td>HTML Course Website Practice - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/tiannalopes/pen/xxqLwOd"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/xxqLwOd"> Link to Code</a> </td>
       
      </tr>
      <tr>
          <th scope="row">4</th>
          <td>Homework 3.1</td>
          <td>CSS Practice- Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/tiannalopes/pen/JjWybNd?editors=1100"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/JjWybNd?editors=1100"> Link to Code</a> </td>

      </tr>

      <tr>
          <th scope="row">5</th>
          <td>Homework 3.2</td>
          <td>Design a Navagation Bar</td>
          <td><a href="https://codepen.io/tiannalopes/pen/oNZePja"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/oNZePja"> Link to Code</a> </td>

      </tr>
      <tr>
          <th scope="row">5</th>
          <td>Homework 3.3</td>
          <td>Javascript Function</td>
          <td><a href="https://codepen.io/tiannalopes/pen/yLMoQzN"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/yLMoQzN"> Link to Code</a> </td>
      </tr>
      <tr>
          <th scope="row">6</th>
          <td>Homework 4.1</td>
          <td>Interview Assignment Practice </td>
          <td><a href="https://codepen.io/tiannalopes/pen/ExWbYVd?editors=1111"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/ExWbYVd?editors=1111"> Link to Code</a> </td>
      </tr>
      <tr>
          <th scope="row">6</th>
          <td>Homework 5.1</td>
          <td>Theme Change </td>
          <td><a href="https://codepen.io/tiannalopes/pen/bGqYPPz?editors=0011"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/hw5-1-Themechange"> Link to Code</a> </td>
      </tr>

      <tr>
          <th scope="row">6</th>
          <td>Homework 5.2</td>
          <td>frontier Challenge </td>
          <td><a href=" "> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/frontierChallenge">Link to Code</a> </td>
      </tr>
      <tr>
          <th scope="row">6</th>
          <td>Homework 5.3</td>
          <td>Algo Expert </td>
          <td><a href="https://codepen.io/tiannalopes/pen/bGqYPPz?editors=0011"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/bGqYPPz?editors=0011">Link to Code</a> </td>
</tr>
    <tr>
          <th scope="row">6</th>
          <td>Homework 6.1</td>
          <td>Cascade to vanilla javascript boilerplate</td>
          <td><a href=""> View Result</a> </td>
          <td><a href="hts://github.com/TiannaLopes/CascadeProject">Link to Code</a> </td>
</tr>
 
      <tr>
      <th scope="row">4</th>
          <td>Extra Practice </td>
          <td>Extra practice for Javascript </td>
          <td><a href="https://codepen.io/tiannalopes/pen/OJpOQqg"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/extraPracticeJS.git"> Link to Code</a> </td>
      </tr>
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;
