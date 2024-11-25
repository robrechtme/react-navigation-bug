import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export const CustomBackButton = () => {
  const navigation = useNavigation();
  return <Button title="Back" onPress={() => navigation.goBack()} />;
};
