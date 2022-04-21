import {StyleSheet, Text, View} from "react-native";

import Colors from "../constants/colors";
import {appContext} from "../store/app-context";

const ListItem = () => {
  const {number, points} = appContext();

  return (
    <>
      <View>
        <View style={styles.row}>
          <Text style={styles.textBase}>{number}</Text>
          <Text style={styles.textBase}>{points}</Text>
        </View>
      </View>
    </>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  row: {
    padding: 11,
    backgroundColor: Colors.list,
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.3,
    marginHorizontal: 44,
  },
  listContainer: {
    padding: 11,
    backgroundColor: Colors.list,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.2,
  },
  textBase: {
    color: Colors.gray,
    fontFamily: "app-font",
    fontSize: 17,
    marginBottom: 5,
  },
});
