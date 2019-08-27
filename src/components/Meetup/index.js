import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { parseISO, format } from 'date-fns';
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

export default function Meetup({ data }) {
  const data2 = new Date(data.date);
  const dateParsed = format(data2, 'D [de] MMMM, [às] H[h]', {
    locale: pt,
  });

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
      <TouchableOpacity onPress={() => {}}>
        <Button>
          <Label>Realizar Inscrição</Label>
        </Button>
      </TouchableOpacity>
    </Container>
  );
}
