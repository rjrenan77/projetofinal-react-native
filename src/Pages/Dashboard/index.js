/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Title, List } from './styles';
import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      console.tron.log(response.data);

      setMeetups(response.data);
    }

    loadMeetups();
  }, []);

  async function handleSubscribe(id) {
    const response = await api.post(`/meetups/${id}/inscriptions`);
  }
  return (
    <Background>
      <Container>
        <Title>DATA</Title>
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
