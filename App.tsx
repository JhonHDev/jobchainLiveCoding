import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [value, setValue] = useState('');
  const [isOnFocus, setIsOnFocus] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          isOnFocus && {borderWidth: 3, borderColor: '#7D77FF'},
        ]}>
        <TextInput
          value={value}
          onChangeText={setValue}
          style={[styles.input, isOnFocus && {top: 20}]}
          onFocus={() => setIsOnFocus(true)}
          onBlur={() => setIsOnFocus(false)}
        />

        <Text
          style={[
            styles.inputText,
            isOnFocus && styles.inputTextFocus,
            !isOnFocus && value.trim().length > 0 && {color: 'transparent'},
          ]}>
          {isOnFocus ? 'Correo electrónico' : 'Escribe tu correo electrónico'}
        </Text>

        {isOnFocus && (
          <Pressable
            onPress={() => setIsOnFocus(false)}
            style={styles.closeButton}>
            <Image
              source={require('./assets/close-icon.png')}
              width={25}
              height={25}
            />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: Dimensions.get('screen').width * 0.8,
    height: 60,
    borderWidth: 1,
    borderColor: '#1D1C47',
    backgroundColor: '#141534',
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    position: 'absolute',
    width: '100%',
    paddingVertical: 8,
    marginHorizontal: 20,
    color: '#FFF',
    zIndex: 50,
    fontSize: 18,
  },
  inputText: {
    color: '#7876B1',
    left: 0,
    fontSize: 18,
    fontWeight: 500,
  },
  closeButton: {
    zIndex: 50,
  },
  inputTextFocus: {
    fontSize: 10,
    top: -12,
    color: '#7D77FF',
  },
});
