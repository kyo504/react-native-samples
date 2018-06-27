/**
 * Sequence, parallel, delay, and stagger with different easing functions.
 */
import React from 'react';
import { StyleSheet, View, Animated, Text, Easing, Button } from 'react-native';

export default class CompositeAnimation extends React.Component {
  constructor() {
    super();
    this.anims = [1, 2, 3].map(() => new Animated.Value(0));
  }

  render() {
    return (
      <View>
        <Button
          title="Press to Animate"
          onPress={() => {
            var timing = Animated.timing;
            Animated.sequence([
              // 첫 번째 버튼이 200만큼 오른쪽으로 이동
              timing(this.anims[0], {
                toValue: 200,
                easing: Easing.linear,
              }),
              // 400ms 만큼 딜레이
              Animated.delay(400), // Use with sequence
              // 첫 번째 버튼이 원래 위치로 돌아온다.
              timing(this.anims[0], {
                toValue: 0,
                easing: Easing.elastic(2), // Springy
              }),
              // 400ms 만큼 딜레이
              Animated.delay(400),
              // 3개의 튼이 딜레이를 가지고 순차적으로 수행된다. 200 만큼 오른쪽으로 갔다가 돌아온다.
              Animated.stagger(
                200,
                this.anims
                  .map(anim => timing(anim, { toValue: 200 }))
                  .concat(this.anims.map(anim => timing(anim, { toValue: 0 }))),
              ),
              // 400만큼 딜레이
              Animated.delay(400),
              // 동시에 3개의 버튼이 움직이는데 다른 Easing 함수가 적용된다.
              Animated.parallel(
                [
                  Easing.inOut(Easing.quad), // Symmetric
                  Easing.back(1.5), // Goes backwards first
                  Easing.ease, // Default bezier
                ].map((easing, ii) =>
                  timing(this.anims[ii], {
                    toValue: 320,
                    easing,
                    duration: 3000,
                  }),
                ),
              ),
              // 400 만큼 딜레이
              Animated.delay(400),
              // 3개 버튼이 200 만큼 딜레이를 가지고 순차적으로 수행되는데 원래 위치로 돌아온다.
              Animated.stagger(
                200,
                this.anims.map(anim =>
                  timing(anim, {
                    toValue: 0,
                    easing: Easing.bounce, // Like a ball
                    duration: 2000,
                  }),
                ),
              ),
            ]).start();
          }}
        />
        {['Composite', 'Easing', 'Animations!'].map((text, ii) => (
          <Animated.View
            key={text}
            style={[
              styles.content,
              {
                left: this.anims[ii],
              },
            ]}
          >
            <Text>{text}</Text>
          </Animated.View>
        ))}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  content: {
    backgroundColor: 'deepskyblue',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});
