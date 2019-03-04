import * as React from 'react';

interface State {
  stick: boolean;
}

interface Props {
  children: (stick: boolean) => JSX.Element;
}

class Sticky extends React.PureComponent<Props, State> {
  state = {
    stick:
      typeof window !== 'undefined' && window.pageYOffset > 0 ? true : false,
  };

  setStickyState = () => {
    if (typeof window !== 'undefined') {
      this.setState({
        stick: window.pageYOffset > 0,
      });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.setStickyState, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setStickyState, false);
  }

  render() {
    return this.props.children(this.state.stick);
  }
}

export default React.memo(Sticky);
