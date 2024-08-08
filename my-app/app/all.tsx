import { View, Text } from "react-native";
import { Link } from "expo-router";
const All = () => {
  return (
    <View>
      <Text>all</Text>
      <View>
        <Link href="/(products)">All</Link>
        <Link href="/(products)/shoes">Shoes</Link>
        <Link href="/(products)/clothes">Clothes</Link>
      </View>
    </View>
  );
};
export default All;
