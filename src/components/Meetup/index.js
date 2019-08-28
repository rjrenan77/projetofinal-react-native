/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Top,
  Button,
  Image,
  Info,
  Date,
  Locale,
  Organizer,
  Label,
} from './styles';
import banner from '~/assets/banner.jpg';

export default function Meetup({ data, onSubscribe }) {
  const dateParsed = format(data.date, 'D [de] MMMM, [às] H[h]', {
    locale: pt,
  });

  function buttonClickded() {
    Alert.alert(
      'Sucesso!',
      'Usuário inscrito na meetup!',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }

  function functionCombined() {
    onSubscribe();
    buttonClickded();
  }

  return (
    <Container>
      <Top>
        <Image source={banner} />

        <Info>
          <Date>
            {' '}
            <Icon name="ac-unit" size={13} />
            {dateParsed}
          </Date>

          <Locale>
            {' '}
            <Icon name="location-on" size={13} />
            {data.location}
          </Locale>
          <Organizer>
            {' '}
            <Icon name="account-circle" size={13} />
            {data.user_meetup.name}
          </Organizer>
        </Info>
      </Top>

      <TouchableOpacity onPress={functionCombined}>
        <Button>
          <Label>Inscrever-se</Label>
        </Button>
      </TouchableOpacity>
    </Container>
  );
}
