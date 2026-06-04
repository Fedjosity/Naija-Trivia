import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  static const Color primary = Color(0xFF59DE9B);
  static const Color secondary = Color(0xFFE9C349);
  static const Color surface = Color(0xFF0F1412);
  static const Color onSurface = Color(0xFFDFE4E0);
  static const Color surfaceVariant = Color(0xFF313633);
  static const Color onSurfaceVariant = Color(0xFFBFC9C4);
  static const Color outlineVariant = Color(0xFF3F4945);

  static ThemeData get darkTheme {
    return ThemeData.dark().copyWith(
      scaffoldBackgroundColor: surface,
      colorScheme: const ColorScheme.dark(
        primary: primary,
        secondary: secondary,
        surface: surface,
        onSurface: onSurface,
        onSurfaceVariant: onSurfaceVariant,
        outlineVariant: outlineVariant,
      ),
      textTheme: TextTheme(
        displayLarge: GoogleFonts.plusJakartaSans(
          color: onSurface,
          fontWeight: FontWeight.w800,
        ),
        displayMedium: GoogleFonts.plusJakartaSans(
          color: onSurface,
          fontWeight: FontWeight.w800,
        ),
        displaySmall: GoogleFonts.plusJakartaSans(
          color: onSurface,
          fontWeight: FontWeight.bold,
        ),
        headlineMedium: GoogleFonts.plusJakartaSans(
          color: onSurface,
          fontWeight: FontWeight.bold,
        ),
        bodyLarge: GoogleFonts.inter(
          color: onSurface,
        ),
        bodyMedium: GoogleFonts.inter(
          color: onSurfaceVariant,
        ),
        labelLarge: GoogleFonts.inter(
          color: onSurface,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }
}
