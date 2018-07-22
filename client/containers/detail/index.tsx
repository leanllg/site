import React from 'react';
import http from 'lib/http';
import * as URL from 'constants/api/topfeed';
import Demo from './demo';
import Nav from '../../components/nav';

export default class Detail extends React.Component<{
  item_id: string;
}> {
  state = {
    loading: true,
    article_info: {}
  };
  async componentDidMount() {
    const { item_id } = this.props;
    try {
      const article = await http({
        url: URL.article_item,
        data: {
          item_id
        }
      });
      this.setState({
        loading: false,
        article_info: article
      });
    } catch (err) {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return (
      <div>
        <Demo />
        <div>this is bad demo</div>
        <Nav />
      </div>
    );
  }
}
