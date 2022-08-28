import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { IData } from '../../utils/interface/IData.interface';

type CardProp = {
  item: IData;
};

const Card = ({ item }: CardProp) => {
  return (
    <View style={cardStyle.cardContainer}>
      <View style={cardStyle.card}>
        <Image style={cardStyle.image} source={{ uri: item.image }} />

        <View style={cardStyle.cardContent}>
          <View>
            <Text style={cardStyle.cardHeader}>{item.name}</Text>
          </View>
          <View style={cardStyle.cardDescription}>
            <Text>
              {item.description.length > 200
                ? item.description.slice(0, 200) + '...'
                : item.description}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const cardStyle = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    shadowOffset: { width: -2, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.4,
  },
  card: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'stretch',
  },
  cardContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 12,
  },
  cardHeader: {
    fontWeight: 'bold'
  },
  cardDescription: {
    marginTop: 16,
  },
});

export default Card;
