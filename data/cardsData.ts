import { ImageProps } from "react-native"

export type CardData = {
  image: ImageProps,
  title: string,
  body: string
}

export const cardsData: CardData[] = [
  {
    image: require('./../assets/images/avatar.jpg'),
    title: 'Profe the avatar',
    body: `
    This is the body of Brian The Avatar Card. \n
    This is the body of Brian The Avatar Card. \n
    This is the body of Brian The Avatar Card. \n
    This is the body of Brian The Avatar Card. \n
    This is the body of Brian The Avatar Card. \n
    This is the body of Brian The Avatar Card. \n
    This is the body of Brian The Avatar Card. \n
    `
  },
  {
    image: require('./../assets/images/ricardio.png'),
    title: 'Ricardio el de Berserk',
    body: 'Este tio tiene el corazon igual de grande que su apetito'
  },
  {
    image: require('./../assets/images/exdelegado.jpg'),
    title: 'Van Houten',
    body: 'El que lleva la gorra de Jurassic Park paratrás.'
  },
  {
    image: require('./../assets/images/tchuko.jpg'),
    title: 'Principe Zuko',
    body: 'Aquel que lo mismo echa fuego como da corriente.'
  },
]