import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import { useState } from 'react';

export default function App() {
    // useState for Add Tasks
    const [task, SetTask] = useState();

    const [TeskItem, SetTaskItems] = useState([])

    // Task Adding Function
    const headleAddTask = () => {
      SetTaskItems([...TeskItem, task])
      SetTask(null)
    }

  return (
    <View style={styles.container}>
      {/* today's tacks */}
      <View style={styles.TaskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* Task on on here */}
          {
            TeskItem.map((itemData) => {
              return (
                <Task text={itemData}/>
              )
            })
          }
          {/* <Task text={'Task 1'}/>
          <Task text={'Task 2'}/> */}
        </View>
      </View>

      {/* add Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.AddTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write Task'} value={task} onChangeText={text => SetTask(text)}></TextInput>

        <TouchableOpacity onPress={() => headleAddTask()}>
          <View style={styles.WrapperAdd} >
            <Text style={styles.TextAdd}> + </Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  TaskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  items: {
    marginTop: 30
  },

  AddTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    paddingLeft: 25
  },
  WrapperAdd: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  }
});
