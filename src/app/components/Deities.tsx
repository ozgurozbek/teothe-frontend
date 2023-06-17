import { Typography, Avatar } from 'antd';
import {
  CrownTwoTone, // Fundamental
  BookTwoTone, //Knowledge
  HeartTwoTone, //Life
  FireTwoTone, //Light
  UsbTwoTone, //Death
  TrophyTwoTone, // Tempest
  EyeInvisibleTwoTone, // Trickery
  PictureTwoTone, // Nature
  FlagTwoTone// War

} from '@ant-design/icons';

const { Title } = Typography;

function Domain({ name }) {
  switch (name) {
    case "War":
      return (<FlagTwoTone twoToneColor="#eb2f00" />);
    case "Nature":
      return (<PictureTwoTone twoToneColor="#eb0096" />);
    case "Trickery":
      return (<EyeInvisibleTwoTone twoToneColor="#0b2f96" />);
    case "Fundamental":
      return (<CrownTwoTone twoToneColor="#000000" />);
    case "Knowledge":
      return (<BookTwoTone twoToneColor="#eb962f" />);
    case "Tempest":
      return (<TrophyTwoTone twoToneColor="#eeee00" />);
    case "Life":
      return (<HeartTwoTone twoToneColor="#eb2f96" />);
    case "Light":
      return (<FireTwoTone twoToneColor="#eb2f42" />);
    case "Death":
      return (<UsbTwoTone twoToneColor="#424242" />);
    default:
      return ("Error")
  }
}

function Deity({ imageSrc, descriptionProps }) {
  return (
    <div>
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        src={imageSrc}
        alt={descriptionProps.title}
      />
      <Title>{descriptionProps.title}</Title>
      <p>{descriptionProps.body}</p>
      <i>{descriptionProps.domain}</i>
    </div>
  );
}

export default function DeitiesInformation() {
  return (
    <section>
      <Deity
        imageSrc={'https://ozgurozbek.github.io/dnd/min_images/Jenelius_Londste.png'}
        descriptionProps={{
          title: 'Jenelius Londste',
          body: 'Demigoddess of devotion, usually associated with fanatic determination.',
          domain: <div><Domain name={"Life"}/><Domain name={"Tempest"}/></div>,
        }}
      />

      <Deity
        imageSrc={'https://ozgurozbek.github.io/dnd/min_images/Lcaoc.jpg'}
        descriptionProps={{
          title: 'Lcaoc',
          body: 'God of wit, right side of Mceeju. Undisputed lord of the Outer Planes. Even though people does not pray to him, any being that has an order or a way of thinking and functioning give power to Lcaoc. Also mentioned as the God of civilization. He promotes united work towards a single work and sets in place laws to keep his followers undistracted from ever moving forward.',
          domain: 'Knowledge',
        }}
      />

      <Deity
        imageSrc={'https://ozgurozbek.github.io/dnd/min_images/Veri.png'}
        descriptionProps={{
          title: 'Veri',
          body: 'Goddess of life, sister responsible from Iz. The most widespread worshipped deity. Her light heals the sick and grows the crops. She is a beacon of hope and freedom. Her servants spread charity and goodwill while hunting the undead. Her being responsible of the plane Iz, is the reason she is an overdeity.',
          domain: 'Life, Tempest',
        }}
      />

      <Deity
        imageSrc={'https://ozgurozbek.github.io/dnd/min_images/Tharizdun.png'}
        descriptionProps={{
          title: 'Tharizdun',
          body: 'Crazed god of madness. Seeks to undo all there is and ever will be.',
          domain: 'Fundamental',
        }}
      />

    </section>
  )
}