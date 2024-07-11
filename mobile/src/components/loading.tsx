import { ActivityIndicator, StatusBar, View } from 'react-native'

export function Loading() {
  return (
    <View className="flex-1 bg-zinc-950 items-center justify-center">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <ActivityIndicator className=" text-lime-400" />
    </View>
  )
}
