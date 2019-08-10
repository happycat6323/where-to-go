import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import {
  Root,
  Header,
  Content,
  PeasantCalendar,
  Flex,
  Date,
  Year,
  Fortune,
} from './styles';

export default class Home extends PureComponent {
  // static propTypes = {
  // }

  render() {
    return (
      <Root>
        <Header>今天去哪玩？</Header>
        <Content>
          <PeasantCalendar>
            <Flex>
              <Date>
                <div>13</div>
                <div>星期日</div>
              </Date>
              <Year>
                <div>2019.10.13</div>
                <div>豬年 - 己亥年 甲戌月 癸未日</div>
              </Year>
            </Flex>
            <Fortune>
              農民曆運勢農民曆運勢農民曆運勢農民曆運勢農民曆運勢農民曆運勢農民曆運勢農民曆運勢農民曆運勢農民曆運勢農民曆運勢農民曆運勢
            </Fortune>
          </PeasantCalendar>
        </Content>
      </Root>
    );
  }
}
