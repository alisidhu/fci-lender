/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/DashboardScreen` | `/ForgotPasswordScreen` | `/ForgotUserNameScreen` | `/LoginScreen` | `/MySplashScreen` | `/NewPasswordScreen` | `/PasswordSuccessScreen` | `/TutorialScreen` | `/_sitemap` | `/explore`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
