import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile_app/core/theme/app_theme.dart';

class WelcomePage extends StatelessWidget {
  const WelcomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Background ankara pattern (simulated with a subtle grid or image if available, using solid surface for now)
          Container(color: AppTheme.surface),
          
          SafeArea(
            child: Column(
              children: [
                _buildAppBar(context),
                Expanded(
                  child: _buildBody(context),
                ),
                _buildProgressIndicator(),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildAppBar(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 24.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(
              color: const Color(0xFF181D1A), // surface-container-low
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.menu, color: AppTheme.primary),
          ),
          Text(
            'Naija Trivia',
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontSize: 18,
                  letterSpacing: -0.5,
                ),
          ),
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(
              color: const Color(0xFF181D1A),
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.account_circle, color: AppTheme.onSurfaceVariant),
          ),
        ],
      ),
    );
  }

  Widget _buildBody(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 32.0, vertical: 24.0),
        child: Column(
          children: [
            // Hero Image
            Container(
              width: double.infinity,
              height: 400, // aspect ratio 4/5 approx
              decoration: BoxDecoration(
                borderRadius: const BorderRadius.only(
                  topLeft: Radius.circular(160),
                  topRight: Radius.circular(160),
                  bottomLeft: Radius.circular(24),
                  bottomRight: Radius.circular(24),
                ),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withValues(alpha: 0.4),
                    blurRadius: 40,
                    offset: const Offset(0, 20),
                  )
                ],
                image: const DecorationImage(
                  image: AssetImage('assets/images/welcome_hero.jpg'),
                  fit: BoxFit.cover,
                ),
              ),
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(160),
                    topRight: Radius.circular(160),
                    bottomLeft: Radius.circular(24),
                    bottomRight: Radius.circular(24),
                  ),
                  gradient: LinearGradient(
                    begin: Alignment.bottomCenter,
                    end: Alignment.topCenter,
                    colors: [
                      AppTheme.surface,
                      Colors.transparent,
                    ],
                    stops: const [0.0, 0.4],
                  ),
                ),
              ),
            ),
            const SizedBox(height: 48),
            Text(
              'THE JOURNEY BEGINS',
              style: Theme.of(context).textTheme.labelLarge?.copyWith(
                    color: AppTheme.primary,
                    letterSpacing: 2.0,
                    fontSize: 12,
                  ),
            ),
            const SizedBox(height: 16),
            ShaderMask(
              shaderCallback: (bounds) => const LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [Color(0xFFFFE088), Color(0xFFE9C349)],
              ).createShader(bounds),
              child: Text(
                'Welcome to the Culture',
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.displayLarge?.copyWith(
                      fontSize: 48,
                      height: 1.1,
                      color: Colors.white, // Required for ShaderMask
                    ),
              ),
            ),
            const SizedBox(height: 24),
            Text(
              'Dive into the heart of Africa\'s giant. Experience history, art, and wisdom through the lens of Nigeria\'s most elite trivia collection.',
              textAlign: TextAlign.center,
              style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                    fontSize: 18,
                    height: 1.6,
                    color: AppTheme.onSurfaceVariant,
                  ),
            ),
            const SizedBox(height: 48),
            
            // CTA Button
            GestureDetector(
              onTap: () => context.push('/join'),
              child: Container(
                padding: const EdgeInsets.only(left: 32, right: 8, top: 8, bottom: 8),
                decoration: BoxDecoration(
                  color: const Color(0xFF353A38).withValues(alpha: 0.4),
                  borderRadius: BorderRadius.circular(999),
                  border: Border.all(color: AppTheme.outlineVariant.withValues(alpha: 0.2)),
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    const Text(
                      'CONTINUE TO ARENA',
                      style: TextStyle(
                        color: Color(0xFFE9C349),
                        fontWeight: FontWeight.w600,
                        letterSpacing: 1.0,
                        fontSize: 14,
                      ),
                    ),
                    const SizedBox(width: 32),
                    Container(
                      width: 48,
                      height: 48,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: const LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: [AppTheme.primary, Color(0xFF004E2F)],
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: AppTheme.primary.withValues(alpha: 0.3),
                            blurRadius: 20,
                          ),
                        ],
                      ),
                      child: const Icon(
                        Icons.arrow_forward,
                        color: Color(0xFF003921),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildProgressIndicator() {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 32.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 48,
            height: 4,
            decoration: BoxDecoration(
              color: AppTheme.primary,
              borderRadius: BorderRadius.circular(4),
            ),
          ),
          const SizedBox(width: 8),
          Container(
            width: 8,
            height: 4,
            decoration: BoxDecoration(
              color: const Color(0xFF313633),
              borderRadius: BorderRadius.circular(4),
            ),
          ),
          const SizedBox(width: 8),
          Container(
            width: 8,
            height: 4,
            decoration: BoxDecoration(
              color: const Color(0xFF313633),
              borderRadius: BorderRadius.circular(4),
            ),
          ),
        ],
      ),
    );
  }
}
