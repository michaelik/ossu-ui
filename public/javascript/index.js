/* eslint-env es6 */

let React = require('react');
let ReactDOM = require('react-dom');

class App extends React.Component {
  render () {
    return (
      <div className='app'>
        <NavBar />
        <BodyContent />
      </div>
    );
  }
}

class NavBar extends React.Component {
  render () {
    return (
      <div className='navBar ui fixed inverted menu'>
        <div className='ui container'>
          <NavLogo />
          <NavButton />
          <NavButton />
          <Auth />
        </div>
      </div>
    );
  }
}

class NavLogo extends React.Component {
  render () {
    return (
      <div href='#' className='navLogo header item'>
        <img className='logo' src='../favicons/favicon-32x32.png' />
        OSSU
      </div>
    );
  }
}

class NavButton extends React.Component {
  render () {
    return (
      <a href='#' className='navButton item'>
        A Button!
      </a>
    );
  }
}


class Auth extends React.Component {
  constructor() {
    super();
    this.state = { 
      strategy: { 
        name: 'github',
        authorize_url: 'https://github.com/login/oauth/authorize',
        client_id: 'XXXXXXXX',
        auth_scope: 'user:email',
        callback: 'auth/github/callback'
      }
    }
  }


  constructAuthUrl(strategy) {
    return strategy.authorize_url + '?client_id=' + strategy.client_id +
      '&redirect_uri=http://ossu.io/login/' + strategy.name + '/authorize' +
      '&scope=' + strategy.auth_scope;
  }

  render () {
    return (
      <a href= {this.constructAuthUrl(this.state.strategy)} className='item pull right'> 
        Login or Sign Up with {this.state.strategy.name}!
      </a>
    );
  }
}

class BodyContent extends React.Component {
  render () {
    return (
      <div className='bodyContent'>
        <Masthead />
        <VerticalSegment />
        <HorizontalAlignedRow />
        <VerticalSegment />
        <VerticalSegment />
        Hello, I am the BodyContent
      </div>
    );
  }
}

class Masthead extends React.Component {
  render () {
    return (
      <div className='mastHead ui inverted masthead center aligned segment'>
        <div className='ui text container'>
          <h1 className='ui inverted header shadow'> OSSU </h1>
          <h1 className='ui inverted header'> OSSU </h1>
        </div>
        <div className='ui text container'>
          <h2> Learn Amazing things Here! Is this layout repobsive to window size in any way? </h2>
        </div>
      </div>
    );
  }
}

class ContentBox extends React.Component {
  render () {
    return (
      <div className='contentBox column'>
        <h3>Example Content</h3>
        <p> This is some more Example content </p>
      </div>
    );
  }
}

class HorizontalAlignedRow extends React.Component {
  render () {
    return (
      <div className='horizontalAlignedRow vertical stripe quote segment'>
        <div className='ui equal width stackable internally celled grid'>
          <div className='center aligned row'>
            <ContentBox />
            <ContentBox />
            <ContentBox />
          </div>
        </div>
      </div>
    );
  }
}

class VerticalSegment extends React.Component {
  render () {
    return (
      <div className='verticalSegment ui vertical stripe segment'>
        <VerticalSegmentContent />
      </div>
    );
  }
}

class VerticalSegmentContent extends React.Component {
  render () {
    return (
      <div className='verticalSegmentContent ui text container'>
        <h3 className='ui header'> This is just a little paragraph about nothing </h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);