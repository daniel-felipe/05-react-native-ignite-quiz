import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { THEME } from '../../styles/theme';
import { styles } from './styles';

import Animated, { FadeInUp } from 'react-native-reanimated';
import { QUIZZES } from '../../data/quizzes';
import { LevelBars } from '../LevelBars';

type Props = TouchableOpacityProps & {
  data: (typeof QUIZZES)[0];
  index: number;
};

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

export function QuizCard({ data, index, ...rest }: Props) {
  const Icon = data.svg;

  return (
    <TouchableOpacityAnimated
      entering={FadeInUp.delay(index * 100)}
      style={styles.container}
      {...rest}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {Icon && <Icon size={24} color={THEME.COLORS.GREY_100} />}
        </View>

        <LevelBars level={data.level} />
      </View>

      <Text style={styles.title}>{data.title}</Text>
    </TouchableOpacityAnimated>
  );
}
