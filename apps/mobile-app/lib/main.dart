import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile_app/core/router/app_router.dart';
import 'package:mobile_app/core/theme/app_theme.dart';

void main() {
  runApp(const ProviderScope(child: DailyNaijaTriviaApp()));
}

class DailyNaijaTriviaApp extends StatelessWidget {
  const DailyNaijaTriviaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Daily Naija Trivia',
      theme: AppTheme.darkTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeMode.dark,
      routerConfig: appRouter,
    );
  }
}
