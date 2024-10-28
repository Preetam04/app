import { useRouter } from "expo-router";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountInfo() {
  const navigate = useRouter();
  return (
    <SafeAreaView>
      <Text>Account Info</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigate.back();
        }}
      />
    </SafeAreaView>
  );
}
