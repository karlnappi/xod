import React from 'react';

class NodeText extends React.Component {
  componentDidMount() {
    this.labelBbox = this.getBbox();
    this.forceUpdate();
  }
  getBbox() {
    return this.refs.label.getBBox();
  }
  getWidth() {
    return this.labelBbox.width;
  }
  getHeight() {
    return this.labelBbox.height;
  }
  getPosition() {
    const position = {
      x: this.props.position.x,
      y: this.props.position.y,
    };

    if (this.labelBbox) {
      const line = this.labelBbox;
      const yCorrection = Math.round(line.height / 4);
      position.y += yCorrection;
    }

    return position;
  }
  render() {
    return (
      <text
        className="NodeText"
        {...this.getPosition()}
        textAnchor="middle"
        ref="label"
      >
        {this.props.label}
      </text>
    );
  }
}

NodeText.propTypes = {
  position: React.PropTypes.any,
  label: React.PropTypes.string.isRequired,
};

export default NodeText;