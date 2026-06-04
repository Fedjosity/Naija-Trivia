import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile_app/core/theme/app_theme.dart';
import 'dart:ui';

class EmailSignupPage extends StatelessWidget {
  const EmailSignupPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Background Pattern (Solid surface for now)
          Container(color: AppTheme.surface),
          
          SafeArea(
            child: SingleChildScrollView(
              child: Column(
                children: [
                  _buildHeader(context),
                  const SizedBox(height: 32),
                  _buildMainCard(context),
                  const SizedBox(height: 32),
                  _buildFooter(context),
                  const SizedBox(height: 32),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildHeader(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 48.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 48,
            height: 48,
            decoration: BoxDecoration(
              color: AppTheme.secondary,
              borderRadius: BorderRadius.circular(12),
              boxShadow: [
                BoxShadow(
                  color: AppTheme.secondary.withValues(alpha: 0.2),
                  blurRadius: 10,
                )
              ],
            ),
            child: const Icon(
              Icons.workspace_premium,
              color: Color(0xFF3C2F00), // on-secondary
              size: 28,
            ),
          ),
          const SizedBox(width: 12),
          Text(
            'Daily Naija Trivia',
            style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.w800,
                  fontSize: 24,
                  letterSpacing: -0.5,
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
        borderRadius: BorderRadius.circular(32),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 20, sigmaY: 20),
          child: Container(
            padding: const EdgeInsets.all(32),
            decoration: BoxDecoration(
              color: const Color(0xFF353A38).withValues(alpha: 0.4),
              borderRadius: BorderRadius.circular(32),
              border: Border.all(color: AppTheme.secondary.withValues(alpha: 0.1)),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  'Join the Archive',
                  style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                        fontWeight: FontWeight.bold,
                        fontSize: 28,
                      ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 8),
                Text(
                  'Secure your place in the royal arena. Prestige awaits.',
                  style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                        color: AppTheme.onSurfaceVariant,
                      ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 32),
                
                _buildInputField(
                  label: 'FULL NAME',
                  hint: 'Chidi Adebayo',
                  icon: Icons.person,
                ),
                const SizedBox(height: 24),
                _buildInputField(
                  label: 'EMAIL ADDRESS',
                  hint: 'chidi@archive.ng',
                  icon: Icons.mail,
                ),
                const SizedBox(height: 24),
                _buildInputField(
                  label: 'PASSWORD',
                  hint: '••••••••••••',
                  icon: Icons.lock,
                  isPassword: true,
                ),
                const SizedBox(height: 32),
                
                // Submit Button
                GestureDetector(
                  onTap: () => context.push('/pick-path'),
                  child: Container(
                    padding: const EdgeInsets.symmetric(vertical: 20),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(16),
                      gradient: const LinearGradient(
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                        colors: [AppTheme.secondary, Color(0xFFAF8D11)], // secondary to secondary-container
                      ),
                      boxShadow: [
                        BoxShadow(
                          color: AppTheme.primary.withValues(alpha: 0.4),
                          blurRadius: 24,
                          offset: const Offset(0, 4),
                        )
                      ],
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: const [
                        Text(
                          'Create Account',
                          style: TextStyle(
                            color: Color(0xFF3C2F00),
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        SizedBox(width: 8),
                        Icon(Icons.arrow_forward, color: Color(0xFF3C2F00)),
                      ],
                    ),
                  ),
                ),
                
                const SizedBox(height: 40),
                
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Already a member? ',
                      style: TextStyle(color: AppTheme.onSurfaceVariant, fontSize: 14),
                    ),
                    GestureDetector(
                      onTap: () {},
                      child: const Text(
                        'Back to Login',
                        style: TextStyle(
                          color: AppTheme.secondary,
                          fontWeight: FontWeight.bold,
                          decoration: TextDecoration.underline,
                        ),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildInputField({
    required String label,
    required String hint,
    required IconData icon,
    bool isPassword = false,
  }) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 4.0, bottom: 8.0),
          child: Text(
            label,
            style: TextStyle(
              color: AppTheme.secondary.withValues(alpha: 0.8),
              fontSize: 12,
              fontWeight: FontWeight.w600,
              letterSpacing: 2.0,
            ),
          ),
        ),
        Container(
          decoration: BoxDecoration(
            color: const Color(0xFF313633), // surface-container-highest
            borderRadius: BorderRadius.circular(16),
          ),
          child: TextField(
            obscureText: isPassword,
            style: const TextStyle(color: AppTheme.onSurface),
            decoration: InputDecoration(
              hintText: hint,
              hintStyle: TextStyle(color: AppTheme.onSurfaceVariant.withValues(alpha: 0.4)),
              prefixIcon: Icon(icon, color: AppTheme.onSurfaceVariant),
              suffixIcon: isPassword
                  ? const Icon(Icons.visibility, color: AppTheme.onSurfaceVariant)
                  : null,
              border: InputBorder.none,
              contentPadding: const EdgeInsets.symmetric(vertical: 20),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildFooter(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        _buildFooterItem(Icons.history_edu, 'Heritage Verified'),
        const SizedBox(width: 32),
        _buildFooterItem(Icons.policy, 'Privacy Protocol'),
      ],
    );
  }

  Widget _buildFooterItem(IconData icon, String text) {
    return Row(
      children: [
        Icon(icon, size: 16, color: AppTheme.onSurfaceVariant.withValues(alpha: 0.4)),
        const SizedBox(width: 8),
        Text(
          text,
          style: TextStyle(
            fontSize: 12,
            color: AppTheme.onSurfaceVariant.withValues(alpha: 0.4),
          ),
        ),
      ],
    );
  }
}
