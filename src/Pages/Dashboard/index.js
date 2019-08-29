/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigationFocus } from 'react-navigation';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Container, Title, List } from './styles';
import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

function Dashboard({ isFocused }) {
  const [meetups, setMeetups] = useState([]);

  async function loadMeetups() {
    const response = await api.get('meetups');

    console.tron.log(response.data);

    setMeetups(response.data);
  }
  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }
  }, [isFocused]);

  async function handleSubscribe(id) {
    await api.post(`/meetups/${id}/inscriptions`);
  }

  moment.locale('pt-br');
  const date = moment().format('L');

  return (
    <Background>
      <Container>
        <Title>{date}</Title>
        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup onSubscribe={() => handleSubscribe(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="meetup" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
