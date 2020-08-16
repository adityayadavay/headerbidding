import React from "react";
import { connect } from "react-redux";
import * as ReferralActionCreators from "./actions/adverstisingActions";

class AvertisingSlotContainer extends React.Component {
  state = {
    advertisingList: [],
  };
  componentDidUpdate() {
    if (!this.state.advertisingList.length) {
      this.setState({
        advertisingList: this.props.advertisingList,
      });
    }
  }
  componentDidMount() {
    this.props.getAdvertisingList();
  }

  getSecondHighest = () => {
    const { advertisingList } = this.state;
    let first = { cpi: 0 },
      second = { cpi: 0 };
    for (let i = 0; i < advertisingList.length; i++) {
      const obj = advertisingList[i];
      if (obj.cpi > first.cpi) {
        second = first;
        first = obj;
      } else if (obj.cpi > second.cpi && obj.cpi < first.cpi) {
        second = obj;
      }
    }
    return [first, second];
  };
  render() {
    const list = this.getSecondHighest();

    list.map((obj) => console.log(obj));
    // console.log(renderElements);
    //
    return (
      <React.Fragment>
        {list.map((obj) => (
          <a href={obj.href} target={"_blank"}>
            <img src={obj.image} alt=""></img>
          </a>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    advertisingList: state.adslist.advertisingList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAdvertisingList: () =>
      dispatch(ReferralActionCreators.getAdvertisingList()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvertisingSlotContainer);
