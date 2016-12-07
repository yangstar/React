import React from 'react'
let SliderItem = React.createClass({
    render() {
      let { count, item } = this.props;
      let width = 100 / count + '%';
      let url = `url(${item.src}) 50% 0% no-repeat`;
      return (
        <li className="slider-item" style={{width: width}}>
          <div style={{height:'480px',background:url}}>
          </div>
        </li>
      );
    }
})

export default SliderItem;