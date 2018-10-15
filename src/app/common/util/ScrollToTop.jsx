import { Component } from 'react';
import { withRouter } from 'react-router-dom';

// automatically goes to top of web page, when visiting a new page
class ScrollToTop extends Component {
  // when we move to another location, this component gets called
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
