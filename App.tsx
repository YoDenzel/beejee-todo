import React from 'react';
import { StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { RootNavigation } from './src/navigation/RootNavigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={styles.gestureRoot}>
          <RootNavigation />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

const styles = StyleSheet.create({
  gestureRoot: {
    flex: 1,
  },
});

export default App;
