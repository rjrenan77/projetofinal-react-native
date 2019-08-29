/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import api from '~/services/api';

import { Container, List } from './styles';

import RegisteredMeetups from '~/components/RegisteredMeetup';

function Inscriptions({ isFocused }) {
  const [registeredMeetups, setRegisteredMeetups] = useState([]);

  async function loadRegisteredMeetups() {
    const response = await api.get('inscriptions');
    // console.tron.log(response.data);

    setRegisteredMeetups(response.data);
  }

  // useEffect(() => {
  //   loadRegisteredMeetups();
  // }, []);

  useEffect(() => {
    if (isFocused) {
      loadRegisteredMeetups();
    }
  }, [isFocused]);

  async function handleUnregisterMeetup(id) {
    await api.delete(`inscriptions/${id}`);
  }

  return (
    <Background>
      <Container>
        <List
          data={registeredMeetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <RegisteredMeetups
              onUnregisterMeetup={() => handleUnregisterMeetup(item.id)}
              data={item}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Inscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="check-circle" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Inscriptions);
