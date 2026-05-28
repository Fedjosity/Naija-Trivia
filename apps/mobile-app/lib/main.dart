import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  runApp(const NaijaTriviaApp());
}

class NaijaTriviaApp extends StatelessWidget {
  const NaijaTriviaApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Daily Naija Trivia',
      theme: ThemeData(
        brightness: Brightness.dark,
        scaffoldBackgroundColor: const Color(0xFF0F1412),
        primaryColor: const Color(0xFF59DE9B),
        textTheme: GoogleFonts.interTextTheme(Theme.of(context).textTheme.apply(
              bodyColor: const Color(0xFFDFE4E0),
              displayColor: const Color(0xFFDFE4E0),
            )),
      ),
      home: const WelcomeScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class WelcomeScreen extends StatelessWidget {
  const WelcomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: Padding(
          padding: const EdgeInsets.all(8.0),
          child: CircleAvatar(
            backgroundColor: const Color(0xFF181D1A), // surface-container-low
            child: IconButton(
              icon: const Icon(Icons.menu, color: Color(0xFF59DE9B)),
              onPressed: () {},
            ),
          ),
        ),
        title: Text(
          'Daily Naija Trivia',
          style: GoogleFonts.plusJakartaSans(
            fontWeight: FontWeight.bold,
            fontSize: 18,
            letterSpacing: -0.5,
          ),
        ),
        centerTitle: true,
        actions: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: CircleAvatar(
              backgroundColor: const Color(0xFF181D1A),
              child: IconButton(
                icon: const Icon(Icons.account_circle, color: Color(0xFFBFC9C4)),
                onPressed: () {},
              ),
            ),
          ),
        ],
      ),
      body: Stack(
        children: [
          // Subtle decorative elements
          Positioned(
            bottom: -100,
            left: -100,
            child: Container(
              width: 250,
              height: 250,
              decoration: BoxDecoration(
                color: const Color(0xFF59DE9B).withValues(alpha: 0.05),
                shape: BoxShape.circle,
              ),
            ),
          ),
          Positioned(
            top: MediaQuery.of(context).size.height * 0.4,
            right: -120,
            child: Container(
              width: 300,
              height: 300,
              decoration: BoxDecoration(
                color: const Color(0xFFE9C349).withValues(alpha: 0.05),
                shape: BoxShape.circle,
              ),
            ),
          ),

          SafeArea(
            child: Column(
              children: [
                Expanded(
                  child: SingleChildScrollView(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 32.0, vertical: 16.0),
                      child: Column(
                        children: [
                          // Hero Image Container
                          Container(
                            height: MediaQuery.of(context).size.height * 0.45,
                            width: double.infinity,
                            decoration: const BoxDecoration(
                              borderRadius: BorderRadius.only(
                                topLeft: Radius.circular(160),
                                topRight: Radius.circular(160),
                                bottomLeft: Radius.circular(12),
                                bottomRight: Radius.circular(12),
                              ),
                              boxShadow: [
                                BoxShadow(
                                  color: Colors.black45,
                                  blurRadius: 30,
                                  offset: Offset(0, 15),
                                )
                              ],
                            ),
                            child: Stack(
                              children: [
                                ClipRRect(
                                  borderRadius: const BorderRadius.only(
                                    topLeft: Radius.circular(160),
                                    topRight: Radius.circular(160),
                                    bottomLeft: Radius.circular(12),
                                    bottomRight: Radius.circular(12),
                                  ),
                                  child: Image.asset(
                                    'assets/images/hero.jpg',
                                    fit: BoxFit.cover,
                                    width: double.infinity,
                                    height: double.infinity,
                                  ),
                                ),
                                // Gradient Overlay
                                Container(
                                  decoration: BoxDecoration(
                                    borderRadius: const BorderRadius.only(
                                      topLeft: Radius.circular(160),
                                      topRight: Radius.circular(160),
                                      bottomLeft: Radius.circular(12),
                                      bottomRight: Radius.circular(12),
                                    ),
                                    gradient: LinearGradient(
                                      begin: Alignment.bottomCenter,
                                      end: Alignment.topCenter,
                                      colors: [
                                        const Color(0xFF0F1412).withValues(alpha: 0.9),
                                        Colors.transparent,
                                      ],
                                      stops: const [0.0, 0.5],
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 48),

                          // Content
                          Text(
                            'THE JOURNEY BEGINS',
                            style: GoogleFonts.inter(
                              color: const Color(0xFF59DE9B),
                              fontWeight: FontWeight.w600,
                              fontSize: 12,
                              letterSpacing: 2.0,
                            ),
                          ),
                          const SizedBox(height: 16),

                          // Gold Text Gradient Headline
                          ShaderMask(
                            shaderCallback: (bounds) => const LinearGradient(
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                              colors: [Color(0xFFFFE088), Color(0xFFE9C349)],
                            ).createShader(bounds),
                            child: Text(
                              'Welcome to\nthe Culture',
                              textAlign: TextAlign.center,
                              style: GoogleFonts.plusJakartaSans(
                                color: Colors.white, // Needs to be white for ShaderMask
                                fontWeight: FontWeight.w800,
                                fontSize: 42,
                                height: 1.1,
                              ),
                            ),
                          ),
                          const SizedBox(height: 24),

                          Text(
                            "Dive into the heart of Africa's giant. Experience history, art, and wisdom through the lens of Nigeria's most elite trivia collection.",
                            textAlign: TextAlign.center,
                            style: GoogleFonts.inter(
                              color: const Color(0xFFBFC9C4),
                              fontSize: 16,
                              height: 1.5,
                            ),
                          ),
                          const SizedBox(height: 48),

                          // Glassmorphic CTA Button
                          Container(
                            decoration: BoxDecoration(
                              color: const Color(0xFF353A38).withValues(alpha: 0.4), // glass effect
                              borderRadius: BorderRadius.circular(50),
                              border: Border.all(
                                color: const Color(0xFF3F4945).withValues(alpha: 0.2),
                              ),
                            ),
                            padding: const EdgeInsets.only(left: 32, right: 8, top: 8, bottom: 8),
                            child: Row(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Text(
                                  'CONTINUE TO ARENA',
                                  style: GoogleFonts.inter(
                                    color: const Color(0xFFE9C349), // secondary-fixed-dim
                                    fontWeight: FontWeight.w600,
                                    fontSize: 12,
                                    letterSpacing: 1.0,
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
                                      colors: [Color(0xFF59DE9B), Color(0xFF004E2F)],
                                    ),
                                    boxShadow: [
                                      BoxShadow(
                                        color: const Color(0xFF59DE9B).withValues(alpha: 0.3),
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
                        ],
                      ),
                    ),
                  ),
                ),

                // Progress Indicator
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 32.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                        width: 48,
                        height: 4,
                        decoration: BoxDecoration(
                          color: const Color(0xFF59DE9B),
                          borderRadius: BorderRadius.circular(2),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        width: 8,
                        height: 4,
                        decoration: BoxDecoration(
                          color: const Color(0xFF313633),
                          borderRadius: BorderRadius.circular(2),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        width: 8,
                        height: 4,
                        decoration: BoxDecoration(
                          color: const Color(0xFF313633),
                          borderRadius: BorderRadius.circular(2),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
