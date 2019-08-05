import React from 'react';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="wrapper">
        {/* <TopNav />
        <SideNav /> */}
        {this.props.children}
      </div>
    )
  }
}

export default Layout;