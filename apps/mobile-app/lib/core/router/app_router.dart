import 'package:go_router/go_router.dart';
import 'package:mobile_app/features/onboarding/presentation/pages/welcome_page.dart';
import 'package:mobile_app/features/auth/presentation/pages/join_page.dart';
import 'package:mobile_app/features/auth/presentation/pages/email_signup_page.dart';
import 'package:mobile_app/features/onboarding/presentation/pages/pick_path_page.dart';

final appRouter = GoRouter(
  initialLocation: '/welcome',
  routes: [
    GoRoute(
      path: '/welcome',
      builder: (context, state) => const WelcomePage(),
    ),
    GoRoute(
      path: '/join',
      builder: (context, state) => const JoinPage(),
    ),
    GoRoute(
      path: '/email-signup',
      builder: (context, state) => const EmailSignupPage(),
    ),
    GoRoute(
      path: '/pick-path',
      builder: (context, state) => const PickPathPage(),
    ),
  ],
);
