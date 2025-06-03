import 'package:flutter/material.dart';
import 'package:frontend/city_card.dart'; // ✅ Replace 'frontend' with your real project name if different

class CityGraph extends StatelessWidget {
  final List<String> cityNames;
  final List<String> shortestPathSet;

  const CityGraph(this.cityNames, this.shortestPathSet, {super.key});

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
      ),
      itemCount: cityNames.length,
      itemBuilder: (context, index) {
        final cityName = cityNames[index];
        final isInShortestPath = shortestPathSet.contains(cityName);
        return CityCard(cityName, isInShortestPath);
      },
    );
  }
}
