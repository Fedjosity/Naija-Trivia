import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile_app/core/theme/app_theme.dart';

class PickPathPage extends StatelessWidget {
  const PickPathPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Container(color: AppTheme.surface),
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const SizedBox(height: 16),
                  _buildTopBar(context),
                  const SizedBox(height: 32),
                  _buildProgressBar(),
                  const SizedBox(height: 32),
                  _buildHeroContent(context),
                  const SizedBox(height: 24),
                  Expanded(
                    child: _buildBentoGrid(context),
                  ),
                  _buildFooter(context),
                  const SizedBox(height: 24),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTopBar(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          children: [
            GestureDetector(
              onTap: () => context.pop(),
              child: Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  color: const Color(0xFF262B29), // surface-container-high
                  shape: BoxShape.circle,
                ),
                child: const Icon(Icons.arrow_back, color: AppTheme.onSurface),
              ),
            ),
            const SizedBox(width: 16),
            Text(
              'Daily Naija Trivia',
              style: Theme.of(context).textTheme.titleLarge?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
            ),
          ],
        ),
        Text(
          'Step 2 of 3',
          style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: AppTheme.onSurfaceVariant,
              ),
        ),
      ],
    );
  }

  Widget _buildProgressBar() {
    return Container(
      width: double.infinity,
      height: 6,
      decoration: BoxDecoration(
        color: const Color(0xFF313633), // surface-container-highest
        borderRadius: BorderRadius.circular(3),
      ),
      child: FractionallySizedBox(
        alignment: Alignment.centerLeft,
        widthFactor: 0.66,
        child: Container(
          decoration: BoxDecoration(
            color: AppTheme.secondary,
            borderRadius: BorderRadius.circular(3),
            boxShadow: [
              BoxShadow(
                color: AppTheme.secondary.withValues(alpha: 0.5),
                blurRadius: 12,
              )
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeroContent(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        RichText(
          text: TextSpan(
            style: Theme.of(context).textTheme.displaySmall?.copyWith(fontSize: 36),
            children: const [
              TextSpan(text: 'Choose Your\n'),
              TextSpan(
                text: 'Legacy',
                style: TextStyle(color: AppTheme.secondary),
              ),
            ],
          ),
        ),
        const SizedBox(height: 16),
        Text(
          'The Royal Digital Archive is vast. Select the realms where your knowledge reigns supreme. Pick at least two categories to begin your ascent.',
          style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                color: AppTheme.onSurfaceVariant,
                height: 1.5,
              ),
        ),
      ],
    );
  }

  Widget _buildBentoGrid(BuildContext context) {
    // A simplified scrollable list mimicking the bento grid for mobile
    return ListView(
      physics: const BouncingScrollPhysics(),
      children: [
        _buildCategoryCard(
          context,
          title: 'Nollywood',
          subtitle: 'ENTERTAINMENT',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9eXIheJNuOQnq8p9acmXCX5cG-D2roCdk05lTNeMsgloGq0zQeYiFkDmWwK7RAA0sKZNeVZx4L9K0HlQsEygdsEcWdrQQiYvA1PGJBTKV2L-n33uuEImFfLOHPP92U3w7o2bAwiUEe0eDWjYmBFGdP7zWdwhFP8kOVsMVjcIVkNXkLq9CkJQ7UUKnJm0lXVUDtObeYbvWn_1ewqJ5po7RBFvylWTWnG3kMjWnn14QyrttF-aWMbdvXpL65t14pCEVcyuZOdGLe32-',
          isSelected: true,
          height: 240,
        ),
        const SizedBox(height: 16),
        _buildCategoryCard(
          context,
          title: 'History',
          subtitle: 'LEGACY',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxJwbZdVrwXArTN_iFvSz54iib3PcWXAVw5JXMB5gFCWMN82yPlA4CbEhuCL-pzM-nuXF-K8Ac2W9SXAOQ3hhEWI321mki7e-OhCt5HM9VkSO703VYBK28n8X0IEkwRDfpZGEsJZvaPHtII3zY3Z9BsahA0R0emTpgg4cspDzFiDeffZaHnSGUAbxz8mmy677M7wrqPvUWLvFNra-bQrQcKW0T9TIfH1L_pFJFlrIOX6M7DoTQ_Fst5nz2lInC_ILkrELJ9z-KWOj7',
          isSelected: false,
          height: 200,
        ),
        const SizedBox(height: 16),
        Row(
          children: [
            Expanded(
              child: _buildCategoryCard(
                context,
                title: 'Music',
                subtitle: 'RHYTHM',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwxtX6-MxS7pF7oaAUtOVFyyCjGvrP5JCMFhBGGRBZAmfCOmNEm0-Hhk15yUnqSATFOYH2KGBeCc3AlRf4zJ5kUBfuE3aHgMmG0FqGiXsRx9qU1tMPJTwBFVCgKyv3PfkCxhQoh5vjO7M5L4TYBC4dV0KoJKUduenhFRz6xNa7iHKIV3owApuyLYKO6kDxbqpBmlD7Ome7DTcodv3FYTE8zpZVV0ZW5XIUCoxmstKednQ5wWs1bcxMTFO3r6F-VgXok1bnrNWLKe2M',
                isSelected: false,
                height: 180,
              ),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: _buildCategoryCard(
                context,
                title: 'Cuisine',
                subtitle: 'FLAVORS',
                imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTYPjGauhNCtNkqhyZS8S-M7l8ATHcIrk0JBHPv5sywuY3L0tJBzd-CMZoPIEdVVDxlUk_UkdWqzMv9I738ejAcJhAXyKSEoQ38MTj5DSwG3DcrsowNxPiZw_tQC03HMN-XRTx2tQ2LgfeLkNYEwLxgmZTEGzpQttLNyS_xDwuxw0dTJMs9g7WKUY62JQalLKOoCHa9Ncx3hcOzVDAc_q-kZTJdeVfWIO0SgWEuxhQrcsVrfslUm2zFf4A6YhA36h6qQzCvgdZb6r0',
                isSelected: false,
                height: 180,
              ),
            ),
          ],
        ),
        const SizedBox(height: 16),
        _buildCategoryCard(
          context,
          title: 'Innovation',
          subtitle: 'MODERNITY',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRd1Z5YeFCYRNtyQHshJ9Njfh6L_6ETZxxBVCotSBo8W5tNycUBfDgXCQhDDMCr6irsidaogV7wg3CD8SddEMDuLpAkazxG3GbY0azc0Y82ZisxVUbJXKc_2SpzRKS9A-6vEVDMp815KhDXHPJB78q19R8rsnIAOtLvGSb8Bv1730dzAe0a4gM8UlouyRNKiu1KJ2L5WO1KkAOusWXIgEQsQodqsn_u6lg7uSQN72ijqkIo5C5sYZUsd5WSz92F8XJHAK-dR8VueS9',
          isSelected: false,
          height: 180,
        ),
      ],
    );
  }

  Widget _buildCategoryCard(
    BuildContext context, {
    required String title,
    required String subtitle,
    required String imageUrl,
    required bool isSelected,
    required double height,
  }) {
    return Container(
      height: height,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: isSelected ? AppTheme.secondary.withValues(alpha: 0.4) : AppTheme.outlineVariant.withValues(alpha: 0.1),
          width: isSelected ? 2 : 1,
        ),
        color: const Color(0xFF181D1A), // surface-container-low
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Stack(
          children: [
            Positioned.fill(
              child: ColorFiltered(
                colorFilter: ColorFilter.mode(
                  Colors.grey,
                  isSelected ? BlendMode.dst : BlendMode.saturation,
                ),
                child: Image.network(
                  imageUrl,
                  fit: BoxFit.cover,
                  opacity: const AlwaysStoppedAnimation(0.5),
                ),
              ),
            ),
            Positioned.fill(
              child: Container(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.bottomCenter,
                    end: Alignment.topCenter,
                    colors: [
                      const Color(0xFF0A0F0D), // surface-container-lowest
                      Colors.transparent,
                    ],
                  ),
                ),
              ),
            ),
            Positioned(
              bottom: 16,
              left: 16,
              right: 16,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        subtitle,
                        style: TextStyle(
                          color: AppTheme.secondary,
                          fontSize: 10,
                          fontWeight: FontWeight.bold,
                          letterSpacing: 2.0,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        title,
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                    ],
                  ),
                  if (isSelected)
                    Container(
                      width: 32,
                      height: 32,
                      decoration: const BoxDecoration(
                        color: AppTheme.secondary,
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(Icons.check, color: Color(0xFF3C2F00), size: 16),
                    )
                  else
                    Container(
                      width: 32,
                      height: 32,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        border: Border.all(color: AppTheme.outlineVariant),
                      ),
                      child: const Icon(Icons.add, color: Colors.white24, size: 16),
                    ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildFooter(BuildContext context) {
    return Column(
      children: [
        const Divider(color: AppTheme.outlineVariant, height: 32),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    _buildAvatarPlaceholder(),
                    Transform.translate(offset: const Offset(-8, 0), child: _buildAvatarPlaceholder()),
                    Transform.translate(offset: const Offset(-16, 0), child: _buildAvatarPlaceholder()),
                  ],
                ),
                Text(
                  'Join 2.4k others in Nollywood today',
                  style: TextStyle(color: AppTheme.onSurfaceVariant, fontSize: 12),
                ),
              ],
            ),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                gradient: const LinearGradient(
                  colors: [AppTheme.primary, Color(0xFF004E2F)],
                ),
                boxShadow: [
                  BoxShadow(
                    color: AppTheme.primary.withValues(alpha: 0.2),
                    blurRadius: 16,
                  )
                ],
              ),
              child: Row(
                children: const [
                  Text(
                    'Continue',
                    style: TextStyle(
                      color: Color(0xFF002111),
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(width: 8),
                  Icon(Icons.chevron_right, color: Color(0xFF002111)),
                ],
              ),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildAvatarPlaceholder() {
    return Container(
      width: 32,
      height: 32,
      decoration: BoxDecoration(
        color: const Color(0xFF262B29),
        shape: BoxShape.circle,
        border: Border.all(color: AppTheme.surface, width: 2),
      ),
      child: const Icon(Icons.person, size: 16, color: AppTheme.onSurfaceVariant),
    );
  }
}
