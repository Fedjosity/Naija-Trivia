import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile_app/core/theme/app_theme.dart';
import 'dart:ui';

class JoinPage extends StatelessWidget {
  const JoinPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Background Image
          Positioned.fill(
            child: Image.asset(
              'assets/images/join_bg.jpg',
              fit: BoxFit.cover,
            ),
          ),
          // Blur and Gradients
          Positioned.fill(
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
              child: Container(
                color: AppTheme.surface.withValues(alpha: 0.4),
              ),
            ),
          ),
          
          SafeArea(
            child: Column(
              children: [
                _buildHeader(context),
                Expanded(
                  child: Center(
                    child: _buildMainCard(context),
                  ),
                ),
                _buildTrustIndicator(context),
                _buildBottomStats(context),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildHeader(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 48.0),
      child: Column(
        children: [
          const Icon(
            Icons.history_edu,
            color: AppTheme.secondary,
            size: 48,
          ),
          const SizedBox(height: 8),
          Text(
            'DAILY NAIJA TRIVIA',
            style: Theme.of(context).textTheme.titleLarge?.copyWith(
                  fontWeight: FontWeight.bold,
                  letterSpacing: 2.0,
                  fontSize: 18,
                ),
          ),
        ],
      ),
    );
  }

  Widget _buildMainCard(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24.0),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(24),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 24, sigmaY: 24),
          child: Container(
            padding: const EdgeInsets.all(40),
            decoration: BoxDecoration(
              color: const Color(0xFF353A38).withValues(alpha: 0.4),
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: Colors.white.withValues(alpha: 0.05)),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFFE9C349).withValues(alpha: 0.05),
                  blurRadius: 40,
                )
              ],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'Claim Your Throne',
                  style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                        fontWeight: FontWeight.w800,
                        fontSize: 32,
                      ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 16),
                Text(
                  'Join the elite circle of Nigerian historians and pop-culture gurus.',
                  style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                        color: AppTheme.onSurfaceVariant,
                      ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 40),
                
                // Apple Login
                _buildAuthButton(
                  context,
                  title: 'Sign in with Apple',
                  icon: Icons.apple,
                  backgroundColor: Colors.white,
                  textColor: Colors.black,
                  iconColor: Colors.black,
                  onTap: () {},
                ),
                const SizedBox(height: 16),
                
                // Google Login (Placeholder icon for now)
                _buildAuthButton(
                  context,
                  title: 'Sign in with Google',
                  icon: Icons.g_mobiledata, // Replace with SVG later
                  backgroundColor: Colors.white.withValues(alpha: 0.05),
                  textColor: AppTheme.onSurface,
                  iconColor: Colors.white,
                  borderColor: AppTheme.secondary.withValues(alpha: 0.5),
                  onTap: () {},
                ),
                const SizedBox(height: 16),
                
                // Email Method
                _buildAuthButton(
                  context,
                  title: 'Sign up with email',
                  icon: Icons.alternate_email,
                  backgroundColor: const Color(0xFF262B29),
                  textColor: AppTheme.onSurfaceVariant,
                  iconColor: AppTheme.onSurfaceVariant,
                  borderColor: Colors.white.withValues(alpha: 0.05),
                  onTap: () => context.push('/email-signup'),
                ),
                
                const SizedBox(height: 40),
                
                // Divider OR
                Row(
                  children: [
                    Expanded(child: Divider(color: AppTheme.outlineVariant.withValues(alpha: 0.2))),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 16.0),
                      child: Text('OR', style: Theme.of(context).textTheme.labelMedium?.copyWith(color: AppTheme.onSurfaceVariant)),
                    ),
                    Expanded(child: Divider(color: AppTheme.outlineVariant.withValues(alpha: 0.2))),
                  ],
                ),
                const SizedBox(height: 24),
                
                // Continue as Guest
                GestureDetector(
                  onTap: () {},
                  child: Text(
                    'Continue as Guest',
                    style: TextStyle(
                      color: AppTheme.secondary,
                      fontWeight: FontWeight.w500,
                      decoration: TextDecoration.underline,
                      decorationColor: AppTheme.secondary.withValues(alpha: 0.3),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildAuthButton(
    BuildContext context, {
    required String title,
    required IconData icon,
    required Color backgroundColor,
    required Color textColor,
    required Color iconColor,
    Color? borderColor,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(vertical: 16),
        decoration: BoxDecoration(
          color: backgroundColor,
          borderRadius: BorderRadius.circular(12),
          border: borderColor != null ? Border.all(color: borderColor) : null,
          boxShadow: backgroundColor == Colors.white
              ? [BoxShadow(color: Colors.white.withValues(alpha: 0.1), blurRadius: 15)]
              : null,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, color: iconColor, size: 24),
            const SizedBox(width: 12),
            Text(
              title,
              style: TextStyle(
                color: textColor,
                fontSize: 16,
                fontWeight: FontWeight.w600,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildTrustIndicator(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 48.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.lock, size: 16, color: AppTheme.onSurfaceVariant.withValues(alpha: 0.6)),
          const SizedBox(width: 8),
          Text(
            'Your data is secure and will never be shared.',
            style: Theme.of(context).textTheme.labelSmall?.copyWith(
                  color: AppTheme.onSurfaceVariant.withValues(alpha: 0.6),
                ),
          ),
        ],
      ),
    );
  }

  Widget _buildBottomStats(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 48.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          _buildStatItem('50K+', 'PLAYERS'),
          _buildVerticalDivider(),
          _buildStatItem('12', 'REGIONS'),
          _buildVerticalDivider(),
          _buildStatItem('2000+', 'QUESTIONS'),
        ],
      ),
    );
  }

  Widget _buildStatItem(String value, String label) {
    return Column(
      children: [
        Text(
          value,
          style: const TextStyle(
            color: AppTheme.secondary,
            fontSize: 24,
            fontWeight: FontWeight.bold,
            fontFamily: 'Plus Jakarta Sans',
          ),
        ),
        Text(
          label,
          style: TextStyle(
            color: AppTheme.onSurfaceVariant,
            fontSize: 10,
            letterSpacing: 1.0,
          ),
        ),
      ],
    );
  }

  Widget _buildVerticalDivider() {
    return Container(
      width: 1,
      height: 32,
      color: AppTheme.outlineVariant.withValues(alpha: 0.2),
      margin: const EdgeInsets.symmetric(horizontal: 32),
    );
  }
}
