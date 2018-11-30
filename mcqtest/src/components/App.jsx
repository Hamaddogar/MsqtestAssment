import React from 'react';
import BoxScore from './quiz/BoxScore.jsx';
import QuestionList from './quiz/QuestionList.jsx';
import Results from './quiz/Results.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: '   owner of Gamica is___?',
          choices: [
            {
              id: 'a',
              text: 'Khurram Rheel sb',
            },
            {
              id: 'b',
              text: 'Hammad',
            },
            {
              id: 'c',
              text: 'Hamza',
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'Which company mantains ReactJS____?',
          choices: [
            {
              id: 'a',
              text: 'Google',
            },
            {
              id: 'b',
              text: 'Facebook',
            },
            {
              id: 'c',
              text: 'Airbnb',
            }
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: 'Microsoft Owener is _____?',
          choices: [
            {
              id: 'a',
              text: 'Bilgate',
            },
            {
              id: 'b',
              text: 'Steve Job',
            },
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'Is ReactJS a framework by itself?',
          choices: [
            {
              id: 'a',
              text: 'Yes',
            },
            {
              id: 'b',
              text: 'No',
            },
          ],
          correct: 'b'
        }
      ],
      score: 0,
      current: 1
    }
  }
  setCurrent(current) {
    this.setState({current});
  }
  setScore(score) {
    this.setState({score});
  }
  render() {
    if (this.state.current > this.state.questions.length) {
      var boxscore = '';
      var results = <Results {...this.state}/>
    } else {
      var boxscore = <BoxScore {...this.state} />
      var results = '';
    }
    return (
      <div>
        {boxscore}
        <QuestionList setScore={this.setScore.bind(this)} setCurrent={this.setCurrent.bind(this)} {...this.state}/>
        {results}
      </div>
    );
  }
}

export default App;
